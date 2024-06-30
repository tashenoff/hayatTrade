// app/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Главная</Link></li>
          <li><Link href="/about">О нас</Link></li>
          <li><Link href="/catalog">Каталог</Link></li>
          <li><Link href="/contacts">Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
}
