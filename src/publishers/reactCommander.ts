// import { EventEmitter } from 'eventemitter';
import ROSLIB from 'roslib';

const ros = new ROSLIB.Ros({
  url: 'ws://' + process.env.REACT_APP_ROSCORE_IP + ':9090'
});

ros.on('connection', () => {
  console.log('Connected to websocket server.');
});

ros.on('error', (error) => {
  console.log('Error connecting to websocket server: ', error);
});

ros.on('close', () => {
  console.log('Connection to websocket server closed.');
});


/**
 * publisher for 'react/commander'
 * @param {String} msg 명령을 보낼 문자열
 */
const reactCommander = function(msg: String) {
  const customTopic = new ROSLIB.Topic({
    ros : ros,
    name : '/react/commander',
    messageType  : 'std_msgs/String'
  });

  const strMsg = new ROSLIB.Message({data: msg})

  customTopic.publish(strMsg)

  console.log("[React Commander] I published msg " , msg)

}

export default reactCommander;
