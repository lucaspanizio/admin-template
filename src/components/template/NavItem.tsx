import React from 'react';
import Link from 'next/link';

interface INavItem {
  url?: string,
  text: string,
  icon: any,
  clasName?: string,
  handleClick?: (e: any) => void
}

const NavItem:React.FC<INavItem> = (props) => {
  function renderLink () {
    return (
      <div className={`
        flex flex-col 
        justify-center items-center
        h-20 w-20
        dark:text-gray-200
        ${props.clasName}
      `}>
        {props.icon}
        <span className={`text-xs font-light`}>{props.text}</span>
      </div>
    )
  }

  return (
      <>
        <li onClick={props.handleClick} 
            className={`
            hover:bg-gray-100
            dark:hover:bg-gray-800
            cursor-pointer
        `}>
            {
              props.url ? (
                <Link href={props.url}>
                  { renderLink() }
                </ Link>
              ) : (
                renderLink()
              )
            }
        </li>
      </>
  );
}
 
export { NavItem };
