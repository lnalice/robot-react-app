import { useEffect, useState } from "react";
import reactCommander from "../publishers/reactCommander.ts";
import newCommander from "../helper/newCommander.ts";
import BasicButton from "../style/button.js";
import BasicInput from "../style/input.js";

function SceneButtons () {
	const [customData, setCustomData] = useState("");

    useEffect(() => {
		reactCommander("are you listeing now?")
		console.log(newCommander("scene", "scene_0", ["tb3_0", "tb3_1"]));
   })

    return(
        <>
            <h1> custom command</h1>
			<BasicInput onChange={(e) => setCustomData(e.target.value)} placeholder='(ex. move scene_0 tb3_0 tb3_1)'></BasicInput>
			<BasicButton onClick={(e) => reactCommander(customData)}>publish</BasicButton>
        </>
    )
}

export default SceneButtons;