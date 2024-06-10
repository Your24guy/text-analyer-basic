import { useState } from "react";

function TextForm(props) {
    const[text,setText]= useState("enter text here");
   
    const handleupclick = ()=>{
        console.log('click' , text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("convert to uppercse" , "success");
    }

    const copytext =()=>
    {
      let text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("copied the text" , "success");
    }

    
    const handleonchange = (event) => {
      setText(event.target.value);
    }
  return (
    <>
      <div className="container" style={{color:props.mode === "light"? "rgb(177, 174, 174)" : "white"}}>
      <h1>{props.head} </h1>
      <div className="input-group">
        <textarea className="form-control" id="mybox" value={text} onChange={handleonchange} style={{backgroundColor:props.mode === "light"? "white" : "rgb(177, 174, 174)" , color:props.mode === "light"? "rgb(177, 174, 174)" : "white"}} aria-label="With textarea"></textarea>
      </div>
      <button className="btn btn-primary my-3" onClick={handleupclick}>convert to uppercase</button>
     <button className="btn btn-primary my-3 mx-3" onClick={copytext}>copy</button>
      
      </div>
      <div className="container my-3" style={{color:props.mode === "light"? "rgb(177, 174, 174)" : "white"}}>
        <h1>your text summary </h1>
        <p>{text.length} is the character and {text.split(" ").length} is the number of words </p>
        <h4>time required to read the words : {0.008*text.split(" ").length}</h4> <span>previous :</span> <span>{text}</span>
      </div>
    </>
  );
}

export default TextForm;