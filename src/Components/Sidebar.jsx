import textLogo from '../assets/insta-text.png'

export const Sidebar = () => {
  return (
    <>
      <div className='sd-top'>
        <img src={textLogo} alt="Instagram-text-logo" />
        <div><i className="ri-home-4-fill"></i>Home</div>
        <div><i className="ri-search-line"></i>Search</div>
        <div><i className="ri-compass-3-line"></i>Explore</div>
        <div><i className="ri-movie-ai-line"></i>Reels</div>
        <div><i className="ri-chat-ai-3-line"></i>Messages</div>
        <div><i className="ri-heart-line"></i>Notifications</div>
        <div><i className="ri-add-box-line"></i>Create</div>
        <div><i className="ri-account-circle-fill"></i>Profile</div>
      </div>
      <div className='sd-btm'>
        <div><i className="ri-threads-line"></i>Threads</div>
        <div><i className="ri-menu-line"></i>More</div>
      </div>
    </>
  )
}

export default Sidebar;
