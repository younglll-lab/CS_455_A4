import React from 'react'
import '../../index.css'

const Header = (props) => {
    return (
        <div>
            <h1 className="header" >{props.title}</h1>
        </div>
    )
}

export default Header

