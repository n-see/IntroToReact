
import styles from './Alert.module.css'


interface AlertProps {
    children: string
    closeAlertFunction: () => void
}

const Alert = ({children, closeAlertFunction}:AlertProps) => {

  
  return (
    <>
        <div className={[styles.alert].join(' ')} role="alert">
            {children}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={closeAlertFunction} >X</button>
        </div>
    </>
  )
}

export default Alert