import Navbar from "./components/Navbar"
import PCard from "./components/PCard"
import pcards from "./content/pcards"

export default function App() {
  return (
    <>
      <Navbar />
      <div className="snap-y snap-mandatory overflow-y-scroll w-screen h-screen">
        <div id="home" className="snap-start snap-always scroll-smooth w-full h-screen bg-amber-200"></div>
        <div id="projects" className="snap-start snap-always scroll-smooth w-full h-screen bg-pink-200 flex flex-row justify-center items-center">
          {pcards.map((e, i) => {
            return <PCard key={i} name={e.name} img={e.img} description={e.description} links={e.links} />
          })}
        </div>
        <div id="about" className="snap-start snap-always scroll-smooth w-full h-screen bg-cyan-200"></div>
      </div>
    </>

  )
}