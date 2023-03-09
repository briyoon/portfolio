import github from "../assets/github.svg"
import PCardProps from "../types/PCardProps"

export default function PCard({name, img, description, links}: PCardProps) {
    return (
        <div className="flex flex-col items-center bg-white w-1/5 h-2/3 rounded-xl p-2 m-4">
            <img className="h-2/5" src={img}></img>
            <h4 className="my-12">{name}</h4>
            <p className="my-2">{description.tag}</p>
            <button className="mt-auto mb-4">Learn More</button>
            {/* <a href={links.live}>Live</a>
            <a href={links.github}>
                <img className="w-1/5" src={github}></img>
            </a> */}
        </div>
    )
}