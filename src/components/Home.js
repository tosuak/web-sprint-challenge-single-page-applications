import React from "react";
import {Route, Link} from 'react-router-dom'
import Pizza from "./Pizza";

export default function Home(props) {
    const { Home } = props;

    return (
    <>
        <h1>Home Page</h1>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>
            <button id="order-pizza">Order Pizza</button>
        </Link>
        <Route exact path='/' component={Home} />
        <Route path='/pizza' component={Pizza}/>
    </>
    )
}