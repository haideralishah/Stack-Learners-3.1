import React from 'react';

const InputForm = (props) => {
    return (
        <div>
            <label>{props.labelName}:-<input type="text" value={props.stateValue} onChange={(event) => { props.changeHandler(props.stateName, event) }} /></label>
        </div>
    )
}


export default InputForm;