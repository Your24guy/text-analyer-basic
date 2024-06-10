import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
import About from "./components/About.jsx";
import React,{useState} from "react";
import Alerts from "./components/Alerts.jsx";


function App() {
  const [mode, setMode] = useState('light')
 const [alert, setAlert] = useState(null)

 const showAlert =(message,type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(
    ()=>{
      setAlert(null)
    },2000
  )

 }
  const toggleMode =()=>{
    if(mode === 'light' || 'blue'){
      setMode('dark')
      document.body.style.backgroundColor ='rgb(177, 174, 174)';
      showAlert("dark mode activated" , "success");
    }
  }

  const toggleModeBlue =()=>{
    if(mode === 'light' || 'rgb(177, 174, 174)'){
      setMode('primary')
      document.body.style.backgroundColor ='#7676ff';
      showAlert("blue mode activated" , "success");
    }
  }
  const toggleModelight =()=>{
    if(mode==='blue' || 'black'){
      setMode('light')
      document.body.style.backgroundColor ='white';
      showAlert("light mode activated" , "success");
     }

  }
  const toggleModeGreen =()=>{
    if(mode==='blue' || 'black' || 'light'){
      document.navbar.style.backgroundColor='rgb(98 255 132)'
      document.body.style.backgroundColor ='rgb(199 255 211)';
      showAlert("green mode activated" , "success");
     }

  }
  return (
    <> 
    <Navbar title="textuse" about= "discover us" mode={mode} toggleMode={toggleMode} toggleModeBlue={toggleModeBlue} toggleModelight={toggleModelight} toggleModeGreen={toggleModeGreen} />
    <Alerts mode={mode} alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert}  head="Enter the text " mode={mode}/>
    <About /> 

    </div>
    </>
  );
}

export default App;
