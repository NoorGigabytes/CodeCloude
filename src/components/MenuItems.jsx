import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function MenuItems(props) {
    const [openItem, setOpenItem] = useState([])
    
    function toggleItem(index) {
        const newOpenItems = [...openItem];
        newOpenItems[index] = !newOpenItems[index];
        setOpenItem(newOpenItems);
      }

    return (
    <div className="sm:w-2/3 md:w-1/2 w-full h-full fixed z-50 right-0 md:top-20 top-18 lg:hidden">
        <ul className={`leading-10 h-screen bg-sky-400 opacity-95 font-semibold text-xl transition-all duration-400 text-white px-4 py-10 overflow-auto`}>
        {props.navItems.map(([title, url, dropdownItems], index) => (
            <li key={index}>
                <div className="flex justify-between">
                    <Link to={url} className="px-4 transition-all ease-in-out duration-200">{title}</Link>
                    <button onClick={() => toggleItem(index)} className='font-bold text-2xl transition-all ease-in-out delay-200 duration-300'>{!dropdownItems == [] ? (openItem[index] ? '-' : '+') : ''}</button>
                </div>
                {/* {openItem[index] && !dropdownItems == [] && dropdownItems.map(([dropItem, dropUrl]) => (
                    <div key={dropItem} className="pl-5">
                        <Link to={dropUrl} className="px-4 transition-all ease-in-out duration-200">{dropItem}</Link>
                    </div>
                ))} */}
                {!dropdownItems == [] && (
                <ul className={`${openItem[index] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'} transition-all duration-300 delay-200 ease-out`}>
                    {openItem[index] && dropdownItems.map(([dropItem, dropUrl]) => (
                    <li key={dropItem} className="pl-5">
                        <Link to={dropUrl} className="px-4">{dropItem}</Link>
                    </li>
                ))}
                </ul>
                )}
            </li>
        ))}
        </ul>
    </div>
    )
}
