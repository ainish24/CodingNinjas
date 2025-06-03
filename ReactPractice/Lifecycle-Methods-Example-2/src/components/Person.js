import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here
  componentWillUnmount(){
    alert(this.props.person.email)
  }
  render() {
    const { img, email} = this.props.person;
    const {onc} = this.props;
    return (
      <div className="person">
        <b onClick={()=>onc(email)}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
