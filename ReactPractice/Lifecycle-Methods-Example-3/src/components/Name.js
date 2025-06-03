import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: ""
    };
  }

  // This function adds a character to the string.
  typeWriterEffect = () => {
    this.setState((prevState) => {
      let nextIndex= prevState.curIndex + 1
      let nextName=prevState.fullName.substring(0, prevState.curIndex)
      console.log(nextIndex)
      if(nextIndex>prevState.fullName.length+1){
        nextIndex=0
        nextName=""
      }
      return {
        curIndex: nextIndex,
        currentName: nextName
      };
    });
  };

  // Required lifecycle methods here


  componentDidUpdate(prevProps, prevState){
    const {showName}=this.props;
    if(showName != prevProps.showName){
      if(showName){
        this.intervalId=setInterval(this.typeWriterEffect, 500)
      }else{
        clearInterval(this.intervalId)
      }
    }
  }
  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}
