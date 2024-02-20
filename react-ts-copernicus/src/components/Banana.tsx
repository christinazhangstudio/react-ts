type BananaProps = {
    //handleClick: () => void
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void // more specific
}

export const Banana = (props: BananaProps) => {
    return <button onClick={props.handleClick}>Get banana.</button>
}

// 'Monkey, help Space Force. Get banana.'
// 'No smell banana. Where banana?'
// 'Banana there. Special banana.. FROZEN BANANA. Mm, banana!'
// 'Bored. hungry. horny.'
// 'Tell him: I know bored. Sorry hungry. Horny bad.'