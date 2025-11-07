 import { useState } from "react";
 import '../Styles/index.css'
import axios from "axios";

const Button = ({id,username,profile_pic}) => {

  const [isFollowed, setIsFollowed] = useState(false);

  const Suggestions_JSON = {
    "id":id,
    "username":username,
    "profile_pic":profile_pic
}

  const btn_follow = async ()=>{
    setIsFollowed(!isFollowed)
    axios.post('http://localhost:3000/followers',Suggestions_JSON)
        .catch(err=>console.log(err))
  }


    return (
      <button 
        className={`flw ${isFollowed ? 'followed' : ''}`}
        onClick={btn_follow}
      >
        {isFollowed ? 'Following' : 'Follow'}
      </button>
    );
}

export default Button