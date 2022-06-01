
import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

import Progress from './Progress'

function Question(props) {

  const [positive, setPositive] = useState(false);
  const [negative, setNegative] = useState(false);
  const [neutral, setNeutral] = useState(false);

  //(@[A-Za-z0-9]+)|([^-,%0-9A-ZÁÀÂÃÉÈÊÍÌÓÒÔÕÚÇa-záàâãéèêíìóòôõúç \t])|(\w+:\/\/\S+)

    const onClickPositive = () => {
        setPositive(true)
        setNegative(false)
        setNeutral(false)
    }

    const onClickNegative = () => {
        setPositive(false)
        setNegative(true)
        setNeutral(false)
    }

    const onClickNeutral = () => {
        setPositive(false)
        setNegative(false)
        setNeutral(true)
    }

    const clickToNext = () => {
        if(positive | negative | neutral){
            if(positive){
                props.clickToNext(props.currentQuestion, 1)
            }
            if(negative){
                props.clickToNext(props.currentQuestion, -1)
            }            
            if(neutral){
                props.clickToNext(props.currentQuestion, 0)
            }
            
        }else {
            alert("Select one answer")
        }

        
    }

  return (
    <Card sx={{ width: "90%", minHeight: 420,boxShadow:
        "0px 3px 1px -2px ,0px 2px 2px 0px ,0px 1px 5px 0px " }}>

        <CardContent>
        
        <Progress currentQuestion={props.currentQuestion}></Progress>
        

          <Typography variant="h6" component="div">
            {props.tweet.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '')}
            {console.log(props.tweet.replace(/^https?:\/\//,""))}
          </Typography>

        

                <Button sx={{textTransform: "none", mt: 3, width: "95%", background: positive ? "lightgreen" : "white",
                '&:hover': {
                background: positive ? "lightgreen" : "lightgrey",
                }, color:"black", borderColor:"black",justifyContent: "flex-start" }} 
                 variant="outlined" onClick={onClickPositive}>
                    <div style={{fontWeight:"bold", marginRight:"15px"}}>POSITIVE: </div> The tweet contains positive language directly related to Novo Banco, such as expressions of success, compliance with payment deadlines or positive attitude.
                </Button>

                <Button sx={{ textTransform: "none", mt: 1, width: "95%", background: negative ? "#FF6666" : "white",
                '&:hover': {
                background: negative ? "#FF6666" : "lightgrey",
                }, color:"black", borderColor:"black",justifyContent: "flex-start", textAlign: 'left'}} 
                type="submit" variant="outlined" onClick={onClickNegative}>
                    <div style={{fontWeight:"bold", marginRight:"10px"}}>NEGATIVE: </div>The tweet contains negative language directly related to Novo Banco, such as expressions of criticism, judgment, questioning competence, suspicions of corruption or expressions of sarcasm.
                </Button>

                <Button sx={{textTransform: "none", mt: 1, width: "95%", background: neutral ? "lightblue" : "white",
                '&:hover': {
                background: neutral ? "lightblue" : "lightgrey",
                }, color:"black", borderColor:"black" ,justifyContent: "flex-start", textAlign: 'left'}} 
                type="submit" variant="outlined" onClick={onClickNeutral}>
                    <div style={{fontWeight:"bold", marginRight:"15px"}}>NEUTRAL: </div>The tweet contains a mix of both positive and negative language related to Novo Banco where none of them stand out. The tweet is not objective, is a subjective opinion or is not directly related to Novo Banco.
                </Button>



            
        </CardContent>
      <CardActions>
        <Button sx={{marginLeft: "auto", marginRight:'37px', marginTop:"0px", width:200}} size="small" color="primary" variant="outlined" onClick={clickToNext}>
          Next
        </Button>
      </CardActions>
    </Card>
  );
}


export default Question;


