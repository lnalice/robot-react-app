/**
 * new command "ACTION SCENE_ID TB_IDs"
 * @param {string} action 요청할 움직임(MOVE MODULE MIN HOME RESET SCENE)
 * @param {string} scene 움직임을 위한 데이터를 쓸 scene 선택
 * @param {string[]} robotIDs 움직임 요청할 로봇 리스트
 */
function newCommander(action: string, scene: string, robotIDs: string[]): string
{
    let robotIDs_str = robotIDs
                .reduce(
                    (id_str: string, value: string) => 
                        id_str = id_str + value + " ",
                    "");
    
    let cmd: string = action.toUpperCase() + " "  + scene + " " + robotIDs_str;

    console.log("[New Command] ", cmd);

    return cmd;
}

export default newCommander;