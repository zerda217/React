import React, { Component } from 'react'

export default class About extends Component {
    state = {name: ''}

    handelChange = (e) => {
        this.setState({ name:e.targer.value })
    }

    handleClick = () => {
        const { name } = this.state;
            alert( name )
            this.setState( { name: '' })
    }

    render() {
        const { name } = this.state;
        const { handelChange, handleClick } = this;
        return (
            <div>
                <h1>ABOUT</h1>
                <input type="text" value={name} onChange={handelChange}/>

            <button type="submit" onClick={ handleClick }>Submit</button>
            </div>
        )
    }
}
