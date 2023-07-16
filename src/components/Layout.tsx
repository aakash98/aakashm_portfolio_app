import React, { Component } from 'react';
import '@/styles/styles.css'
import Head from 'next/head';
import Favicon from '../components/Favicon';

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  
  <div className="layouthome">
  <Head>
    <title>Kai Jeng | Portfolio</title>
    <meta name="description" content="index"></meta>
    <Favicon/>
  </Head>
  {children}</div>
)
export default Layout