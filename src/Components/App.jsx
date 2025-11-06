import '../Styles/index.css'
import Feed from './Feed'
import Sidebar from './Sidebar'
import Suggestions from './Suggestions'

function App() {
  return (
    <div className='main'>
        <div className="side-bar"><Sidebar/></div>
        <div className="feed"><Feed/></div>
        <div className="suggestion"><Suggestions/></div>
    </div>
  )
}

export default App