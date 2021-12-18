import * as yup from "yup";

const pizzaSchema = yup.object().shape({
  "name-input": yup
    .string()
    .trim()
    .required("You must enter your name!")
    .min(2, "name must be at least 2 characters"),
  "size-dropdown": yup
    .string()
    .oneOf(["small", "medium", "large"], "You must select a size!"),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  onions: yup.boolean(),
  greenPeppers: yup.boolean(),
  "special-text": yup.string().trim(),
});
export default pizzaSchema;