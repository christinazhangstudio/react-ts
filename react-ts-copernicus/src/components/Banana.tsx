type BananaProps = {
    // property handleClick, which doesn't have to
    // accept a parameter or return a value.
    // e.g. you can use this to impl a function 
    // for where it's called with simply console.log()
    //handleClick: () => void
    
    // whereas you can also be more specific and take in an event
    //handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
   
    // can also add in another param, id
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Banana = (props: BananaProps) => {
    return <button onClick={event => props.handleClick(event, 1)}>help</button>
}

// 'Monkey, help Space Force. Get banana.'
// 'No smell banana. Where banana?'
// 'Banana there. Special banana.. FROZEN BANANA. Mm, banana!'
// 'Bored. hungry. horny.'
// 'Tell him: I know bored. Sorry hungry. Horny bad.'