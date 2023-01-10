import { useEffect, useState } from "react"
import NavItemEnum from "../enum/nav-item-enum";
import Card from "./ui/Card";

export default function SideMenu(props) {
  const {onNavItemClick, selectedItem} = props;
  const [navItems, setNavItems] = useState([])

  useEffect(() => {
    const items = [
      {
        name: 'Home',
        isActive: selectedItem === NavItemEnum.Home
      },
      {
        name: 'News',
        isActive: selectedItem === NavItemEnum.News
      },
      {
        name: 'Photos',
        isActive: selectedItem === NavItemEnum.Photos
      },
      {
        name: 'Profile',
        isActive: selectedItem === NavItemEnum.Profile
      },
      {
        name: 'Settings',
        isActive: selectedItem === NavItemEnum.Settings
      }
    ]
    setNavItems(items);
  }, [])

  function handleNavItemClick(itemIndex) {
    // On active d'abord la propriété active dans l'élement sur lequel on vient de cliquer
    const items = [...navItems];
    items.forEach((item, index) => {
      item.isActive = index === itemIndex;
    });
    setNavItems(items);
    // Ensuite on éxécute la fonction passée par le parent pour que celui-ci puisse également mettre à jour l'affichage
    onNavItemClick();
  }
  return <>
    <Card enablePadding={false}>
      <ul className="font-bold text-slate-500">
       {navItems.map((item, index) => <li key={index} className={`cursor-pointer h-12 flex items-center border-b border-l-4 border-b-slate-200 ${item.isActive ? "border-l-primary" : "border-l-white"}`} onClick={() => handleNavItemClick(index)}>
        <span className="ml-4">{item.name}</span>
       </li>)}
      </ul>
    </Card>
  </>
}