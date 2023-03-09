import Navbar from "./components/Navbar"

export default function App() {
  function logScroll() {

  }


  return (
    <>
      <Navbar />
      <div className="snap-y snap-mandatory overflow-scroll w-screen h-screen">
        <div id="home" className=" snap-start snap-always scroll-smooth w-full h-screen bg-white"></div>
        <div id="projects" className=" snap-start snap-always scroll-smooth w-full h-screen bg-red-200"></div>
        <div id="about" className=" snap-start snap-always scroll-smooth w-full h-screen bg-blue-200"></div>
      </div>
    </>

  )
}