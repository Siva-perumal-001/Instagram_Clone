import textLogo from '../assets/insta-text.png'

export const Sidebar = () => {
  return (
    <>
      <div className='sd-top'>
        <img src={textLogo} alt="Instagram-text-logo" />
        <div><i class="ri-home-4-fill"></i>Home</div>
        <div><i class="ri-search-line"></i>Search</div>
        <div><i class="ri-compass-3-line"></i>Explore</div>
        <div><i class="ri-movie-ai-line"></i>Reels</div>
        <div><i class="ri-chat-ai-3-line"></i>Messages</div>
        <div><i class="ri-heart-line"></i>Notifications</div>
        <div><i class="ri-add-box-line"></i>Create</div>
        <div><i class="ri-account-circle-fill"></i>Profile</div>
      </div>
      <div className='sd-btm'>
        <div><i class="ri-threads-line"></i>Threads</div>
        <div><i class="ri-menu-line"></i>More</div>
      </div>
    </>
  )
}

export default Sidebar;
