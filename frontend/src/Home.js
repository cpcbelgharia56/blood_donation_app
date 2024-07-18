import React from "react";
import HomeSlider from "./HomeSlider";
import HomeCard from "./HomeCard";

function Home() {
    return (
        <>
            <HomeSlider></HomeSlider>
            <main className="card">
                <section class="firstclass">
                    <div class="first-about">
                        <h2><b>Importance of Blood Donation</b></h2>
                        <p>Blood donation helps people in need, and it helps people in your community. When you give, others live. Donors, especially those who donate regularly, keep our nation's blood supply stable. Although many people donate blood after disasters, blood is needed every day of the year. A decision to donate your blood can save a life, or even several if your blood is separated into its components – red cells, platelets and plasma – which can be used individually for patients with specific conditions</p>
                        <a href="#" className="btn btn-primary" style={{ borderRadius: "6px", backgroundColor: "#521fdb" }}>Know More</a>
                    </div>
                    <div class="first-image">
                        <img src="https://img.freepik.com/free-vector/blood-donation-symbol-with-hand-blood-bag_1308-115904.jpg" alt="" style={{ width: "450px", height: "400px" }} />
                    </div>
                </section>

                <hr />

                <section class="secondclass">
                    <div class="second-image">
                        <img src="https://img.freepik.com/free-vector/blood-donor-day-poster-with-heart-blood-drop_1017-25357.jpg?t=st=1720556984~exp=1720560584~hmac=eda483c4d3c96d025566a4e06dafe02436600a607602cb9c7ffb7d4281fee752&w=740" alt="" style={{ width: "450px", height: "400px" }} />
                    </div>
                    <div class="second-about">
                        <h2><b>Benefits of Blood Donation</b></h2>
                        <p> Did you know that people who donate blood are 88% less likely to suffer a heart attack and 33% less likely to acquire any type of cardiovascular disease. When you donate blood, it removes 225 to 250 milligrams of iron from your body, hence reducing the risk of heart disease. Donated blood is used to make a variety of different products, including: Red cells – carry oxygen. Most recipients of donated blood are given red cells to boost the oxygen-carrying abilities of their own blood. Platelets – are needed for blood clotting.</p>
                        <a href="#" className="btn btn-primary" style={{ borderRadius: "6px", backgroundColor: "#521fdb" }}>More About It</a>
                    </div>
                </section>

                <hr />

                <section class="thirdclass">
                    <div class="third-about">
                        <h2><b>Why do we need blood?</b></h2>
                        <p>Blood brings oxygen and nutrients to all the parts of the body so they can keep working. Blood carries carbon dioxide and other waste materials to the lungs, kidneys, and digestive system to be removed from the body. Blood also fights infections, and carries hormones around the body. By taking preventive action, the need for blood transfusions will be significantly reduced, at the same time as fortifying health systems more generally. 
                        </p>
                        <a href="#" className="btn btn-primary" style={{ borderRadius: "6px", backgroundColor: "#521fdb" }}>Know More</a>
                    </div>
                    <div class="third-image">
                        <img src="https://photoskart.com/wp-content/uploads/2022/05/free-blood-donate-stock-vector.jpg" alt="" style={{ width: "450px", height: "400px" }} />
                    </div>
                </section>
            </main>

            <HomeCard></HomeCard>
            
        </>
    );
}
export default Home;