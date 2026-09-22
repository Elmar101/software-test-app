import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'
import { useState } from 'react'

const Layout = () => {
  const [bgColor, setBgColor] = useState("black")
  return (
   <div style={{ backgroundColor: bgColor }}>
    <button onClick={() => setBgColor("black")}>Black</button>
    <button onClick={() => setBgColor("white")}>White</button>

    <Header />
    <main style={{ minHeight: 'calc(100vh - 100px)' }}>
        <Outlet />
    </main>
    <Footer />
   </div>
  )
}

export default Layout
