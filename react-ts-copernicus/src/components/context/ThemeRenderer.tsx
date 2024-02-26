import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

type ThemeRendererProps = {
    children: React.ReactNode // the type of a generic React component
}

export const ThemeRenderer = (props: ThemeRendererProps) => {
    const theme = useContext(ThemeContext)
    // both primary and secondary available
    return <div style={{ backgroundColor: theme.secondary.main, color: theme.secondary.text }}>{props.children}</div>
}