import React, { Component } from 'react';
import '@/styles/styles.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <div className="layout">{children}</div>
)
export default Layout