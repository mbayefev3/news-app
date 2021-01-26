import React from 'react'

const Form = (props) => {


    return (
        <div>


            <label htmlFor='search'>Search</label>
            <input type='search' id='search' name='search' onInput={props.handleSubmit} />







        </div>
    )
}



export default Form