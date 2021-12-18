import React from 'react';
import { useHistory } from 'react-router-dom'


const Form = (props) => {
    const {
        submit,
        values,
        change,
        disabled,
        errors
      } = props

      const history = useHistory()

    const onSubmit = evt => { evt.preventDefault();
         submit()
        history.push("/post")
      }
    
    const onChange = evt => {
    
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
      }
    return (
        <div>
            
            <form  id='pizza-form' onSubmit={onSubmit}>
            <div id='name-input'>
                    <label>
                        Put your name
                        <input
                            id='name-input'
                            value={values.name}
                            onChange={onChange}
                            name='name'
                            type='text'
                        />
                        
                    </label>
                </div>
                <h2>Build Your Own Pizza</h2>
             <>
                 <div className="size-dropdown">
                <label > Choice Of Size
                <select
                    id='size-dropdown'
                    onChange={onChange}
                    value={values.size}
                    name='size'
                >
                    <option value=''>- Select -</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                
                </select>
                </label>
                </div>
             </>
                <h2>Choice of Sauce</h2> 
                 <label> Original Red 
                <input 
                    type="radio"
                    name="sauce"
                    value="sauce1"
                    onChange={onChange}
                    checked={values.sauce === 'sauce1'}
                />
                </label>

                <label> BBQ
                <input
                    type="radio"
                    name="sauce"
                    value="sauce2"
                    onChange={onChange}
                    checked={values.sauce === 'sauce2'}
                />   
                </label>
           <div className="toppings">
                <p>
                
                    <label>Peppeorni

                <input 
                    id="toppings"
                    type="checkbox"
                    checked={values.pepperoni} 
                    onChange={onChange} 
                    name="pepperoni" 
                />
                </label>
                <label>Pepperoni
                <input 
                    id="toppings" 
                    type="checkbox" 
                    checked={values.sausage} 
                    onChange={onChange} 
                    name="sausage" 
                />
                </label>
                <label>Sausage
                <input 
                    id="toppings" 
                    type="checkbox" 
                    checked={values.canadianBacon} 
                    onChange={onChange} name="canadianBacon" 
                />
                </label>
                <label>
                Canadian Bacon
                 <input 
                    id="toppings" 
                    type="checkbox" 
                    checked={values.jalapeno} 
                    onChange={onChange} name="jalapeno" 
                /></label>
                <label>Jalapeno
                <input 
                    id="toppings" 
                    type="checkbox" 
                    checked={values.onions} 
                    onChange={onChange} name="onions" 
                /></label>
                <label>Onions
                <input 
                    id="toppings" 
                    type="checkbox" 
                    checked={values.mushroom} 
                    onChange={onChange} 
                    name="mushroom" 
                /></label>
                <label>Mushroom
                <input 
                    id="toppings" 
                    type="checkbox" 
                    checked={values.greenPepper} 
                    onChange={onChange}
                     name="greenPepper" 
                /></label>
                <label>Green Peppers
                   <input 
                    id="toppings" 
                    type="checkbox" 
                    checked={values.extraCheese} 
                    onChange={onChange}
                     name="extraCheese" 
                /></label>
                <label>Extra Cheese
                <input 
                    id="toppings" 
                    type="checkbox" 
                    checked={values.threeCheese} 
                    onChange={onChange}
                     name="threeCheese" 
                /></label>
            
                  
            
            </p>
            </div>
            <div className='special-text'>
                    <label>
                        <h2>Special Instructions:</h2>
                        <input
                            id='special-text'
                            value={values.special}
                            onChange={onChange}
                            name='special'
                            type='text'
                        />
                    </label>

            <div className='errors'>
                <div>{errors.customerName}</div>
                <div>{errors.pizzaSize}</div>
            </div>

                </div>
                <button id='order-button' disabled={disabled} >Submit</button>
            </form>
        </div>
   )
    
}

export default Form;