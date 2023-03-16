import { useState } from "react";

type GreetingProps = {
    name?: string
}

const Greeting = (props: GreetingProps) => {
    const [message, setMessage] = useState("Hello, " + (props.name || "World"));

    return (
        <>
            <div id="greeting">{message}!</div>
            <br />
            <button onClick={() => setMessage("Have a nice day")} >Click Me</button>
        </>
    )
}

export default Greeting;