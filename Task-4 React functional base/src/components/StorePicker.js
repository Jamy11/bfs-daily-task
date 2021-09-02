import React from 'react'
import {getFunName} from './helpers'
import { useHistory } from 'react-router';

const StorePicker = () => {
    const history = useHistory()
    let randomName =getFunName()
    function handleClick(e) {
        e.preventDefault();
        
        console.log('this is:', e);
        history.push(`/store/${randomName}`)
      }
    return (
        <form className="store-selector" onSubmit={handleClick}>
            <h2>Please Enter A Store</h2>
            <input type="text" required placeholder="Store Name" defaultValue={randomName}/>
            <button type="submit" >Visit Store →</button>
        </form>
    )
}

export default StorePicker
