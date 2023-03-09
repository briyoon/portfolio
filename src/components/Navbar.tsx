import React from 'react'

export default function Navbar() {

  function smoothScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) {
    e.preventDefault();
    let div = document.getElementById(id)
    div && div.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed left-0 top-0 m-0 w-full">
      <div className="flex flex-row justify-center items-center">
        <a href="" title="" onClick={(e) => smoothScroll(e, "home")} className="m-4">Home</a>
        <a href="" title="" onClick={(e) => smoothScroll(e, "projects")} className="m-4">Projects</a>
        <a href="" title="" onClick={(e) => smoothScroll(e, "about")} className="m-4">About</a>
      </div>
    </nav>
  )
}
