import React from 'react';
import Link from 'next/link';
import { IoGridOutline, IoCafeOutline, IoIceCreamOutline, IoBasketOutline, IoLeafOutline } from 'react-icons/io5';

const menuItems = [
  { title: 'Бүгд', icon: <IoGridOutline />, href: '/menu', gradientFrom: '#a955ff', gradientTo: '#ea51ff' },
  { title: 'Бялуу', icon: <IoCafeOutline />, href: '/byalu', gradientFrom: '#56CCF2', gradientTo: '#2F80ED' },
  { title: 'Дессерт', icon: <IoIceCreamOutline />, href: '/dessert', gradientFrom: '#FF9966', gradientTo: '#FF5E62' },
  { title: 'Талх', icon: <IoBasketOutline />, href: '/talh', gradientFrom: '#80FF72', gradientTo: '#7EE8FA' },
  { title: 'Салат', icon: <IoLeafOutline />, href: '/salat-sendvich', gradientFrom: '#ffa9c6', gradientTo: '#f434e2' },
];

export default function GradientMenu() {
  return (
    <div className="flex justify-center items-center bg-bg py-10 rounded-2xl mx-4">
      <ul className="flex gap-4 sm:gap-6">
        {menuItems.map(({ title, icon, href, gradientFrom, gradientTo }, idx) => (
          <li
            key={idx}
            style={{ '--gradient-from': gradientFrom, '--gradient-to': gradientTo } as React.CSSProperties}
            className="relative w-[60px] h-[60px] bg-surface shadow-lg rounded-full transition-all duration-500 hover:w-[130px] hover:shadow-none group cursor-pointer"
          >
            <Link href={href} className="flex items-center justify-center w-full h-full">
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>
              <span className="absolute top-[10px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[15px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-50"></span>

              <span className="relative z-10 transition-all duration-500 group-hover:scale-0 delay-0">
                <span className="text-2xl text-muted">{icon}</span>
              </span>

              <span className="absolute text-white uppercase tracking-wide text-xs transition-all duration-500 scale-0 group-hover:scale-100 delay-150 whitespace-nowrap">
                {title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
