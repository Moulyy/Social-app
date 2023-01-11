import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import Navbar from './components/Navbar';
import Container from "./components/ui/Container";
import SideMenu from "./components/SideMenu";
import NavItemEnum from "./enum/nav-item-enum";
import Home from "./views/Home";
import FriendRequestList from "./components/FriendRequestList";
import ContactList from "./components/ContactList";
import Modal from "./components/ui/Modal";

function App() {
  const [selectedMenu, setSelectedMenu] = useState(NavItemEnum.Home);
  function handleNavItemClick() {

  }
  return (
    <div className="font-quicksand">
      <Navbar></Navbar>
      <Container>
        <div className="flex space-x-8">
          {/* Colonne de gauche */}
          <div className="basis-1/6">
            <ProfileCard firstname="Théo" link='https://randomuser.me/api/portraits/med/men/42.jpg' lastname="Moulart" nickname="Moulyy"></ProfileCard>
            <div className="mt-8">
              <SideMenu onNavItemClick={handleNavItemClick} selectedItem={selectedMenu}></SideMenu>
            </div>
          </div>
          {/* Colonne centrale  */}
            <div className="flex-1">
              <Home></Home>
            </div>
          {/* Colonne de droite */}
          <div className="basis-1/6">
            <FriendRequestList></FriendRequestList>
            <ContactList></ContactList>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default App;
