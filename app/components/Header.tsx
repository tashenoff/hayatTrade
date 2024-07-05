// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import Breadcrumbs from './Breadcrumbs';

const Header = () => {
  return (
    <>
      <header className='bg-primary p-5'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='flex space-x-4'>
            <Link href='/'>
              <span className='text-white cursor-pointer'>Главная</span>
            </Link>
            <Link href='/about'>
              <span className='text-white cursor-pointer'>О нас</span>
            </Link>
            <Link href='/catalog'>
              <span className='text-white cursor-pointer'>Каталог</span>
            </Link>
            <Link href='/contacts'>
              <span className='text-white cursor-pointer'>Контакты</span>
            </Link>
          </div>
          <div>

          </div>
        </div>


      </header>
      <div className='container mx-auto my-5'>
        <div className='w-full flex justify-end'>
          <Breadcrumbs
            homeElement={
              <span className='text-primary cursor-pointer w-full'>Главная</span>}
            separator={<span>/</span>}
            containerClasses='flex space-x-2'
            listClasses='text-white cursor-pointer'
            activeClasses='font-bold'
            capitalizeLinks={true}

          />
        </div>
      </div>
    </>

  );
};

export default Header;
