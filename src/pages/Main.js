import { useEffect, useState } from "react";
import reactCommander from "../publishers/reactCommander.ts";

function Main() {

    const [title, setTitle] = useState("scene test buttons ");

    useEffect(() => {
		reactCommander("are you listeing now?")
    })

	// publish test
	setInterval(()=> {
		reactCommander("Test String Message")
		console.log("I guess the topic is published!")
	}, 10000)

    return (
        <div>
			<h1> {title}</h1>
			<div>
					<button>scene 1</button><span> </span>
					<button>scene 2</button><span> </span>
					<button>scene 3</button><span> </span>
					<button>scene 4</button><span> </span>
					<button>scene 5</button><span> </span>
					<button>scene 6</button><span> </span>
			</div>
			<h1> - </h1>
			<h1> custom command</h1>
			<input></input>
			<span> </span>
			<button>publish</button>
        </div>
    );
}

export default Main;