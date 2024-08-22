import React from 'react'
import Link from 'next/link'
export const Header = () => {
  return (
    <section className='container'>
      <header>
        <div className="flex justify-between items-center h-[100px]">
      <span>
        <img src="/img/Logo.svg" alt="logotip"  className="w-[35px] h-[35px]"/>
      </span>
      <ul className='flex gap-[97px]'>
        <li><Link href='/main'>Главная</Link></li>
        <li><Link href='/aboutus'>О нас</Link></li>
        <li><Link href='/service'>Услуги</Link></li>
        <li><Link href='/portfolio'>Портфолио</Link></li>
        <li><Link href='/blog'>Блог</Link></li>
        <li><Link href='/contacts'> Контакты</Link></li>
      </ul>
      <button className="w-[165px] h-[40px] border rounded-lg border-gray-50">
        <span>Работать с нами</span>
      </button>
      </div>
    </header>
    </section>

  )
}
