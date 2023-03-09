import PCardProps from "../types/PCardProps"
import placeHolder from "../assets/placeholder.png"

let pcards: PCardProps[] = [
    {
        name: "Scrabble Webapp",
        description: {
            tag: "tag",
            details: "details"
        },
        img: placeHolder,
        links: {
            github: "https://github.com/briyoon/scrabble_webapp",
            live: "https://scrabble.briyoon.dev"
        }
    },
    {
        name: "Project 2",
        description: {
            tag: "tag",
            details: "details"
        },
        links: {
            github: "https://github.com/briyoon/scrabble_webapp",
            live: "https://scrabble.briyoon.dev"
        }
    },
    {
        name: "Project 3",
        description: {
            tag: "tag",
            details: "details"
        },
        links: {
            github: "https://github.com/briyoon/scrabble_webapp",
            live: "https://scrabble.briyoon.dev"
        }
    }
]

export default pcards