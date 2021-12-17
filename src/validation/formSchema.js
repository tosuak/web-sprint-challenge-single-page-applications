import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string().trim().required('Name is required!').min(2, 'name must be at least 2 characters'),
    pizzaSize: yup.string().oneOf(['Small','Medium','Large'], 'Please select a pizza size!'),
    pizzaSauce: yup.string().oneOf(['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo'], 'Please select a Sauce'),
    pepperoni: yup.boolean(),
    pineapple: yup.boolean(),
    onions: yup.boolean(),
    sausages: yup.boolean(),
    mushrooms: yup.boolean(),
    specialOrder: yup.string().trim()
})

export default formSchema;