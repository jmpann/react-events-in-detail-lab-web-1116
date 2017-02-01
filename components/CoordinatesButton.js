import React from 'react'

class CoordinatesButton extends React.Component{
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
    //you can define a callback function as a property of your Component
    //call callback on this.props object(this = current Component)
    //pass the event into functions that will handle it. Call properties of that event
    //how come you don't have to define this anywhere?
  }

  render(){
    return (
      <button onClick={this.handleClick}>Click me!</button>
    )
  }
}


module.exports = CoordinatesButton
