import github from "../assets/github.svg"
import PCardProps from "../types/PCardProps"

export default function PCard({name, img, description, links}: PCardProps) {
    return (
        <div className="bg-white w-1/5 h-2/3 rounded-xl p-2 m-4">
            <img src={img}></img>
            <h4>{name}</h4>
            <p>{description.tag}</p>
            {/* <a href={links.live}>Live</a>
            <a href={links.github}>
                <img className="w-1/5" src={github}></img>
            </a> */}
        </div>
    )
}