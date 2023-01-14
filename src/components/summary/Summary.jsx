import React from 'react';
import "./summary.css";

function Summary() {
    return (
        <div className='summary-div'>
            <div className='summary-heading'>
                <p className='summary-Htext'>Summary</p>
            </div>
            <div className='summary-details'>
                <p className='summary-pTag'>Name: aryan</p>
                <p className='summary-pTag'>Email: aryan@you.in</p>
                <p className='summary-pTag'>Phone: 0987654321</p>
                <p className='summary-pTag'>Plan: Pro</p>
                <p className='summary-pTag'>Total: $16</p>
                <hr />
                <div className='summary-total'>
                    <p className='summary-grandTotal'>GrandTotal</p>
                    <p>$9</p>
                </div>
            </div>
            <div className='sec-div'>
                <button className='btn'>Go Back</button>
                <button type="button" class="btn btn-dark">Pay now</button>
            </div>
        </div>
    )
}

export default Summary
