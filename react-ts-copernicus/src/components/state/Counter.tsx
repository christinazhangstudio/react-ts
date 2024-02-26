import { useReducer } from 'react'

type CounterState = {
    count: number
}

// discriminated unions
type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset'
}

// type CounterAction = {
//     //type: string
//     type: 'increment' | 'decrement' | 'reset' // template literals
//     payload?: number
// }

// instead of the above, which will give us some
// trouble when using action.payload, which is
// not mandatory for reset action, we can
// define two Action types. this is called discriminated unions.
type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 }

// reducer updates state
function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default:
            return state        
    }
}


export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div>
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                give 10 banana
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
                take away 10 banana
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>
                no more banana
            </button>
            </div>
        Count: {state.count}
        </>
    )
}