import { useState } from "react";
import Alert from "./components/Alert/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import MyuseStateExample from "./components/MyuseStateExample";
import { BsCalendarDateFill } from "react-icons/bs";
import Like from "./components/Like/Like";
import Counter from "./components/Counter/Counter";
import Message from "./Message";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";



function App(){

  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let students = [
    "Mr.Garby",
    "Jacqueline",
    "Blake",
    "Denise",
    "Aaron",
    "Principal Oshaughnessy",
    "Timothy",
  ];
    
  let cars = [
    "Mazda",
    "Toyota",
    "Honda",
    "BMW"
  ];
  const handleSelectedItem = (item:string) => {
    console.log(item);
  }
  const handleClick = () => {
    console.log("Clicked from our helper Function")
  }
  const [display, setDisplay] = useState(false)
  const handleClick2 = () => {
    setDisplay(!display)
  }
  
  // const [firstName, setFirstName] = useState("Jose")
  // const [lastName, setLastName] = useState("Martinez")
  // const fullName = firstName + ' ' + lastName;

  //Use a useState and pass it in an object as the initial state

  const [person, setPerson] = useState({
    firstName: 'Jose',
    lastName: 'Martinez'
  })

//learn how to update an object in our useState

const [drink, setDrink] = useState({
    title: "Americano",
    price: 8
})

//Create a function to update the price of our drink object in our useState
const handleDrink =() => {
  const newDrink = {
    title: drink.title,
    price: 10
  }
  setDrink(newDrink);
  console.log(drink.price);
}
  //create a useState with nested objects and update a value
  const [customer, setCustomer] = useState({
    name: "jose",
    address: {
      city: "stockton",
      zipCode: 94402
    }
  });

//create a function to handle a nested object update the zip code: 95212 and console.log it

const handleCustomer = () => {
  setCustomer({...customer, address:{...customer.address,zipCode:95212}})
}

//How to update an array

//create a useState to hold two string in an Array

const [tags, setTags] = useState(['happy ', 'cheer ', 'happy '])

//create a helper function to add to our array with java script //

const handleArray = () => {
  setTags([...tags, 'exciting '])
}
console.log(tags)

//lets create a helper function to delete happy from this array

const handleDelete = () => {
  setTags(tags.filter(tag => tag !== 'happy '));
}

//lets create a helper function to update "happy " to  "happiness "
const handleUpdate = () => {
  setTags(tags.map((tag => tag == "happy " ?  'happiness ' : tag)))
}

//create a useState tis useState wi;; have an array of objects
const [bugs, setBugs] = useState([
  {id: 1, title:'Bug 1', fixed: false},
  {id: 2, title:'Bug 2', fixed: false},
  {id: 3, title:'Bug 3', fixed: false}
])
//need a helper function to help us update this array of objects, we want toi change fixed from false to true using the id
const handleBug = () => {
  setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug))
}

// how to share state with other components -------------------------------------------------

//lets create our useState for our CartItems hard code three items in an array

const [CartItem, setCartItem] = useState(['Product 1 ', 'Product 2 ', 'Product 3 ', 'Product 4'])

//create a helper function to reset our cart items
  const resetCart = () => {
    setCartItem([])
  }
  return(
    <>
    <NavBar cartItemCount={CartItem.length}/>
    <Cart onReset={resetCart} cartItems={CartItem}/>
      {/* <Message />
      <Message />
      <Message /> */}
      <div>
        <Like />
      </div> 
      <BsCalendarDateFill color="red" size={80} />
      <div>
      <Button color="primary" onClickFunction={handleDrink}>Drink Update button</Button><span>{drink.price}</span>
      <Button color="primary" onClickFunction={handleCustomer}>Customer update</Button><span>{customer.address.zipCode}</span>
        {/* (display == true) ? <Alert> YOu Clicked .. <Alert /> : null */}
        {display ? <Alert closeAlertFunction={handleClick2}> You clicked the Show Button! </Alert> : null}
        <Button color="primary" onClickFunction={handleClick}>One Button</Button>
        <Button color="primary" onClickFunction={handleBug}>Update bug Button</Button>
        {bugs.map(bug => <p key={bug.id}>{bug.id}{bug.fixed ? 'fixed' : "New bug"}</p>)}
        <Button color="primary" onClickFunction={handleUpdate}>array happiness Button</Button> <span>{tags}</span>
        <Button color="primary" onClickFunction={handleDelete}>Array delete happy Button</Button><span>{tags}</span>
        <Button color="primary" onClickFunction={handleArray}>Array Add Button</Button><span>{tags}</span>
        <Button color="success" onClickFunction={handleClick}>Two Button</Button>
        <Button color="danger" onClickFunction={handleClick2}>Show</Button>
        <Button color="info" onClickFunction={handleClick2}>Four Button</Button> {person.firstName} { person.lastName}

        <Counter />
        <ListGroup onSelectedItem={handleSelectedItem} items={items} heading="Cities"/>
        <ListGroup onSelectedItem={handleSelectedItem} items={students} heading="Students"/>
        <ListGroup onSelectedItem={handleSelectedItem} items={cars} heading="cars"/>
      </div>
      <div><MyuseStateExample /></div>
      
    </>
  ) 
}
export default App;