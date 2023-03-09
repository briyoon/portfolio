import Navbar from "./components/Navbar"

export default function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="w-full h-screen bg-white"></div>
        <div id="projects" className="w-full h-screen bg-red-500"></div>
        <div id="about" className="w-full h-screen bg-blue-500"></div>
      </div>
    </>

  )
}