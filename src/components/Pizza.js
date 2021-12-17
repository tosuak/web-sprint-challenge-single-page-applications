import React from 'react'

function Pizza({ details }) {
  if (!details) {
    return <h3>Working fetching your Pizza&apos;s details...</h3>
  }

  return (
    <div className='pizza container'>
      <h2>{details.name}</h2>
      <p>Pizza Size: {details.pizzaSize}</p>
      <p>Pizza Sauce: {details.pizzaSauce}</p>
      <p>Special Instructions: {details.specialOrder}</p>

      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default Pizza
