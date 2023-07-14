import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Component } from 'react';
import Logo from '../components/Logo';
import {GithubSvg, LinkedInSvg} from './Icons';
import {motion} from 'framer-motion';
import Circle from '@/components/Circle';


class Navbar extends Component {

  render () {
    return (
      <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        
      <nav>
        <Link href="/" className='mr-4'>Home</Link>
        <Link href="/about" className='mr-4'>About</Link>
        <Link href="/contact" className='mr-4'>Contact</Link>
        <Link href="/experiences" className='mr-4'>Experiences</Link>
      </nav>
        
        <Circle />
        <Logo />

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="https://github.com/KyleWong613" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-3">
          <GithubSvg className='' />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/wong-kai-jeng/" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 ml-3">
          <LinkedInSvg className='' />
        </motion.a>
      </nav>
      </header>
        
    );
  }
}
export default Navbar