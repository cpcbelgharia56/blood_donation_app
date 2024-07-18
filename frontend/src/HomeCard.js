import React from "react";
function HomeCard() {
    return (
        <>
            <div class="card-group" style={{gap : "3px"}}>
                <div class="card">
                    <img src="https://regencyhealthcare.in/wp-content/uploads/2018/08/The-do%E2%80%99s-and-donts-of-donating-blood-1200x800.png" class="card-img-top" style={{height : "390px"}}/>
                    <div class="card-body">
                        <h5 class="card-title">Abhishek Kumar</h5>
                        <p class="card-text">He is a Tweenty two year old matured man. He is suffered form <b>Anemia</b>,his blood of group is <b>A+</b>.</p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/blood-donation-650c486480d7d.jpg?resize=2048:*" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">Alexa Perry</h5>
                        <p class="card-text">She is a Thirty three year old matured woman. She is suffered form <b>kidney disease</b>,her blood of group is <b>O+</b>.</p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://imageio.forbes.com/specials-images/imageserve/5d8b46386de3150009a50de1/Fabian-founded-War-On-Cancer-after-battling-Leukemia-/960x0.png?format=png&width=960" class="card-img-top" style={{height : "390px"}}/>

                    <div class="card-body">
                        <h5 class="card-title">Andre Smith</h5>
                        <p class="card-text">He is a Twenty eight year old matured man. He is suffered form <b>leukemia</b>,his blood of group is <b>AB+</b>.</p>
                    </div>
                </div>
            </div>

            {/* <div>
                <p  style={{color: "black",fontWeight: "bold"}}>Blood donation is a friendly gesture. Blood owners should be Blood Donors. Blood is meant for circulation. Donate Blood. Blood Donors bring Sunshine. Keep Blood Bank shelves full. You may need Blood someday. Someone is needing Blood somewhere. Life of some patients is resting on a fraction of hope in quest of your gift of love.</p>
            </div> */}

        </>
    );
}
export default HomeCard;