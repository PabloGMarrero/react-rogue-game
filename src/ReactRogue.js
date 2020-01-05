import React, {useRef, useEffect} from 'react'
import InputManager from './InputManager'

const ReactRogue = ({width, height}) =>{
    const canvasReference = React.useRef();
    let inputKeyManager = new InputManager();
    const handleInput = (action, data) => {
        console.log(`handle input: ${action}:${JSON.stringify(data)}`);
    };

    useEffect( ()=>{
        console.log("binding keys...")
        inputKeyManager.bindInputKey()
        inputKeyManager.subscribe(handleInput);
        return () => {
            inputKeyManager.unbindInputKey();
            inputKeyManager.unsubscribe(handleInput);
        }
    })
    useEffect( ()=> {
        console.log("draw to canvas")
        const context = canvasReference.current.getContext('2d');
        context.clearRect(0, 0, width, height);
        context.fillStyle = "#000";
        context.fillRect(12, 22, 16, 16, )
    });
    return (
        <canvas 
            ref = {canvasReference}
            width= {width} 
            height= {height}
            style={{border:'1px solid black'}}>
        </canvas>
    );
} 

export default ReactRogue;