
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


function InicialComponent(props) {
    const [age, setAge] = React.useState('');
    const [name, setName] = React.useState('');

    const [id, setid] = React.useState('');

    const handleAge = (event) => {
        setAge(event.target.value);
        console.log(event.target.value)

    };

    const handleName = (event) => {
        setName(event.target.value);
        console.log(event.target.value)
    };


    const handleChange = (event) => {
        setid(event.target.value);
        console.log(event.target.value)
    };

    const startSurvey = (event) => {
        if(name !== "" && age !== "" && id !== "") {
            var namefinal = name + "-" + age + "-" + id;
            console.log(namefinal)
            props.startSurvey(namefinal, id)
        } else {
            alert("Fill all camps")
        }

    }

  return (
    <Card sx={{ width: "90%", mb:5,minHeight: 420,boxShadow:
        "0px 3px 1px -2px ,0px 2px 2px 0px ,0px 1px 5px 0px " }}>

      <CardContent>

        <Typography variant="h7" sx={{display:"block", textAlign:"left",mt: 1}}>
        The purpose of this study consists of classifying 250 tweets related to "Novo Banco". In this study, each participant will classify into three categories, 50 different tweets so that at least five different persons classify each tweet.              </Typography>
      
        <Typography variant="h7" sx={{display:"block", textAlign:"left",mt: 1}}>
        We kindly ask you to fill in the following camps to start your participation. <strong>When classifying tweets, all the options will remain the same, so please, when you start the questionnaire, read the options with attention to avoid answers with no sense.</strong> As this work is about "Novo Banco", it would help if you answered the questions from the "Novo Banco" point of view.
        
        </Typography>

        <Typography variant="h7" sx={{display:"block", textAlign:"left",mt: 1}}>
        <strong>Note</strong>: A file will be automatically downloaded at the end of this questionnaire. To complete your participation in this study, please send that file to  <a href="mailto:gf.mateus@campus.fct.unl.pt?subject=Novobanco Questionnaire">gf.mateus@campus.fct.unl.pt</a>       </Typography>
        

        <Typography variant="h7" sx={{display:"flex", textAlign:"left",mt: 1}}>
        Thank you for your participation!
        </Typography>

        <FormControl fullWidth>

        <TextField id="standard-basic" sx={{mt: 2}} value={name} label="Name" variant="standard" onChange={handleName}/>
        </FormControl>

        <FormControl sx={{mt: 2}}  fullWidth>

        <TextField id="standard-basic" label="Age" type={"number"} variant="standard" value={age} onChange={handleAge}/>
        </FormControl>

        <FormControl fullWidth>

        <InputLabel sx={{mt: 2}} id="demo-simple-select-label">Id</InputLabel>
        <Select
            sx={{mt: 2}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={id}
          label="Id"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>

        </Select>
        </FormControl>

            
      </CardContent>

      <CardActions>
        <Button sx={{marginLeft: "auto", marginRight:'8px', marginTop:"0px", width:200}} size="small" color="primary" variant="outlined" onClick={startSurvey}>
          Start participation
        </Button>
      </CardActions>
    </Card>
  );
}


export default InicialComponent;


