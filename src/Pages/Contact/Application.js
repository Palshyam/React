import React from "react";

class Application extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {
        display: false,
        firstName : "",
        lastName : "",
        phone : 0,
        email : "",
        message : "",
      };
    }
    
   inputCheck = (e) => {
     let filter = e.target.getAttribute('filter')   
     e.target.value = e.target.value.replace(new RegExp(filter, 'g'), '')   
     this.setState({[e.target.name]: e.target.value})
     
   }
    
   submitCheck = () => {
     
     if(!this.state.firstName || !this.state.lastName){
       alert("A name field is empty.")
     } else if(this.state.phone.length < 10 || !this.state.phone){
       alert("Phone number is not long enough.")
     } else if (!this.state.email.match(/@./g)) {
       alert("Email is in the wrong format.")
     }
     else if (!this.state.message) {
        alert("A message field is empty.")
      }
     else {
       this.setState({display: true})
     }
  }
   
   resetForm = () => {
     this.setState({
       display: !this.state.display,
       firstName: '', 
       lastName: '', 
       phone: 0, 
       email: '',
       messsage: ''     
     })    
   }
    displayForm() {
      return (
        <div className="form">
            <div className="input-block">
            <input filter="[^a-zA-Z ]" name="firstName" placeholder="First Name" onChange={this.inputCheck} />
            </div>
            <div className="input-block">
            <input filter="[^a-zA-Z ]" name="lastName" placeholder="Last Name" onChange={this.inputCheck} />
            </div>
            <div className="input-block">
            <input filter="[^0-9]" maxLength="10" name="phone" placeholder="Phone Number" onChange={this.inputCheck} />
            </div>
            <div className="input-block">
            <input placeholder="Email Address" onChange={(e) => {this.setState({email:e.target.value})}} />
            </div>
            <div className="input-block">
            <textarea placeholder="Message" onChange={(e) => {this.setState({message:e.target.value})}} />
            </div>
            <div className="submit-button">
            <button onClick={this.submitCheck}>Submit</button>
            </div>
           
            </div>
      );
    }
    displayData() {
      return (
        <div className="form">
          
          <p>{this.state.lastName}, {this.state.firstName}</p>
          <p>{this.state.phone} | {this.state.email}</p>
          <div className="submit-button reset-button">
          <button onClick={this.resetForm}>Reset</button>
          </div>
        </div>
      )
    }
    render() {
      return this.state.display ? this.displayData() : this.displayForm();
    }
  }


  export default Application