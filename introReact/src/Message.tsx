//Functional component
//PascalCasing




//impure function is let count outside of function, pure is let count inside the function
function Message(){
    let count = 0;
    count++;
    console.log(count)
    //JSX: JavaScript XML
    return <h1>Message: {count}</h1>
}
//this export will allow us to use this component where ever we import it!
export default Message;