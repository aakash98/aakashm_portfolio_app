import Link from 'next/link';
import React, { Component } from 'react';

class Logo extends Component {
  render () {
    return (
      <header>      
          <div className='flex items-center justify-center mt-2'>
            <Link href="/"
            className='w-16 h-16 bg-dark text-light flex items-center justify-center'>KJ</Link>
          </div>
      </header>
        
    );
  }
}

export default Logo