import './App.css';

import React, {useState} from "react";

import database from "./db/manualJson.json";
import Question from "./components/Question";
import InicialComponent from "./components/InicialComponent";

import logo from "./logo_fct.png"
import novobanco from "./novobanco.png"



function App() {

  const [db, setValue] = useState(database);

  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [initial, setinitial] = useState(true);
  const [namefinal, setnamefinal] = useState("");

  const [finish, setfinish] = useState(50);
  const [idtofill, setidtofill] = useState("");

  var tentativa = database;

    const downloadFile = async () => {

      const myData = tentativa;
      console.log(myData)
      const fileName = namefinal;
      const json = JSON.stringify(myData);
      const blob = new Blob([json],{type:'application/json'});
      const href = await URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = href;
      link.download = fileName + ".json";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      alert("Thank you for your participation! Please send the file to gf.mateus@campus.fct.unl.pt")
      setinitial(true)
      tentativa = database;
    }

    const clickToNext = (key, polarity) => {
      tentativa[key].manualClassification = polarity

      if((currentQuestion + 1) === finish) {
        downloadFile()
      }else {
        setcurrentQuestion(currentQuestion + 1)
      }
    }

    const startSurvey = (namefinal, id) => {
      setnamefinal(namefinal)
      setinitial(false)
      setidtofill(id)
      if(id === 1) {
        setcurrentQuestion(0)
        setfinish(50)
      } else if(id === 2){
        setcurrentQuestion(50)
        setfinish(100)
      } else if (id === 3) {
        setcurrentQuestion(100)
        setfinish(150)
      } else if (id === 4 ){
        setcurrentQuestion(150)
        setfinish(200)
      } else if (id=== 5){
        setcurrentQuestion(200)
        setfinish(250)
      } else{
        alert("Error")
      }


    }


  return (
    <div className="App">
      
      <h1 style={{marginBottom:30, textAlign:"left", marginLeft:90}}>Twitter data annotation</h1>
      <img style={{width:"15%", position:"absolute", top:20, right:300}} src={logo} alt="Logo" />
      <img style={{width:"15%",position:"absolute", top:22, right:80}} src={novobanco} alt="Logo" />


      {initial ?
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width:"100%", minHeight:200}}>
          <InicialComponent startSurvey={startSurvey}></InicialComponent>       
        </div>
        :
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width:"100%", minHeight:200}}>
          <Question key={currentQuestion} tweet={tentativa[currentQuestion].text} oficialIndex={currentQuestion} currentQuestion={currentQuestion-(50*(idtofill-1))} clickToNext={clickToNext}></Question>
        </div>
      }

    </div>
  );
}

export default App;
