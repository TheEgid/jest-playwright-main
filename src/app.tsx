import './styles/globals.css'
import { Greeting } from "./components/greeting"

const App = () => {
    return (
        <>
            <h1>React App</h1>
            <Greeting name="John" />
        </>
    )
}

export default App