import buttons from '../json/drum-pad.json';
import React from 'react'
import '../assets/css/drum-pads.css'
import $ from 'jquery'
import {store} from '../redux/reducers'
import dotenv from 'dotenv'

dotenv.config();




export default class DrumPad extends React.Component
{    

    componentDidMount()
    {
        this.checkState();
    }
    handleKeyDown=(e)=>
    {
        let char=e.key.toUpperCase()    
        $('#drum-pad-'+e.keyCode).addClass('drum-pad-pressed');
        this.playPad(char);   
    }
    handleKeyUp=()=>
    {
        $('.drum-pad').removeClass('drum-pad-pressed');
    }
    playPad=(char)=>
    {
        if(document.getElementById(char))
        {
            document.getElementById(char).currentTime=0;
            document.getElementById(char).play();
            this.displayDescription(char);
            this.displayDescription(char);
        }
    }
    displayDescription=(char)=>
    {
        let desc=buttons.find(button=>button.key===char);
        document.getElementById('display').innerHTML=desc.description
    }
    turnOffPad=()=>
    {
        document.removeEventListener('keydown',this.handleKeyDown);
        document.removeEventListener('keyup',this.handleKeyUp);
        $('#drum-pad-container').addClass('off');
        $('.drum-pad').addClass('drum-pad-pressed');
        $('.drum-pad').off('mousedown');
    }
    turnOnPad=()=>
    {
        document.addEventListener('keydown',this.handleKeyDown)
        document.addEventListener('keyup',this.handleKeyUp);
        $('#drum-pad-container').removeClass('off');
        $('.drum-pad').on('mousedown',(e)=>{
            this.playPad(e.target.getAttribute('data'))
        })
        $('.drum-pad').removeClass('drum-pad-pressed');
    }
    checkState=()=>
    {
        store.getState().power===false ?
        this.turnOffPad() :
        this.turnOnPad()
    }
    render()
    {
        store.subscribe(()=>{
            this.checkState();
        });
        return(
            <div id="drum-pad-container">
                    {
                        buttons.map((button,key)=>{
                            return  (
                                        <div 
                                        key={key} 
                                        id={"drum-pad-"+button.ascii} 
                                        data={button.key}
                                        className="drum-pad">
                                            {button.key}
                                            <audio 
                                            id={button.key} 
                                            className="clip" 
                                            src={process.env.PUBLIC_URL+"audio/"+button.audio}>
                                            </audio>
                                        </div>
                                    )
                        })
                    }
            </div>
        )
    }

}

