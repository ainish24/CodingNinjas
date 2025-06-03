import React from "react";

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("📥 componentDidMount - Component mounted!");
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("🔁 componentDidUpdate - Component updated!");
    if (prevState.count !== this.state.count) {
      console.log(`Count changed from ${prevState.count} to ${this.state.count}`);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("🤔 shouldComponentUpdate - Should the component update?");
    // Only allow update if count is less than 5
    return nextState.count < 5;
  }

  componentWillUnmount() {
    console.log("💥 componentWillUnmount - Cleaning up!");
    clearInterval(this.timer);
  }

  render() {
    console.log("🎨 render - Component is rendering");
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <p>This component will stop updating when count hits 5.</p>
      </div>
    );
  }
}

export default LifecycleDemo;
