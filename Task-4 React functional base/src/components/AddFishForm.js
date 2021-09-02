import React, { useState } from 'react'

const AddFishForm = (props) => {
    const [data, setData] = useState({
        'name': '',
        'price': '',
        'status': '',
        'desc': '',
        'imgae': ''
    })
    const changeData = e => {
        const name = e.target.name;
        const value = e.target.value;
        let newData = { ...data, [name]: value };
        setData(newData);
    }
    let createFish = event => {
        // 1.  stop the form from submitting
        event.preventDefault();

        // const fish = {
        //   name: this.nameRef.current.value,
        //   price: parseFloat(this.priceRef.current.value),
        //   status: this.statusRef.current.value,
        //   desc: this.descRef.current.value,
        //   image: this.imageRef.current.value
        // };

        // this.props.addFish(fish);
        props.setFishes(data);
        console.log(props.fishes)
        // refresh the form
        event.currentTarget.reset();
    };
    return (
        <form className="fish-edit" onSubmit={createFish}>
            <input name="name" type="text" placeholder="Name" onChange={changeData}/>
            <input
                name="price"
                //   ref={this.priceRef}
                onChange={changeData}
                type="text"
                placeholder="Price"
            />
            <select name="status"
            // ref={this.statusRef}
            onChange={changeData}
            >
                <option value="available" >Fresh!</option>
                <option value="unavailable" >Sold Out!</option>
            </select>

            <textarea name="desc"
                // ref={this.descRef} 
                onChange={changeData}
                placeholder="Desc" />
            <input
                name="image"
                //   ref={this.imageRef}
                onChange={changeData}
                type="text"
                placeholder="Image"
            />
            <button type="submit">+ Add Fish</button>
        </form>
    )
}

export default AddFishForm
