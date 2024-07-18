const { constants } = require('buffer');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bcrypt = require("bcrypt")

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'anup@euphoriagenx.in',
        pass: 'blwjvnxilinvyela'
    }
});

async function hashPassword(plaintextPassword) {
    const hash = await bcrypt.hash(plaintextPassword, 10);
    // Store hash in the database
    return hash;
}
 
// compare password
async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
}

const app = express();

const url = 'mongodb+srv://bhowmicksrijit27:0IN98vPQZiZCb8kL@cluster0.gtbxek5.mongodb.net/';


mongoose.connect(url);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


app.use(express.json());

app.use(cors({
    origin: '*'   // allow to run from any site
}))

const Donor = require('./Donor')

app.get('/', (req, res) => {
    res.send('Welcome in api')
})

// Define a route to handle sending emails
app.post('/send-email', async (req, res) => {
    // Define email options
    const email = req.body.email
    const otp = req.body.otp

    const response = await Donor.find({ email: email })


    if (response.length > 0) {
        
        const mailOptions = {
            from: 'anup@euphoriagenx.in',
            to: req.body.email,
            subject: 'Password sent By Blood Donation App.',
            text: 'Your One Time Password(OTP) is : ' + otp
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.send({'message': '0'});
            } else {
                console.log('Email sent:', info.response);
                res.send({'message': '1'});
            }
        });
    }
    else{
        res.send({'message': '2'});
    }
});

//Post Method
app.post('/loginDonor', async (req, res) => {
    const name = req.body.name;
    const password = req.body.password

    const res1 = await Donor.find({email: req.body.email, name: name})

    if(res1.length > 0)
        {
            console.log(99,res1)

            const hpass = res1[0].password

            const result = await comparePassword(password, hpass)

            console.log(145, result)

        if(result)
            {
                res.send({'message': true})
            }
            else{
                res.send({'message': false})
            }
        }
        else
        {
            res.send({'message': false})
        }
})

//check email
app.post('/checkEmail', async (req, res) => {
    const email = req.body.email;
    try {
        const data = await Donor.find({ email: email });
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//change password
app.patch('/changePassword/:email', async (req, res) => {
    try {
        const data = await Donor.find({ "email": req.params.email })
        const id = data[0]._id
        const updatedData = req.body;
        const options = { new: true };

        const result = await Donor.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

app.post('/loginUser', async (req, res) => {
    const name = req.body.name;
    const password = req.body.password

    const res1 = await Donor.find({email: req.body.email, name:name})

    if(res1.length > 0)
        {
            console.log(99,res1)

            const hpass = res1[0].password

            const result = await comparePassword(password, hpass)

            console.log(145, result)

        if(result)
            {
                res.send({'message': true})
            }
            else{
                res.send({'message': false})
            }
        }
        else
        {
            res.send({'message': false})
        }
})


//Post Method
app.post('/registerDonor', async (req, res) => {
    const password = req.body.password;

    const hash = await hashPassword(password);
    
    const data = new Donor({
        email: req.body.email,
        name: req.body.name,
        password: hash,
        address: req.body.address,
        contact: req.body.contact,
        bloodgroup: req.body.bloodgroup
    })

    try {
        const response = await data.save();
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//Get all Method
app.get('/getAllDonor', async (req, res) => {
    try {
        const data = await Donor.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method for donor
app.get('/getAlldonor/:id', async (req, res) => {

    try {
        const data = await Donor.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get all Method for User
app.get('/getAlluser', async (req, res) => {
    try {
        const data = await Donor.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method for User
app.get('/getAlluserById/:id', async (req, res) => {

    try {
        const data = await Donor.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.get('/searchDonorByBloodgroup/:bloodgroup', async (req, res) => {
    const search = req.params.bloodgroup;
    try {
        const data = await Donor.find({ bloodgroup: search });
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.get('/searchDonorByAddress/:address', async (req, res) => {
    const searchAdd = req.params.address;
    try {
        const data = await Donor.find({ address: { $regex: searchAdd } });
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//sear by both address and bloodgroup
app.post('/searchByBoth', async (req, res) => {
    try {
        const data = await Donor.find({ address: { $regex: req.body.address }, "bloodgroup": req.body.bloodgroup });
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }

})

//Get by ID Method
app.get('/getDonorById/:id', async (req, res) => {
    try {
        const data = await Donor.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
app.patch('/updateDonor/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Donor.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
app.delete('/deleteDonor/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Donor.findByIdAndDelete(id);
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})
