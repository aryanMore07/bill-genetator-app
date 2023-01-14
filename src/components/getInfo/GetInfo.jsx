import React from 'react';
import "./getinfo.css";

function GetInfo() {
    return (
        <div className='main-div'>  
            <p className='main-heading'>Your information</p>
            <div className='form-group'>
                <label htmlFor='client-name' className='client-name'>Name</label>
                <input id='client-name' type='text' className='form-control' placeholder='Enter your name...' />
            </div>
            <div className='form-group'>
                <label htmlFor='client-email' className='client-email'>Email</label>
                <input id='client-email' type='text' className='form-control' placeholder='Enter your email' />
            </div>
            <div className='form-group'>
                <label htmlFor='client-phone' className='client-phone'>Phone</label>
                <input id='client-phone' type='text' className='form-control' placeholder='Enter your mobile no...' />
            </div>
            
            <div className='sec-div'>
                <button className='btn'>Go Back</button>
                <button type="button" class="btn btn-dark">Next step</button>
            </div>
        </div>
    )
}

// function GetInfo() {
//     return (
//         <div className='main-div'>
//             <h2>Your Information</h2>
//             <div className="inner-div">
//                 <div className="input-group-prepend">
//                     <label htmlFor="client-name">Name</label>
//                     <input type="text" className="form-control" id='client-name' placeholder='Enter your name...' />
//                 </div>
//                 <div className="input-group-prepend">
//                     <label htmlFor="client-email">Email</label>
//                     <input type="text" className="form-control" id='client-email' placeholder='Enter your name...' />
//                 </div>
//                 <div class="input-group mb-3">
//                     <div>
//                         <label htmlFor="">Phone</label>
//                         <span class="input-group-text" id="basic-addon1">@</span>
//                     </div>
//                          <br />
//                     <input type="text" class="form-control" placeholder="Enter your phone number" />
//                 </div>
//             </div>
//         </div>
//     )
// }

export default GetInfo;
