# Author: Łukasz Baran

## Recruitment Task

### Solution can be found in folder "components":

- I decided to split the problem into multiple components 
- I could make Qty as a components but I didnt want to overcomplicate it. 
- The main component is "SideBar.js"
- Components tree:

AppProvider <-> Reducer
└──App
    ├──Background
    └──SideBar
        ├──TopCounter
        ├──Item (many)
        ... 
        ├──Extra
        │   ├─ExtraItem
            └─ExtraItem
        └──Summary

### The approach to the problem:

- I used useContext, useReducer, useEffect hooks with createContext
- First of all, I created global access to states with UseContex
    - AppProvider.js holds all the data and needed functions 
- Then I decied do manage the state by useReducer
    - Reducer.js holds all dispatch actions  
- Moreover, I fetch the data for upsell products by useEffect
- I decided not to use external css/components library (just to showcase)
  - Also, I didn`t add any extra styling such as hover effect etc.\
    (because it was not in styling specification and I sticked to that)
- Images are in 4:3 format. 
  - Products images fit the 4:3 format. 
  - Upsell products use "max heigh" in 4:3 format

### Requirements:
1. Qty button allows to increase and decrease amount from 1 to 10
2. "X" button remove the item from cart
3. Price each time is calculated at sight, with the right rounding and currency
4. Cart is scrollable and checkout is sticked to the bottom with correct position\
    relative to the last item


### Optional Requirements:
1. User can change quantity by typing, additionaly, I provided validation that\
    You must input A NUMBER between 1 and 10. Empty input "" Is treated as a 0.\
    Nevertheless, Input does have the HTML attribute "required",\ 
    so form shouldn`t allow to left it empty. 
2. I added this button. 
    - Behind cart you might find "Open Cart" button to restore cart.
    - Top Right "X" button and somewhere outside the minecart hides the cart.
3. Data is fetched 
   - I used a new component "ExtraItem" to handle received format
   - Upsell product styles similar to visualisation
   - Not added 
#### Additional features:
- Cart display current amount of items
- During fetching the data, Upsell items shows loading animation
- Input Validation for Qty button

