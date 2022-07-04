//import logo from './logo.svg';
import './App.css';


import React, { Component, useState, } from "react";

function App() {
  return (
    <div className="container">
      <h1>Hello React!!</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}
// 문제: date 버튼을 넣고 누르면 sysdate 출력되게할것
function FuncComp(props){  // (props)매개변수를 통해 프롭스 받아서 출력하는 방법
  let numberState = useState(props.initNumber);
  let number = numberState[0];
  let setNumber = numberState[1];

  // let dateState = useState((new Date()).toString());
  // let date = dateState[0];
  // let setDate = dateState[1];

  let [date,setDate] = useState((new Date()).toString());

  return(
    <div className="container">
      <h2>function style component</h2>
      <p>Number:{number}</p>
      <p>Date:{date}</p>
      <input type='button' value='random' onClick={
        function(){
          setNumber(Math.random());
        }
      }></input>
      <input type='button' value='date' onClick={
        function(){
          setDate((new Date()).toString());
        }
      }></input>
      {/* this를 붙이면안된다. */}

    </div>
  );
}

let classStyle = 'color:red';

// 라이프사이클 동작순서 : constructor -> componentWillMount -> render -> componentDidMount
// 프로그램의 동작되었다가 종료될때 자동적으로 사용되어지는 함수.

// 여기에 적어둔 함수는 우리가 만드는것도 아니고, 
// 우리가 호출하는것도 아닌 프로그램에 내장되어 있는 함수가 자동적으로 실행되는 함수


class ClassComp extends Component{
  state = {
    number:this.props.initNumber,
    date:(new Date()).toString()
  }

//constructor -> componentWillMount -> render -> component

  componentWillUnmount(){
    console.log('%cclass => componentWillMount', classStyle);
  }

  componentDidMount(){
    console.log('%cclass => componentWillMount', classStyle);
  }

  render(){
    return(
      <div className="container">
        <h2>class style component</h2>
        <p>Number:{this.state.number}</p>  
        <p>Date:{this.state.date}</p>  
        {/* 위와같이 props가 들어갈 자리에 state를 넣어줌으로써 동적데이터로 바꿔주고 initNumber를 위와같이 number변수에 넣어줌 */}
        <input type='button' value='random' onClick={
          function(){
            this.setState({number:Math.random()});
          }.bind(this)
        }></input>
        <input type='button' value='date' onClick={
          function(){
            this.setState({date:(new Date().toString())});
          }.bind(this)
        }></input>
      </div>
    );
  }

}

export default App;
