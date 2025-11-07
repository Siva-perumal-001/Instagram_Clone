import { useState, useEffect } from 'react'
import axios from 'axios'

const Profile = () => {

    const [profile ,setProfile] = useState(null)
    const [followers,setFollowers] = useState([])
    const [unfollow,setUnfollow] = useState(false)
    const [input,setInput] = useState('')

    useEffect(()=>{
        axios('http://localhost:3000/profile')
            .then(data=>setProfile(data.data))
                .catch(err=>console.error(err))

        axios('http://localhost:3000/followers')
            .then(data=>setFollowers(data.data))
                .catch(err=>console.error(err))
    },[unfollow])

    function HandleOnChange(e){
        setProfile(prev =>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const HandleUpdate = async ()=>{
        axios.put('http://localhost:3000/profile',profile)
            .then(console.log("updated"))
            .catch(err=> console.error(err))
    }

    const HandleDelete = async (id) =>{
        axios.delete(`http://localhost:3000/followers/${id}`)
            .then(setUnfollow(!unfollow))
                .catch(err=>console.log(err))
    }

    function HandleInput(e){
        setInput(e.target.value)
    }

    const displayedFollowers =
    input.trim() === ''
      ? followers
      : followers.filter(f =>
          (f.username || '').toLowerCase().includes(input.toLowerCase())
        )

  return (
    <div className='pro-pic-div'>
        {profile ? ( 
        <div className='pro-pg-det'>
            <img className='pro-pic-pg' src={profile.profile_pic} alt="profile_picture" />
            <p>{profile.username}</p>
            <div className='update'>
                <input  type="text"
                        value={profile.username}
                        name='username'
                        onChange={HandleOnChange}
                 />
                 <input  type="text"
                        value={profile.profile_pic}
                        name='profile_pic'
                        onChange={HandleOnChange}
                 />
                 <button onClick={HandleUpdate} >update</button>
            </div>
            <div className='followers'>
               {followers ? (
                    followers.map((follower)=>{
                        <div>
                            {follower.username}
                        </div>
                    })
               ) : (
                <div>loading..</div>
               ) }
            </div>
        </div>
        ) : (
            <div>Loading Page..</div>
        )}
        <div className='followers'>
            <div className='search'>
                <input type="text" 
                        placeholder='Search'
                        value={input}
                        onChange={HandleInput}
                />
                <p onClick={()=>setInput('')}>cancel</p>
            </div>
            <h4>All followers</h4>
            {followers.length === 0 ? (
                <div className='nomatch'>Loading followers...</div>    
                ) : displayedFollowers.length > 0 ? (
                displayedFollowers.map((follower)=>(
                    <div key={follower.id}>
                        <div className='flw-det'>
                            <div className='flw-det-lft'>
                                <img className='follower-pic' src={follower.profile_pic} alt="profile" />
                                <h3>{follower.username}</h3>
                            </div>
                            <button className='unflw'
                                    onClick={()=>HandleDelete(follower.id)}
                            >
                                Unfollow
                            </button>
                        </div>
                    </div>
                ))
            ):( 
                <div className='nomatch'>No matching followers found. </div>
            )}
        </div>

    </div>
  )
}

export default Profile