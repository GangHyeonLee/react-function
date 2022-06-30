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
      mode:'read',
      selected_content_id:3,
      subject:{title:'WEB', sub:'world wid web'},
      welcome:{title:'Welcome!!',desc:'Hello!! React!!'},
      contents:[
        {id:1, title:'HTML',desc:'HTML is for imformation'},
        {id:2, title:'CSS',desc:'CSS is for design'},
        {id:3, title:'JavaScript',desc:'JavaScript is for interactive'},
      ]
    }
  }
  render(){
    console.log('APP render');
    let _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      let i = 0;
      while(i < this.state.contents.length){
        let data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
  return (
     <div>
      {/* <header>
        <h1><a href='/' onClick={function(e){
          e.preventDefault();  // a 태그가 가지고있는 본연의 기능을 없앤다.
          this.setState({mode :'welcome'});
        }.bind(this)}>{this.state.subject.title}</a></h1>
        {this.state.subject.sub}
        
        </header> */}

       {/* <Subject
       title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)} 
          ></Subject>*/}{/* <Subject /> */}
            
         
      <Subject
       title={this.state.subject.title} 
       sub={this.state.subject.sub}
       onChangePage={function(){
        this.setState({mode:'welcome'});
       }.bind(this)}
       >
       </Subject> 

       <TOC data={this.state.contents}
        onChangePage={function(id){
          this.setState({mode:'read',
        selected_content_id:Number(id)}
        );
        }.bind(this)}
        ></TOC>

       <Contents title={_title} desc={_desc}></Contents>
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
