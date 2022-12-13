import { useState } from 'react';

import { logo, close, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1 space-x-10'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className='font-poppins font-normal cursor-pointer text-base  text-white'
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={isMenuOpen ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1 space-y-4'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className='font-poppins font-normal cursor-pointer text-base  text-white'
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
