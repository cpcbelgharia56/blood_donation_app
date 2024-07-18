import React from 'react'
import HomeCard from './HomeCard'

const About = () => {
    return (
        <>
            <HomeCard></HomeCard>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What are the rules before donating blood?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>To make your donation as easy as possible and to avoid complications, follow these tips........</strong>
                            <br></br>
                            <ul>
                                <li><strong>Sleep well:</strong>Try to arrive for your blood donation well-rested. Although everyone has different needs, aim for around 8 hours of sleep the night before.</li>
                                <li><strong>Stay hydrated:</strong>Drink plenty of water. Before you donate, drink at least 16 ounces of water for the best blood donation experience. Drinking water helps reduce the risk of low blood pressure during blood donation, which is the most common cause of fainting. It also makes your veins easier to access and can speed up your donation. Avoid alcohol and caffeine, which can dehydrate you.</li>
                                <li><strong>Eat healthy:</strong>Avoid foods high in fat, like fries or ice cream. Donating blood can make your iron level drop—you can prepare your body by eating foods rich in iron and vitamin C before you donate. Some examples of these kinds of foods include:
                                Beans and lentils, Nuts and seeds, Leafy greens like spinach or broccoli, Citrus fruits, Berries.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What age Cannot donate blood?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Be <strong>between 16 and 60 years old.</strong> Weigh at least 45 kg. Have a haemoglobin level of at least 13.0 g/dl for males and 12.5 g/dl for females. During a regular donation, <strong>you will give around 470ml of whole blood.</strong> This is about 8% of the average adult's blood volume. The body replaces this volume within 24 to 48 hours, and replenishes red blood cells in 10 to 12 weeks.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What are the side effects of donating blood?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Although severe adverse effects are rare, temporary reactions can occur, including:</strong>
                            <br></br>
                            <ul>
                                <li>Low blood pressure.</li>
                                <li>Light-headedness.</li>
                                <li>weakness.</li>
                                <li>Feeling cold.</li>
                                <li>nausea.</li>
                                <li>bleeding from the needle prick.</li>
                                <li>bleeding under the skin or bruising.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            What are the four types of blood donations?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <strong>Types of Blood Donations:</strong>
                            <br></br>
                            <ul>
                                <li>Whole Blood Donation. Whole blood is the most flexible type of donation.</li>
                                <li>Power Red Donation. During a Power Red donation, you give a concentrated dose of red cells, the part of your blood used every day for those needing transfusions as part of their care.</li>
                                <li>Platelet Donation.</li>
                                <li>Plasma Donation.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default About