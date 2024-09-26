import BasicButton from "../style/button.js";
import BasicContainer from "../style/div.js";

function SceneButtons () {

    return(
        <>
            <h1>scene test buttons</h1>
			<BasicContainer>
					<BasicButton id="scene_1">scene 1</BasicButton>
					<BasicButton id="scene_2-1">scene 2-1</BasicButton>
					<BasicButton id="scene_2-2">scene 2-2</BasicButton>
					<BasicButton id="scene_3-1">scene 3-1</BasicButton>
					<BasicButton id="scene_3-2">scene 3-2</BasicButton>
					<BasicButton id="scene_4-1">scene 4-1</BasicButton>
					<BasicButton id="scene_4-2">scene 4-2</BasicButton>
					<BasicButton id="scene_4-3">scene 4-3</BasicButton>
			</BasicContainer>
        </>
    )
}

export default SceneButtons;