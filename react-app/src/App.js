// import './App.css';
import React,{ Component } from 'react';
import TOC from './compornents/TOC.js';
import Subject from './compornents/Subject.js';
import ReadContent from './compornents/ReadContent.js';
import Control from './compornents/Control.js';
import CreateContent from './compornents/CreateContent.js';
import UpdateContent from './compornents/UpdateContent.js';

// 생성자에 스테이트 명명해서 사용
class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id = 3;  // 아래 컨텐트의 아이디값중 가장 큰값을 3으로 넣어줬다.
    this.state = {
      mode:'read',
      // 프롭스는 하위 컴포넌트에서 상위 컴포넌트로 전달할 수 없으므로 이벤트를 사용하여 전달!
      // 이런 점이 구조상의 문제로 인해 단점이 됨 ㅠ.ㅠ(구조가 복잡할 때 전달이 어려움 - redux)
      selected_content_id:3,
      Subject:{title: 'WEB', sub:'World Wide Wdb'},
      welcome:{title: 'Welcome', desc:'Hello, React!'},
      Content:[
        {id:1, title:'HTML', desc: 'HTML is for interaxtive'},
        {id:2, title:'CSS', desc: 'hehe'},
        {id:3, title:'JavaScript', desc: 'gogo'},
      ]
    }
  }

  render() {
    // 렌더함수 동작 시점 확인용 문자열 출력
    console.log('App render');
    let _title, _desc = null, _article;
    // 값과 타입까지 모두 같은 경우
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if(this.state.mode === 'read'){
      let i = 0;
      while(i < this.state.Content.length){
        let data = this.state.Content[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;

          break;
        }
        // i = i + 1;
        i++;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title,_desc){
        this.max_content_id = this.max_content_id + 1;
        // this.state.Content.push(
        //   {id:this.max_content_id,title:_title,desc:_desc}
        // );

          let _Content = this.state.Content.concat(
           {id:this.max_content_id,title:_title,desc:_desc}
         );

        this.setState({
          // Content : this.state.Content
          Content : _Content
        })
      }.bind(this)}></CreateContent>
    }

    return (
    <div>
      <Subject
        title={this.state.Subject.title}
        sub={this.state.Subject.sub}
        // 이벤트 직접 만들어 설정하기
        onChangePage={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}
      >
      </Subject>
      <TOC
        data={this.state.Content}
        onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)}
      ></TOC>
      {/* 현재 눌린 버튼(li 태그)의 효과를 onChangeMode로 받아서 구현해주도록 코딩! */}
      <Control
        onChangeMode={function(_mode){
          this.setState({
            // 매개변수로 받아온 값을 모드에 적용!
            mode:_mode
          });
        }.bind(this)}></Control>
      {/* 조건에 따른 변수 출력 */}
      {_article}
    </div>
    );
  }
}

export default App;