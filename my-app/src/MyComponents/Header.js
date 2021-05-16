import React from 'react'
import '../css/header.css'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export const Header = (props) => {

    return (
       <>

        <nav className="navbar">
            <ul>
                <li> <Link to="">{props.title}</Link></li>
                <li><Link to="">Home</Link></li>
                <li><Link to="/about">About</Link></li>
               { props.searchbar? <form action="">
                    <input type="text" />
                </form>:""}
            </ul>
        </nav>
       </>
    )
}

