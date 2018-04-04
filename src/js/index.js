import React from 'react';
import ReactDOM from 'react-dom';
import Formfields from './Formfields';
import './mystyle.css'
class App extends React.Component{
    render(){
        return(
           <Formfields />
            )
    }
}
ReactDOM.render( <App/>, document.getElementById("root"));