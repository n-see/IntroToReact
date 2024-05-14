interface ButtonProps {
    children:string
    onClickFunction:() => void
    color?:string
    
}
const Button = ({children, color, onClickFunction}:ButtonProps) => {

  return (
    <>
    <button className={`btn btn-${color}`} onClick={onClickFunction}>{children}</button>
    
    </>
  )
}

export default Button