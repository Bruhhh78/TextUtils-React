import React from 'react';

const Alert = (props) => {
    const capitalize=(word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  return (
    <div>
      {props.checkHeading && (
        <div className={`alert alert-${props.checkHeading.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.checkHeading.type)}</strong>: {props.checkHeading.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;
