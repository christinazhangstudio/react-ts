type ContainerProps = {
    styles: React.CSSProperties // example to show typing a style
}


export const Container = (props: ContainerProps) => {
    return (
        // instead of this...
        // <div style={{ border: '1px solid black', padding: '1rem' }}>
        //     some text here
        // </div>

        // can pass in props
        <div style={ props.styles }>
             social commentary on the banana
        </div>
    )
}