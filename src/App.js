import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import {ButtonNum} from './ButtonNum';
import {ButtonOper} from './ButtonOper';
import {Result} from './Result';
import 'bootstrap/dist/css/bootstrap.min.css';



function App(){ 
  const [leftNum, setLeftNum]=useState('0');
  const [operator, setOperator]=useState('');
  const [rightNum, setRightNum]=useState('0');
  const [result, setResult]=useState('');
  const [saveResult, setSaveResult]= useState([])
  const left=parseInt(leftNum);
  const right=parseInt(rightNum);
  
  
  const handleNum=(event)=>{
    const result=  event.target.value
    
    if (!isNaN(result)){
           
        if (operator!==""){
          setRightNum(rightNum.concat(result))
        }else{
          setLeftNum(leftNum.concat(result));  
        }
    }
    if (isNaN(result)){
      setOperator(result)
    }
    
  }
  
  const handleResult=()=>{
    switch (operator) {
    case "+":
     setResult(left+right)
      break;
    case "-":
      setResult(left-right)
      break;
    case "*":
      setResult(left*right)
      break;
    case "/":
      setResult(left/right)
      break;
    default:
      console.log('fatal')

  } 
  
}

 const handleEqual=()=>{
    handleResult()
  
    
  } 
  
  const handleErase=()=>{
     setSaveResult([...saveResult, result]) 
     setLeftNum('0')
     setRightNum('0')
     setOperator('')
     setResult('')
    
  }
   


  return (
    <Container>
      <Row>
      <Col>
      <ButtonNum value="1" text="1" handleNum={handleNum}/>
      <ButtonNum value="2" text="2" handleNum={handleNum}/>
      <ButtonNum value="3" text="3" handleNum={handleNum}/>
      <ButtonNum value="4" text="4" handleNum={handleNum}/>
      </Col>
      </Row>
      <Row>
      <Col>
      <ButtonNum value="5" text="5" handleNum={handleNum}/>
      <ButtonNum value="6" text="6" handleNum={handleNum}/>
      <ButtonNum value="7" text="7" handleNum={handleNum}/>
      <ButtonNum value="8" text="8" handleNum={handleNum}/>
      </Col>
      </Row>
      <Row>
      <Col>
      <ButtonNum value="9" text="9" handleNum={handleNum}/>
      <ButtonNum value="0" text="0" handleNum={handleNum}/>
      <ButtonNum value="+" text="+" handleNum={handleNum}/>
      <ButtonNum color="danger" value="C" text="C" handleNum={handleErase}  />
      </Col>
      </Row>
      <Row>
      <Col>
      <ButtonNum value="-" text="-" handleNum={handleNum}/>
      <ButtonNum value="*" text="*" handleNum={handleNum}/>
      <ButtonNum value="/" text="/" handleNum={handleNum}/>  
       <ButtonOper value="=" text="=" handleEqual={handleEqual}/> 
      </Col>
      </Row>
      <Col>    
      <Result text={left} text2= {operator} text3={right}   text4={result}/>
      <ul>
        {saveResult.map(value=><li>{value}</li>)}
      </ul>
      </Col>
   
   </Container>
  );
}

export default App;
