import React from 'react';
        const Errors=({formErrors}) =>(
        <div className='formErrors'>
          {Object.keys(formErrors).map((fieldName, i) => {
            if(formErrors[fieldName]!= null && formErrors[fieldName].length > 0){
              return (
                <p key={i}>{fieldName} {formErrors[fieldName]}</p>
              )        
            } else {
              return '';
            }
          })}
        </div>)
    
    
export default Errors;