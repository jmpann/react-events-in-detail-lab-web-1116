import React from 'react'

class DelayedButton extends React.Component{
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
      event.persist()

    setTimeout(function(){
      return this.props.onDelayedClick(event)}.bind(this), this.props.delay)
      //Pass a reference to a callback function with setTimeout. You can to this by defining an anonymous function that returns another function
  }


  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    )
  }
}


// Your question really has nothing at all to do with setTimeout. You simply need to understand the difference between a function call and a reference to a function.
//
// Consider these four assignments:
//
// var one = function() { mike.showName(); };
// var two = mike.showName;
// var three = mike.showName();
// var four = (function() { mike.showName(); })();
// The first two assign a reference to a function to their respective variables. The last two, however, call functions (that's what the parens are for) and assign their return values to the vars on the left-hand side.
//
// How this relates to setTimeout:
//
// The setTimeout function expects as its first argument a reference to a function, so either one or two above would be correct, but three and four would not. However, it is important to note that it is not, strictly speaking, a mistake to pass the return value of a function to setTimeout, although you'll frequently see that said.
//
// This is perfectly fine, for example:
//
// function makeTimeoutFunc(param) {
//     return function() {
//         // does something with param
//     }
// }
//
// setTimeout(makeTimeoutFunc(), 5000);
// It has nothing to do with how setTimeout receives a function as its argument, but that it does.
//


module.exports = DelayedButton
