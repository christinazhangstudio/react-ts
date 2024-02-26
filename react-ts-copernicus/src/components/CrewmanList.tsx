import { Name } from './Crewman.types'

type CrewmanListProps = {
    //names: {
        // alias: string
        // real: string
    //}[]

    // now that Name has been exported as a type...
    names: Name[]
}

export const CrewmanList = (props: CrewmanListProps) => {
    return (
        <div>
            <h4>Confirmed crewman:</h4>
            {props.names.map(name => {
                return (
                    <div>
                        <h5 key={name.alias}>{name.alias}</h5>
                        <p key={name.real}>{name.real}</p>
                    </div>
                )
            })}
        </div>
    )
}