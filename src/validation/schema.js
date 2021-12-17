import * as yup from 'yup';
const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'Pizza size is required'),
    sauce: yup
    .string()
    .oneOf(['sauce1', 'sauce2']).required('Pizza sauce is required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    jalapeno: yup.boolean(),
    onions: yup.boolean(),
    mushroom: yup.boolean(),
    greenPepper: yup.boolean(),
    extraCheese: yup.boolean(),
    threeCheese: yup.boolean(),

    special: yup
        .string()
        .trim()
});
export default schema;
