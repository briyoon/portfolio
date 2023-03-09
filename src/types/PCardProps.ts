type PCardProps = {
    name: string
    img?: string
    description: {
        tag: string,
        details: string
    }
    links: {
        github: string,
        live: string
    }
}

export default PCardProps