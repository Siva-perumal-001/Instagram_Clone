import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

function ViewStory() {

    const {id, tot} = useParams()
    const [story , setStory] = useState(null)
    const Navigate = useNavigate()

    useEffect(()=>{
    fetch(`http://localhost:3000/story/${id}`)
        .then(data => data.json())
            .then(data => setStory(data))
                .catch(err => console.log(err))
    },[id])

    if(id > tot || id<=0){
        Navigate('/')
    }

    return (
        <div>
            {story ? (
            <div className='viewStory'>
                <Link className="arrow" to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i class="ri-arrow-left-s-line"></i></Link>
                <img src={story.image} alt="Story" />
                <Link className="arrow" to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i class="ri-arrow-right-s-line"></i></Link>
            </div>
            ) : (
            <div>loading</div>
            )}
        </div>
    )
}

export default ViewStory