import React from "react";

export default function Pizza(props) {
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
            <div>
                <h2>Build Your Own Pizza</h2>
                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.pizzaSize}</div>
                    <div>{errors.pizzaSauce}</div>
                </div>

                <div className="for-group inputs">
                    <h4>Build Your Own Pizza</h4>
                    <label>Name:
                        <input
                            id="name-input" 
                            value={values.name}
                            onChange={onChange}
                            name="name"
                            type='text'
                        />
                    </label>

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

                    <label>Special Instructions:
                        <input
                            value={values.specialOrder}
                            onChange={onChange}
                            name="specialOrder"
                            type='text'
                        />
                    </label>
                </div>
            </div>
            <button disabled={disabled}>Add to Order</button>
        </form>
    )
}