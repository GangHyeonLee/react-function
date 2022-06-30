import React,{ Component } from 'react'

class Contents extends Component{
    render(){
      console.log('Contents render');
      return(
        <article>
          <h1>{this.props.title}</h1>
        {this.props.desc}
        </article>
      )
    }
  }

  export default Contents;