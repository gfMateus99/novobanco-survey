
import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';


function End(props) {


  return (
    <Card sx={{ width: "90%", mb:5,minHeight: 420,boxShadow:
        "0px 3px 1px -2px ,0px 2px 2px 0px ,0px 1px 5px 0px " }}>

      <CardContent>

      <Typography variant="h7" sx={{display:"block", textAlign:"left",mt: 1}}>
      Thank you for your participation!
        </Typography>

        <Typography variant="h7" sx={{display:"block", textAlign:"left",mt: 5}}>
            Your file will be automatically downloaded. If not, click on the button to download the file.
        </Typography>
      
        <Typography variant="h7" sx={{display:"block", textAlign:"left",mt: 1}}>
            Please send the file to <a href="gf.mateus@campus.fct.unl.pt">gf.mateus@campus.fct.unl.pt</a>    
        </Typography>

        <Button sx={{display:"block",ml:0, mt: 5, marginRight:'8px',  width:200}} size="small" color="primary" variant="outlined" onClick={props.downloadFile}>
            Download file
        </Button>
            
      </CardContent>

    </Card>
  );
}


export default End;


