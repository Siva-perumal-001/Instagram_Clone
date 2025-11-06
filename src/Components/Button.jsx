 import { useState } from "react";
 import '../Styles/index.css'

const Button = () => {
    const [isFollowed, setIsFollowed] = useState(false);
    return (
      <button 
        className={`flw ${isFollowed ? 'followed' : ''}`}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? 'Following' : 'Follow'}
      </button>
    );
}

export default Button