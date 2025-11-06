import '../Styles/index.css'
import { useEffect , useState } from 'react'

const Stories = () => {
  const [story,setStory] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/story')
    .then((data)=>data.json())
      .then(data=>setStory(data))
        .catch((error) => console.error(error))
  },[])

  return (
    <div className='whole-story'>
      {story.length > 0 ? (
        story.map((story)=>(
          <div className='story-pro' key={story.id}>
            <div className='gradient'>
              <img src={story.user.profile_pic} alt="profile" />
            </div>
            <p className='truncate'>{story.user.username}</p>
          </div>
      ))
      ) : (
          <div>loading..</div>
      )
    }
    </div>
  )
}

export default Stories