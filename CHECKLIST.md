# React Pizza Parlor Checklist

[] Project running for all team members
    [x] Everyone's databases are up and running
    [x] Everyone has npm run server and npm run client working
    [] Push this checklist, everyone pull master before branching
    [x] Coffee

[] Build PizzaList GET route in App.jsx
    [] Using axios to hit pizza get route.
    [] Use dispatch in axios.then to update redux store ()
    [] Make this code in a function to be passed down as a prop for other axios routes later.
    [] Display the list on the DOM
        [] Import useState to set a const to the store reducer of pizza stuff.
        [] Map through the const and call 1 pizza item per map.
        [] Call pizza get function in UseEffect to append to dom once.
        [] Link the customer form on the "Next" button click.

[] Build CustomerForm
    [] Grab input values as local state. (name, street address, city, and zip)
    [] Set state for pickup or delivery.
    [] Append total cost of the order in the top right of the page.
    [] axios.post to /api/order. In the data send the customer information state.
    [] in the axios.post, dispatch the information to the customerFormReducer.
    [] **Example JSON Post Data:**

            ```JSON
            {
            "customer_name": "Donatello",
            "street_address": "20 W 34th St",
            "city": "New York",
            "zip": "10001",
            "total": "27.98",
            "type": "Pickup",
            "pizzas": [{
                "id": "1",
                "quantity": "1"
            },{
                "id": "2",
                "quantity": "1"
            }]
            }
            ```
        Hard code pizza "quantity" to 1.

[] Build Checkout
    [] useSelector to store a const of customerFormReducer data.
    [] Append customerFormReducer to the dom. 
    [] Append order total, append cart (passed as prop) 
    [] axios post user information, order total, and array of pizzas (cart).
    [] axios post.then(navigate the user back to the select pizza page (use a router)).
    [] axios post.then(clear reducers as appropriate) Each order should begin with a "clean" order data.

[] Admin - Orders
    [] axios.get route (/app/order) to populate orders. Dispatch orders to store in .then().
    []
    [] Append orders table (Just name, time, type, cost).
