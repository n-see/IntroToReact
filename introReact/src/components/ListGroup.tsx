import { useState } from "react";

interface ListProps {
  items: string []
  heading: string
  onSelectedItem:(item:string) => void
}


const ListGroup = ({items, heading, onSelectedItem}: ListProps) => {


 
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [name, SetName] = useState("David");
 
//   let selectedIndex = 0;

// const arr = useState(0);

// console.log(arr);

  //Event handler which is a function to handle an event
  // const handleClick = (e: MouseEvent) => {
  //   console.log(e.target.innerText);
  // };

  // items = []



  const getMessage = () => {
    // return items.length == 0 ? <p>No Items found</p> : null;
  };
  // if(items.length == 0)
  //   {
  //     return (
  //     <>
  //     <h1>List</h1>
  //     <p>No Items found</p>
  //     </>
  //     )
  //   }

  return (
    //JSX we must have one parent element. Example div, fragment or <></>
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {setSelectedIndex(index)
              onSelectedItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <p>{name}</p>
      <button className="btn btn-primary" onClick={() => SetName("Neo")}>Update to new name</button>
    </>
  );
};

export default ListGroup;
