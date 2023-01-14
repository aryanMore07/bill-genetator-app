import React from 'react';
import Summery from '../components/summary/Summary';
// import SelectPlan from '../components/plan/SelectPlan';
// import GetInfo from '../components/getInfo/GetInfo';
import "./home.css";

function Home() {
    return (
        <div className='container home-div'>
            <aside className='leftSide-div'>
                <div>
                    <p className='num' style={{backgroundColor: "#BCE0F6", color: "#072A4A"}}>1</p>
                    <p className='steps'>STEP 1</p>
                    <p className='desc'>YOUR INFO</p>
                </div>
                <div>
                    <p className='num-div-two'>2</p>
                    <p className='steps-div-two'>STEP 2</p>
                    <p className='desc-div-two'>SELECT PLAN</p>
                </div>
                <div>
                    <p className='num-div-three'>3</p>
                    <p className='steps-div-three'>STEP 3</p>
                    <p className='desc-div-three'>SUMMARY</p>
                </div>
            </aside>
            {/* <GetInfo /> */}
            {/* <SelectPlan /> */}
            <Summery />
        </div>
    )
}

export default Home
