import logo from '../assets/logo-no-background.png' // relative path to image 
import ProfilePicture from './ProfilePicture'
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <div className="h-20 p-4 w-full bg-white flex space-x-4 content-center">
      <div className="grow shrink-0 flex">
        <img className="w-auto h-8 my-auto ml-6" src={logo} alt="" />
      </div>
      <div className="flex items-center">
       <Searchbar />
      </div>
      <div className="flex items-center">
        <ProfilePicture link='https://randomuser.me/api/portraits/med/men/42.jpg' />
      </div>
    </div>
  )
}