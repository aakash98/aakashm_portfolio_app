import Link from 'next/link';
import React, { Component } from 'react';
import {motion} from 'framer-motion';

const MotionLink = motion(Link);

class Logo extends Component {
  render () {
    return (
      <header>      
          <div className='flex items-center justify-center mt-2'>
            <MotionLink href="/"
            className='w-16 h-16 bg-dark text-light flex items-center justify-center font-bold rounded-full'
            >KJ</MotionLink>
          </div>
      </header>
        
    );
  }
}

export default Logo