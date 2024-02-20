type CopernicusProps = {
    name: string
    upcomingLaunchDate: Date
    isCopernicus: boolean
    specialMessage?: string // optional type
} // this defines the type of props that the component will receive

// Copernicus is a global script file
// meaning we should make it a module
export const Copernicus = (props: CopernicusProps) => {
    const houstonText = 'Houston, we have liftoff!'
    return (
        <div>
            <h2>{props.name}</h2>
            <h2>{String(props.upcomingLaunchDate)}</h2>
            <h3>
                {
                    props.isCopernicus ? 'Copernicus to '+houstonText : houstonText
                }
            </h3>
        </div>
    )
}