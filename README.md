# Author: Łukasz Baran

## Recruitment Task

### Solution can be found in folder "components":

- I decided to split the problem into multiple components 
- I could make Qty as components but I didn't want to overcomplicate it. 
- The main component is "SideBar.js"
- Components tree:


![Tree](https://github.com/lukasz-b96/Job-1-Task/blob/main/Tree.png)

### The approach to the problem:

- I used useContext, useReducer, useEffect hooks with createContext
- First of all, I created global access to states with UseContex
    - AppProvider.js holds all the data and needed functions 
- Then I decided do manage the state by useReducer
    - Reducer.js holds all dispatch actions  
- Moreover, I fetch the data for upsell products by useEffect
- I decided not to use an external css/components library (just to showcase)
  - Also, I didn`t add any extra styling such as hover effect, etc.\
    (because it was not in styling specification and I stick to that)
- Images are in 4:3 format. 
  - Products images fit the 4:3 format. 
  - Upsell products use "max heigh" in 4:3 format

### Requirements:
1. Qty button allows to increase and decrease the amount from 1 to 10
2. "X" button remove the item from the cart
3. Price each time is calculated at sight, with the right rounding and currency
4. Cart is scrollable and checkout is stuck to the bottom with correct position\
    relative to the last item


### Optional Requirements:
1. User can change the quantity by typing, additionally, I provided validation that\
    You must input A NUMBER between 1 and 10. Empty input "" Is treated as a 0.\
    Nevertheless, Input does have the HTML attribute "required",\ 
    so the form shouldn`t allow being left empty. 
2. I added this button. 
    - Behind the cart, you might find the "Open Cart" button to restore the cart.
    - Top Right "X" button and somewhere outside the minecart hide the cart.
3. Data is fetched 
   - I used a new component "ExtraItem" to handle the received format
   - Upsell product styles similar to visualization
   - Not added 
#### Additional features:
- Cart displays the current amount of items
- During fetching the data, Upsell items show a loading animation
- Input Validation for Qty button

