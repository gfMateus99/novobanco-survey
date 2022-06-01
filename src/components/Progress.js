
import React, {useState} from "react";
import LinearProgress from "@mui/material/LinearProgress";

function Progress(props) {



  return (
        
        <div style={{display:"flex", width:"100%",}}>

            <div style={{ fontSize:20, marginTop:0}}>
                {props.currentQuestion+1} 
            </div>
            <div style={{ fontSize:20, marginTop:0, marginLeft:4}}>
            /50
            </div>
            <LinearProgress sx={{ mb:4, mt:1.5, ml:4, width: "90%", backgroundColor:"lightGrey"}} variant="determinate" value={100*props.currentQuestion/50}/>

   
            
            
        </div>
        

  );
}
//            


export default Progress;


