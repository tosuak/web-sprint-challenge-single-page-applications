import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <nav>
          <Link to='/pizza'>
            <button id="order-pizza">Order Pizza</button>
          </Link>
        </nav>
    )
  }