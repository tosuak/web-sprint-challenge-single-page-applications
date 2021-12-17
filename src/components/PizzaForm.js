import React from "react";


export default function PizzaForm(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
  }

    return (
       
        <form id="pizza-form" onSubmit={onSubmit}>
            <h2>Build Your Own Pizza</h2>        
                <div className="for-group inputs">
                    <h4>Build Your Own Pizza</h4>

                    <div>{errors.name}</div>
                    <label>Name:
                        <input
                            id="name-input" 
                            value={values.name}
                            onChange={onChange}
                            name="name"
                            type='text'
                        />
                    </label>

                        <div>{errors.pizzaSize}</div>
                    <label>Choice of Size
                        <select
                            value={values.pizzaSize}
                            onChange={onChange}
                            name="pizzaSize"
                        >
                            <option value=''>- Select an option -</option>
                            <option value='Small'>Small</option>
                            <option value='Medium'>Medium</option>     
                            <option value='Large'>Large</option> 
                        </select>
                    </label>

                        <h4>Choice of Sauce</h4>
                        <div>{errors.pizzaSauce}</div>
                        <label>Original Red
                            <input 
                                type='radio'
                                name="pizzaSauce"
                                value='Original Red'
                                onChange={onChange}
                                checked={values.pizzaSauce === 'Original Red'}
                            />
                        </label>

                        <label>Garlic Ranch
                            <input 
                                type='radio'
                                name="pizzaSauce"
                                value='Garlic Ranch'
                                onChange={onChange}
                                checked={values.pizzaSauce === 'Garlic Ranch'}
                            />
                        </label>

                        <label>BBQ Sauce
                            <input 
                                type='radio'
                                name="pizzaSauce"
                                value='BBQ Sauce'
                                onChange={onChange}
                                checked={values.pizzaSauce === 'BBQ Sauce'}
                            />
                        </label>

                        <label>Spinach Alfredo
                            <input 
                                type='radio'
                                name="pizzaSauce"
                                value='Spinach Alfredo'
                                onChange={onChange}
                                checked={values.pizzaSauce === 'Spinach Alfredo'}
                            />
                        </label>
                

                    <div className="form-group toppings">
                        <h4>Toppings</h4>
                        <p>Optional</p>
                        <label>Pepperoni
                            <input 
                                type='checkbox'
                                name="pepperoni"
                                checked={values.pepperoni}
                                onChange={onChange}
                            />
                        </label>
                        <label>Pineapple
                            <input 
                                type='checkbox'
                                name="pineapple"
                                checked={values.pineapple}
                                onChange={onChange}
                            />
                        </label>
                        <label>Onions
                            <input 
                                type='checkbox'
                                name="onions"
                                checked={values.onions}
                                onChange={onChange}
                            />
                        </label>
                        <label>Sausages
                            <input 
                                type='checkbox'
                                name="sausages"
                                checked={values.sausages}
                                onChange={onChange}
                            />
                        </label>
                        <label>Mushrooms
                            <input 
                                type='checkbox'
                                name="mushrooms"
                                checked={values.mushrooms}
                                onChange={onChange}
                            />
                        </label>
                    </div>

                    <label>Special Instructions:
                        <input
                            id="special-text"
                            value={values.specialOrder}
                            onChange={onChange}
                            name="specialOrder"
                            type='text'
                        />
                    </label>
                </div>
                <div className="form-group submit">
                    <button disabled={disabled} id="order-button">Add to Order</button>
                </div>    
        </form>  
    )
}