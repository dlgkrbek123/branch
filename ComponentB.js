import React,{Component} from 'react'

export default class ComponentA extends Component{
  constructor(props){
    super(props)
    this.state={
      clickCount:0
    }
  }

  render(){
    return (
      <div>
        <form onSubmit={this.countIncrement}>
          <button type="submit">click me</button>
        </form>
        <div></div>
      </div>
    )
  }
}