import React from 'react';
import "./selectPlan.css";
import { BsJoystick } from "react-icons/bs";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function SelectPlan() {
    return (
        <div className='select-plan-div'>
            <div className='select-plan-heading'>
                <p className='select-plan-Htext'>Select your plan</p>
                <p className='select-plan-Stext'>You have the option of monthly or yearly billing</p>
            </div>
            <div className="card-group">
                <div className="card main-card" style={{backgroundColor: "#DADADA"}}>
                    <div className="card-body">
                        <div className='plan-icon joy-stick'>
                            <BsJoystick />
                        </div>
                        <div className='text-keeper'>
                            <h5 className="card-title">Arcade</h5>
                            <p className="card-text">$9/Mo</p>
                        </div>
                    </div>
                </div>
                <div className="card main-card">
                    <div className="card-body">
                        <div className='plan-icon flat-pad'>
                            <VideogameAssetIcon />
                        </div>
                        <div className="text-keeper">
                            <h5 className="card-title">Advanced</h5>
                            <p className="card-text">$12/Mo</p>
                        </div>
                    </div>
                </div>
                <div className="card main-card">
                    <div className="card-body">
                        <div className='plan-icon gamepad'>
                            <SportsEsportsIcon />
                        </div>
                        <div className="text-keeper">
                            <h5 className="card-title">Pro</h5>
                            <p className="card-text">$15/Mo</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="toggle-div">
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography>Monthly</Typography>
                    <Switch inputProps={{ 'aria-label': 'ant design' }} />
                    <Typography>Yearly</Typography>
                </Stack>
            </div>
            <div className='sec-div'>
                <button className='btn'>Go Back</button>
                <button type="button" class="btn btn-dark">Next step</button>
            </div>
        </div>
    )
}

export default SelectPlan
