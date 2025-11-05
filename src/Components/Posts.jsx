import { useEffect, useState } from 'react'
import '../Styles/index.css'

const Posts = () => {

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    try {
      fetch('http://localhost:3000/posts')
        .then((data)=>data.json())
          .then(data => setPosts(data))
            .catch((error) => console.error('Fetch error:', error))
    } catch (error) {
      console.error(error)
    }
  },[])

  return (
    <div className='whole-cnt'>
      {posts.length > 0 ? (
        <div className='seperate-post'>
          {posts.map((post)=> (
            <div key={post.id} className='posts'>
              <div className='profile-det'>
                <img className='pro-pic' src={post.user.profile_pic} alt="profile-pic" />
                <h5>{post.user.username}</h5>
              </div>
              <img className='post-img' src={post.image} alt="post_image" />
              <div className='icons'>
                <i className="ri-heart-3-line"></i>
                <i className="ri-chat-3-line"></i>
                <i className="ri-send-plane-line"></i>
              </div>
              <b>{post.likes} Likes</b>
              <p className='caption'>{post.caption}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>loading..</div>
      )}
    </div>
  )
}

export default Posts