import React from 'react';
import { isRegExp } from 'util';
import Inputs from './Inputs';
function RegTitle (){
    return ""
}
function Formdesc (){
    return (
        <div> 
              
        </div>
    )
}
class Formfields extends React.Component{
    render(){
        return (
           <div className="mywraper">
                <RegTitle />
                <Formdesc />
                <Inputs />
                
           </div>
        )
    }
}
export default Formfields;