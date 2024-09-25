import { useEffect, useState } from "react";
import reactCommander from "../publishers/reactCommander.ts";
import newCommander from "../helper/newCommander.ts";
import BasicButton from "../style/button.js";
import BasicInput from "../style/input.js";

function Main() {

	const [customData, setCustomData] = useState("");

    useEffect(() => {
		reactCommander("are you listeing now?")
		console.log(newCommander("scene", "scene_0", ["tb3_0", "tb3_1"]));
   })

    return (
        <div>
			<h1>scene test buttons</h1>
			<div>
					<BasicButton>scene 1</BasicButton>
					<BasicButton>scene 2</BasicButton>
					<BasicButton>scene 3</BasicButton>
					<BasicButton>scene 4</BasicButton>
					<BasicButton>scene 5</BasicButton>
					<BasicButton>scene 6</BasicButton>
			</div>
			<h1> - </h1>
			<h1> custom command</h1>
			<BasicInput onChange={(e) => setCustomData(e.target.value)} placeholder='(ex. move scene_0 tb3_0 tb3_1)'></BasicInput>
			
			<BasicButton onClick={(e) => reactCommander(customData)}>publish</BasicButton>
        </div>
    );
}

export default Main;