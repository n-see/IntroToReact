interface cartProps {
    cartItems: string[];
    onReset: () => void;
}

const Cart = ({cartItems, onReset}:cartProps) => {
  return (
    <>
        <p>
            Cart:
        </p>
        <ul>
            {cartItems.map(item => <li key={item}>{item}</li>)}
        </ul>
        <button onClick={onReset}>Clear All Items</button>
    </>
  )
}

export default Cart