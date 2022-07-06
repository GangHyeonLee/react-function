import { Component } from 'react';
import './App.css';

class Nav extends Component{
  state = {
    list:[]   // 배열 형태만 구성해줌.  빈배열임. let arr = []
  }
  componentDidMount(){
    fetch('list.json')
    .then(function(result){
      console.log('ll',result)  // result는 문자형태로 데이터를 받는 매개변수
      return result.json();  // 문자형태인 json 형태로 되어있는 값들을 사용하기위해 (문자그대로 쓰면 출력만 가능하니까) , 
                            // 자바에서 사용가능한 객체형태로 바꿔준다. 
    })
    .then(function(json){  // 위에 있는 then 끝나고 연속해서 작동함.
      console.log(json);
      this.setState({list:json})  // : 문법적인형식이다.
    }.bind(this));
  }
  render(){
    let listTag = [];
    for(let i = 0; i < this.state.list.length; i++){
      let li = this.state.list[i]
      listTag.push(<li key={li.id}>
      <a href={li.id} data-id={li.id} onClick={function(e){
        e.preventDefault();
        this.props.onClick(e.target.dataset.id)
      }.bind(this)}>
      {li.title}</a></li>)
    }
    return(
      <nav>
      <ul>
        {listTag}
      </ul>
    </nav>
    )
  }
}

class Article extends Component{
  render(){
    return(
      <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
      </article>
    );
  }
}


class App extends Component{
  state = {
    article:{title:'Welcome',desc:'Hello, React Ajax'}
  }
  render(){
    return (
      <div className="App">
       <h1>web</h1>
       <Nav onClick = {function(id){
        fetch(id + '.json')
        .then(function(result){
          return result.json();
        })
        .then(function(json){
          this.setState({
            article:{title:json.title,desc:json.desc}
          })
        }.bind(this));
       }.bind(this)}>

       </Nav>

      <Article
       title={this.state.article.title}
       desc={this.state.article.desc}
       ></Article>
      </div>
  )};
}


export default App;