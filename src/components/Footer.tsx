import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { useUrl } from 'nextjs-current-url';

const Footer = () => {
    const { href: currentUrl, pathname } = useUrl() ?? {};

    return (
        <footer className='myfooter w-full border-t-2 border-solid border-dark font-medium text-lg'>
            <Layout >
                <div className='py-8 flex items-center justify-between'>
                <span>{new Date().getFullYear()} &copy; {currentUrl}</span>

                </div>
               
            </Layout> 
        </footer>
       

    )
    
}
export default Footer