import Link from 'next/link';
import React, { Component } from 'react';
import Logo from '../components/Logo';

class Navbar extends Component {
  render () {
    return (
      <header className='w-full px-32 py-8 font-medium'>
        
        <nav>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contacts</Link>
        <Link href="/">Experiences</Link>
        <Link href="/">Home</Link>
        </nav>


       <Logo />
       <nav>
        <Link href="/">GitHub</Link>
        <Link href="/">LinkedIn</Link>
        <Link href="/">Contacts</Link>
        <Link href="/">Experiences</Link>
        <Link href="/">Home</Link>
        </nav>


      </header>
        
    );
  }
}
export default Navbar