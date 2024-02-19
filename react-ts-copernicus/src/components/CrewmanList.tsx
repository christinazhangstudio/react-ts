type CrewmanListProps = {
    names: {
        alias: string
        real: string
    }[]
}

export const CrewmanList = (props: CrewmanListProps) => {
    return (
        <div>
            <h2>Confirmed crewman:</h2>
            {props.names.map(name => {
                return (
                    <div>
                        <h3 key={name.alias}>{name.alias}</h3>
                        <p key={name.real}>{name.real}</p>
                    </div>
                )
            })}
        </div>
    )
}