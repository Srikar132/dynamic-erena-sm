"use client";


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

function BreadCrum() {
    const pathName = usePathname();

    const pathSegments = pathName.split('/').filter(s => s);

    const breadcrumbItems = pathSegments.map((segment , index) => {
        const href = '/' + pathSegments.slice(0 , index + 1).join('/');

        const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/ , ' ');

        return {href , label}
    })

  return (
    <nav aria-label='Breadcrumb' className='section_padding mb-5 !py-0 w-full'>
        <ol className='flex items-center space-x-2'>
            <li>
            <Link href="/dashboard" className="text-gray-500 hover:text-primary_green">
                Home
            </Link>
            </li>
            
            {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                {index === breadcrumbItems.length - 1 ? (
                <span className="font-medium text-gray-900">{item.label}</span>
                ) : (
                <Link href={item.href} className="text-gray-500 hover:text-primary_green">
                    {item.label}
                </Link>
                )}
            </li>
            ))}
        </ol>
    </nav>
  )
}

export default BreadCrum