import React from 'react';

import Errors from './Errors';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class Inputs extends React.Component{
    constructor(props){
        super(props);
        this.state={
          firstname:'',
          lastname:'',
          zipcode:'',
          email:'',
          username:'',
          password:'',
          confirmpassword:'',
          formErrors: {email: null, password: null},
          emailValid: null,
          passwordValid: null,
          usernameValid:null,
          confirmpasswordValid:null,
          firstnameValid:null,
          lastnameValid:null,
          formValid: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(e) {
          const name = e.target.name;
          const value = e.target.value
          this.setState({[name]:value}, 
            () => { this.validateField(name, value) });
      }
      handleSubmit(e) {
        e.preventDefault();
        alert('Success Form is submitted...');            
      }
      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let usernameValid = this.state.usernameValid;
        let confirmpasswordValid = this.state.confirmpasswordValid;
        let firstnameValid = this.state.firstnameValid;
        let lastnameValid = this.state.lastnameValid;
        switch(fieldName) {
          case 'lastname':
            lastnameValid = (value.length >= 8)?true:false;
            fieldValidationErrors.lastname = lastnameValid ? '' : ' is too short';
            break;
          case 'firstname':
            firstnameValid = (value.length >= 8)?true:false;
            fieldValidationErrors.firstname = firstnameValid ? '' : ' is too short';
            break;
          case 'email':
            emailValid = (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)?true:false);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = (value.length >= 6)?true:false;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
            case 'confirmpassword':
            confirmpasswordValid = (value === this.state.password)?true:false;
            fieldValidationErrors.confirmpassword = confirmpasswordValid ? '': 'is not matching';
            break;
            case 'username':
            usernameValid = (value.length >= 6)?true:false;
            fieldValidationErrors.username = usernameValid ? '': 'is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                        usernameValid: usernameValid,
                        confirmpasswordValid:confirmpasswordValid,
                        firstnameValid: firstnameValid,
                        lastnameValid: lastnameValid,
                      }, this.validateForm);
      }
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.passwordValid && this.state.confirmpasswordValid && this.state.firstnameValid && this.state.lastnameValid});
      }
    render(){
        return (
            <div className="container">
            <h1> Registration from </h1>
            <p>Join the community and improve your game<br/> with<b> ANGLR</b></p>
                <form onSubmit={this.handleSubmit} className="myform">
                <span>
                    <i className="fa fa-user fa-fw"></i>
                    <input type="text" name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handleChange}
                    className={(this.state.firstnameValid!=null && !this.state.firstnameValid)?'error':''}
                    />
                </span>
                <span>
                <i className="fa fa-user fa-fw"></i>
                <input type="text" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleChange}
                className={(this.state.lastnameValid!=null && !this.state.lastnameValid)?'error':''}
                />
                </span>
                <span>
                <i className="fa fa-map-marker fa-fw"></i>
                <input type="text"  maxLength="6" name="zipcode" placeholder="Zipcode" value={this.state.zipcode} onChange={this.handleChange}/>
              </span>
              <span>
                <i className="fa fa-envelope-o fa-fw"></i>
                <input type="email"  name="email" placeholder="Email"
                 value={this.state.email} 
                 onChange={this.handleChange} className={(this.state.emailValid!=null && !this.state.emailValid)?'error':''}
                 />
              </span>
              <span>
                <i className="fa fa-user fa-fw"></i>
                <input type="text" name="username" placeholder="Username" value={this.state.username} 
                onChange={this.handleChange}
                className={(this.state.usernameValid!=null && !this.state.usernameValid)?'error':''}
                />
              </span>
              <span>
                <i className="fa fa-unlock fa-fw"></i>
                
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}
                className={(this.state.passwordValid!=null && !this.state.passwordValid)?'error':''}
                />
              </span>
              <span>
                <i className="fa fa-lock fa-fw"></i>
                <input type="password" name="confirmpassword" placeholder="Confirm Password" value={this.state.confirmpassword} onChange={this.handleChange}
                className={(this.state.confirmpasswordValid!=null && !this.state.confirmpasswordValid)?'error':''}
                />
              </span>
              <p>By Regestering you agree to <br/>our <b>Terms</b> and <b>Privacy Ploicy</b></p>
              <span>
              <i className="fa fa- fa-fw"></i>
              <Errors formErrors={this.state.formErrors}/>
              <button className="App-button" disabled={!this.state.formValid} type="submit">Register</button>
              </span>
              <p className="down_text">Already have an account? <a href=""><b>SIGN IN</b></a></p>
            </form>
            {/* {JSON.stringify(this.state)} */}
            </div>
        )
    }
}
export default Inputs;
