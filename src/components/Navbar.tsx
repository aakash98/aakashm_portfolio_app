import Link from 'next/link';
import React, { Component } from 'react';
import Logo from '../components/Logo';
import {GithubSvg, LinkedInSvg} from './Icons';
import {motion} from 'framer-motion';


class Navbar extends Component {
  render () {
    return (
      <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        
        <nav>
        <Link href="/" className='mr-4'>Home</Link>
        <Link href="/About" className='mr-4'>About</Link>
        <Link href="/Contact" className='mr-4'>Contacts</Link>
        <Link href="/Experiences" className='mr-4'>Experiences</Link>
        </nav>

       <Logo />

       <nav className="flex items-center justify-center flex-wrap">
          <motion.a href="https://github.com/KyleWong613" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className="w-6 mx-3">
            <GithubSvg className={null} />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/wong-kai-jeng/" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className="w-6 ml-3">
            <LinkedInSvg className={null} />
          </motion.a>
       </nav>


      </header>
        
    );
  }
}
export default Navbar