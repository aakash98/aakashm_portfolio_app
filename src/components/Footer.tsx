import React from 'react';
import Layout from './Layout';
import Link from 'next/link'
import { useUrl } from 'nextjs-current-url';

const Footer = () => {
    const { href: currentUrl } = useUrl() ?? {};
    const testurl = currentUrl?.split('//')[1].split('/')[0];
    return (
        <footer className='myfooter w-full border-t-2 border-solid border-dark font-medium text-lg'>
            <Layout >
                <div className='py-8 flex items-center justify-between'>
                <span>{new Date().getFullYear()} &copy; {testurl}</span>

                </div>
               
            </Layout> 
        </footer>
       

    )
    
}
export default Footer