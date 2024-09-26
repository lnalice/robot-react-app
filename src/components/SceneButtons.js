import BasicButton from "../style/button.js";
import BasicContainer from "../style/div.js";
import newCommander from "../helper/newCommander.ts";
import reactCommander from "../publishers/reactCommander.ts";

function SceneButtons () {
	const sceneList= process.env.REACT_APP_SCENE_LIST.split(",")
	const robotList = process.env.REACT_APP_ROBOT_LIST.split(",")

	const pubScene = (sceneID) => {
		reactCommander(newCommander("SCENE", sceneID, robotList))
	}

    return(
        <>
            <h1>scene test buttons</h1>
			<BasicContainer>
				{sceneList.map((item) => (
					<BasicButton key={item} name ={item} 
						onClick={(e) => {pubScene(e.target.name)}}>
						{item}
					</BasicButton>
				))}
			</BasicContainer>
        </>
    )
}

export default SceneButtons;