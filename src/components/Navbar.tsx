import React from 'react'

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 m-0 w-full">
      <div className="flex flex-row justify-center items-center">
        <a href="#" className="mx-4">Home</a>
        <a href="#projects" className="mx-4">Projects</a>
        <a href="#about" className="mx-4">About</a>
      </div>
    </nav>
  )
}
