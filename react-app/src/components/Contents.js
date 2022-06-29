import React,{ Component } from 'react'

class Contents extends Component{
    render(){
      return(
        <article>
          <h1>{this.props.title}</h1>
        {this.props.sub}
        </article>
      )
    }
  }

  export default Contents;