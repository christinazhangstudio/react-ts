type CrewmanProps = {
    name: {
        real: string
        alias: string
    }
}

export const Crewman = (props: CrewmanProps) => {
    return (
        <div>
            <h2>Confirmed crewman:</h2>
            <h3>{props.name.alias}</h3>
            <p>{props.name.real}</p>
        </div>
    )
}