import { useState } from "react"


const MyuseStateExample = () => {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(50);

    const updateName = () => {
        setName("Donatello");
        console.log(name);
    }
    const incrementAge = () => {
        setAge(60);
        console.log(age);

    }

  return (
    <>
    <div>
        <p>
            Name: {name}
        </p>
    </div>
    <button className="btn btn-secondary" onClick={updateName}>Set Name</button>
    <div>
        <p>
            age: {age}
        </p>
    </div>
    <button className="btn btn-secondary" onClick={incrementAge}>Increment Age</button>
    </>
    
  )
}

export default MyuseStateExample