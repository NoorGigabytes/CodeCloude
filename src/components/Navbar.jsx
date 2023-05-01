import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { RiMenu4Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { AiOutlineDown } from "react-icons/ai";
import MenuItems from "./MenuItems";
import navItems from './navItems';
import Logo from "./Logo";
import { useNavigate } from 'react-router-dom';

function Button({text, bg, padding}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact-us');
  };
  return (
    <div>
      <button
        className={`
          ${padding || 'px-6 py-2'} text-sm font-semibold uppercase 
          rounded-sm text-white transition ${bg}`}
          onClick={handleClick}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}


function Navbar() {
  const [scroll, setScroll] = useState(false)
  const [menuShow, setMenuShow] = useState(false)
  const [dropdownIndex, setDropdownIndex] = useState(null)

  const changeBG = () => {
    window.scrollY >= 80 ? setScroll(true) : setScroll(false)
  }

  const showMenu = () => {
    setMenuShow(prev => !prev)
  }

  window.addEventListener('scroll', changeBG)

  return (
    <>
    <div className={`fixed left-0 right-0 top-0 z-50 h-15 pt-4 md:pb-4 pb-5 transition-all duration-300 bg-white ${scroll ? 'drop-shadow-md' : 'pt-7'}`}>
      <nav className="relative flex items-center container mx-auto h-full justify-between">
        <a href="/" >
          <Logo/>
        </a>
        <div>
          <div onClick={showMenu} className="cursor-pointer lg:hidden">
            {menuShow ? <IoMdClose className={`text-3xl text-black`}/> : <RiMenu4Line className={`text-3xl text-black`}/>}
          </div>
          <ul className={`hidden lg:flex items-center lg:space-x-5 xl:space-x-10 xl:text-lg lg:bg-transparent bg-sky-400 lg:text-md font-semibold transition-all duration-400 text-black`}>
          {navItems.map(([title, url, dropdownItems], index) => (
              <li key={index} className={`relative`} onMouseEnter={() => setDropdownIndex(index)} onMouseLeave={() => setDropdownIndex(null)}>
                <Link to={url} className="flex items-center transition-all ease-in-out duration-200 hover:text-sky-400"><p>{title}</p>{ url== "#" && (<span className="pl-1 pt-1"><AiOutlineDown/></span>)}</Link>
                {dropdownItems && (
                  <ul className={`${dropdownIndex === index ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-6 invisible'} absolute transition-all duration-300 delay-200 ease-out top-full -left-5 z-10 bg-white shadow-md py-5 px-3 rounded font-normal w-max text-black shadow-md`}>
                    {dropdownItems.map(([dropItem, dropUrl]) => (
                      <li key={dropItem}>
                        <Link to={dropUrl} className="px-4 py-2 transition-all ease-in-out duration-200 hover:text-sky-400">
                          {dropItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
            )}
              </li>
            ))}
            <li>
              <Button text="Contact Us" bg={`bg-sky-400 hover:sky-200`}/>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="absolute top-16 mt-3">
      {menuShow && <MenuItems navItems={navItems}/>}
    </div>
    </>
  );
}

export default Navbar;
