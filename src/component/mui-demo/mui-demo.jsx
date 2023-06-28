import { TextField } from "@mui/material";
import { useState } from "react";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export function MUIDemo()
{
    const [userName,setUserName] = useState('');
    function handleNameChange(e){
        setUserName(e.target.value);
    }
    return(
        <div>
            <h2>Bootstrap</h2>
            <div className="w-25">
                <label className="form-label">UserName</label>
                <div>
                <input type="text" className="form-control" />
              </div>
            </div>
           <h2>Material Input</h2>
           <TextField onChange={handleNameChange} variant="standard" label="UserName">
           </TextField>
           <p>
            Hello ! {userName}
           </p>
           <h2>Date</h2>
           <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
            </LocalizationProvider>rrrrr
        </div>
    )
}