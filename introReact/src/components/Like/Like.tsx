import { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";


const Like = () => {

    const [changeImage, setChangeImage] = useState(false)
    const toggleImg = () => {
        setChangeImage(!changeImage)
    }
  return (
    <>
            {changeImage ? <FaRegThumbsUp size={80} onClick={toggleImg}/> : <FaThumbsUp size={80} onClick={toggleImg}/>}
    </>
  )
}

export default Like