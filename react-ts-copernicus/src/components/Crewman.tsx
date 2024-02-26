import { CrewmanProps } from './Crewman.types'

// instead of defining the type here,
// we can also throw into a separate file...
// see Crewman.types.ts
// type CrewmanProps = {
//     name: {
//         real: string
//         alias: string
//     }
// }

// not used over preference for CrewmanList
export const Crewman = (props: CrewmanProps) => {
    return (
        <div>
            <h5>Confirmed crewman:</h5>
            <p>{props.name.alias}</p>
            <p>{props.name.real}</p>
        </div>
    )
}