import React,{ Component } from "react";

class Content extends Component{
    render(){
        return(
            <article>
            <h1>{this.props.title}</h1>
          {this.props.sub}

          <img src="img/dog.jpg"/>
          </article>
        )
    }
}

export default Content;