
import { useState } from "react";
import Alert from "./components/Alert/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import MyuseStateExample from "./components/MyuseStateExample";
import { BsCalendarDateFill } from "react-icons/bs";
import Like from "./components/Like/Like";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";



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

  return(
    <>
      <div>

        <Like />
      </div> 
      <BsCalendarDateFill color="red" size={80} />
      <div>
        {/* (display == true) ? <Alert> YOu Clicked .. <Alert /> : null */}
        {display ? <Alert closeAlertFunction={handleClick2}> You clicked the Show Button! </Alert> : null}
        <Button color="primary" onClickFunction={handleClick}>One Button</Button>
        <Button color="success" onClickFunction={handleClick}>Two Button</Button>
        <Button color="danger" onClickFunction={handleClick2}>Show</Button>
        <ListGroup onSelectedItem={handleSelectedItem} items={items} heading="Cities"/>
        <ListGroup onSelectedItem={handleSelectedItem} items={students} heading="Students"/>
        <ListGroup onSelectedItem={handleSelectedItem} items={cars} heading="cars"/>
      </div>
      <div><MyuseStateExample /></div>
      
    </>
  ) 
}
export default App;