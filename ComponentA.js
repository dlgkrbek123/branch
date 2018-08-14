import React,{Component} from 'react'

export default class ComponentA extends Component{
  constructor(props){
    super(props)
    this.state={
      count:1
    }
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        count:this.state.count+1
      })
    },1000)    
  }

  render(){
    return (
      <div>{this.state.count}</div>
    )
  }
}