import React, { useState, useEffect } from "react";
import { Route, Link} from 'react-router-dom'
import axios from "axios";
import * as yup from 'yup';
import schema from './validation/formSchema';
import PizzaForm from "./components/PizzaForm";
import Home from "./components/Home";


const initialFormValues = {
  name: '',
  pizzaSize: '',
  pizzaSauce: '',
  pepperoni: false,
  pineapple: false,
  onions: false,
  sausages: false,
  mushrooms: false,
  specialOrder: ''
}
const initialFormErrors = {
  name: '',
  pizzaSize: '',
  pizzaSauce: '',
}
const initialOrders = [];
const initialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

const getOrders = () => {
  axios.get('https://reqres.in/api/orders')
  .then(resp => {
    setOrders(resp.data)
  })
  .catch(err => console.log(err))
}

const postNewOrders = newOrders => {
  axios.post('https://reqres.in/api/orders', newOrders)
  .then(resp => {
    setOrders([resp.data, ...orders ])
  })
  .catch(err => console.log(err))
  .finally(() => setFormValues(initialFormValues))
}

const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
}

const inputChange = (name, value) => {
  validate(name, value);
  setFormValues({...formValues, [name]: value})
}

const formSubmit = () => {
  const newOrder = {
    name: formValues.name.trim(),
    pizzaSize: formValues.pizzaSize.trim(),
    pizzaSauce: formValues.pizzaSauce.trim(),
    specialOrder: formValues.specialOrder.trim(),
    toppings: ['pepperoni', 'pineapple', 'onions', 'sausages', 'mushrooms'].filter(topping => !!formValues[topping])
  }
  postNewOrders(newOrder);
}

useEffect(() => {
  getOrders()
},[])

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
},[formValues])




  return (
    <div className='container'>
     <header>
       <h1>Bloom Eats</h1>
        
      </header>    
        <Route exact path='/' component={Home}>
          <Home />
        </Route>

        <Route path='/pizza' component={PizzaForm} >
          <PizzaForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
          <Link to='/'><button>Home</button></Link>
        </Route>
      
    </div>
  );
};
export default App;
