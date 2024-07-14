import { Component } from "react";
import './ClassComponent.css'

class ClassComponent extends Component {
  constructor(props){
    super(props)

    this.state = {
      contador: 0
    }
  }

  add = ()=>{
    this.setState({contador: this.state.contador + 1})
  }

  render(){
    return(
      <div className="count">
        <h1>Contador: </h1>
        <p className="value-count">{this.state.contador}</p>
        <button className="btn-count" onClick={this.add}>Incrementar</button>
      </div>
    )
  }
}

export default ClassComponent