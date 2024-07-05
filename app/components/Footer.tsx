// app/components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-primary p-5'>
      <div className='container mx-auto'>
        <nav className='flex-col'>
          <ul className='flex justify-between text-white py-2'>
            <li><Link href="/">Главная</Link></li>
            <li><Link href="/about">О нас</Link></li>
            <li><Link href="/catalog">Каталог</Link></li>
            <li><Link href="/contacts">Контакты</Link></li>
          </ul>

          <div className='text-white mt-5 py-5 border-t border-white border-opacity-20'>
          <p>Кратко о нас: Ваше описание компании здесь...</p>
        </div>
        </nav>
     
     
      </div>
    </footer>
  );
}

export default Footer;
