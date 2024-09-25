/**
 * new command "ACTION SCENE_ID TB_IDs"
 * @param {string} action 명령을 보낼 문자열
 * @param {string} scene 명령을 보낼 문자열
 * @param {string[]} robotIDs 명령을 보낼 문자열
 */
function newCommander(action: string, scene: string, robotIDs: string[]): string
{
    let robotIDs_str = robotIDs
                .reduce(
                    (id_str: string, value: string) => 
                        id_str = id_str + value + " ",
                    "");
    
    let cmd: string = action.toUpperCase() + " "  + scene + " " + robotIDs_str;

    console.log("[New Command]", cmd);

    return cmd;
}

export default newCommander;