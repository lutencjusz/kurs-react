import React from 'react';

const AddTodo = () => {

    let input;

    const handleSubmit = e => { // lokalnie obsÅuguje zdarzenie, nie przez redux
        console.log (input.value);
    }

    return <div>
        <div className="input-group mb-3">
            <input ref={n => (input = n)} type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <div className="input-group-append">
                <button onClick={handleSubmit} className="btn btn-outline-secondary" type="submit" id="button-addon2">Button</button>
            </div>
        </div>
    </div>
    }

export default AddTodo;