import { useEffect, useState } from 'react'
import '../Styles/index.css'
import Button from './Button'

const Suggestions = () => {

    const [profile,setProfile] = useState([])
    const [allSuggestions,setAllSuggestions] = useState([])

    useEffect(()=>
    {
        fetch("http://localhost:3000/profile")
        .then((data)=>data.json())
            .then(data=>setProfile(data))
                .catch((error) => console.error('Fetch error:', error))

        fetch("http://localhost:3000/suggestions")
        .then((Sdata)=>Sdata.json())
            .then(Sdata=>setAllSuggestions(Sdata))
                .catch((error) => console.error('Fetch error:', error))
    },[])

  return (
    <div className='whole-sug'>
        <div className='sg-profile'>
            {profile ? (
            <>
            <div className='sg-profile-det'>
                <div id='sg-pro'>
                    <img className='sg-pro-pic' src={profile.profile_pic} alt="profile-pic" />
                    <h3>{profile.username}</h3>
                </div>
                <p className='switch'>Switch</p>
            </div>
            <div className='sg-heading'>
                <p className='sg-p1'>Suggested for you</p>
                <p className='sg-p2'>See All</p>
            </div>
            </>
            ) : (
                <div>loading...</div>
            )}
        </div>

        <div>
            {allSuggestions.length > 0 ? (
            <div>
                {allSuggestions.map((suggest)=>(
                    <div key={suggest.id} className='sg-suggest-det'>
                        <div id='suggest-pro'>
                            <img className='sg-suggest-pic' src={suggest.profile_pic} alt="profile-pic" />
                            <h3>{suggest.username}</h3>
                        </div>
                        <Button/>
                    </div>
                ))}
            </div>
            ) : (
                <div>Loading..</div>
            )}
        </div> 
    </div>
  )
}

export default Suggestions