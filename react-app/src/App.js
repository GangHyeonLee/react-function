//import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react'
import TOC from './components/TOC'  // ./ 이게 현재 위치라는 뜻임
import Subject from './components/Subject'
import Contents from './components/Contents'

// import Header from './test_homepage/Header'
// import Content from './test_homepage/Content';
// import Footer from './test_homepage/Footer';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      subject:{title: 'WEB', sub:'world wid web'},
      contents:[
        {id:1, title:'HTML',desc:'HTML is for imformation'},
        {id:2, title:'CSS',desc:'CSS is for design'},
        {id:3, title:'JavaScript',desc:'JavaScript is for interactive'},
      ]
    }
  }
  render(){
  return (
     <div>
       <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>  {/* <Subject/> */}   
       <TOC data={this.state.contents}></TOC>
       <Contents title="HTML" sub="HTML is HyperText Markup Language."></Contents>
     </div>
  );


  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  }
}

export default App;
