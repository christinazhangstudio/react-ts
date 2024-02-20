type HeadingProps = {
    children: React.ReactNode // the type of a generic React component
}

export const Heading = (props: HeadingProps) => {
    return <h2>{props.children}</h2> // wrapping h(n) on h(n) actually has an effect...
}
