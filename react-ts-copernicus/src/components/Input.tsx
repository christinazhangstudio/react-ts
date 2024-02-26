type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// export const Input = (props: InputProps) => {
//     // the typing can also be handled when
//     // defining the handler within the component
//     // the function signt is the same
//     // so you can either pass in the prop OR
//     // define within the component.
//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         console.log(event)
//     }

//     // onChange can be onChange={props.handleChange} if were to pass in props
//     // or as handleInputChange for the local def
//     return <input type='text' value={props.value} onChange={handleInputChange}/>
// }

// example of destructuring props
// this may be a preferred impl
export const Input = ({ value, handleChange }: InputProps) => {
    // onChange can be onChange={props.handleChange} if were to pass in props
    // or as handleInputChange for the local def
    return <input type='text' value={value} onChange={handleChange}/>
}

