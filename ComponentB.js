import React,{Component} from 'react'

export default class ComponentA extends Component{
  constructor(props){
    super(props)
    this.state={
      clickCount:0
    }
  }

  countIncrement(){
    this.setState({
      clickCount:this.state.clickCount+1
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.countIncrement}>
          <button type="submit">click me</button>
        </form>
        <div>{this.state.clickCount}</div>
      </div>
    )
  }
}