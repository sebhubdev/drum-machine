import React from 'react'
import {store} from '../../redux/reducers'
import $ from 'jquery'

class VolumeController extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            volume:store.getState().volume
        }
    }
    componentDidMount()
    {
        this.changeVolume();
        this.chekState();
    }    
    handleVolume=(e)=>
    {
        const action=
        {
            type:'CHANGE',
            volume:e.target.value
        }
        store.dispatch(action)
    }
    changeVolume =()=>
    {
        const clips=document.querySelectorAll('.clip');
        clips.forEach(clip=>{
            clip.volume=store.getState().volume/100
        })
    }
    chekState=()=>
    {
        store.getState().power===false ?
        this.volumeOff() :
        this.volumeOn()
    }
    volumeOff=()=>
    {
        $('#volume-range').addClass('off');
        this.setState({
            volume:0
        })
    }
    volumeOn=()=>
    {
        $('#volume-range').removeClass('off');
        this.setState({
            volume:store.getState().volume
        });
        this.changeVolume();
    }
    render()
    {
        store.subscribe(()=>{
            this.setState({
                volume:store.getState().volume
            })
            this.chekState();
        });
        return(
            <div id="volume-range">
                <div className="status">
                    <span>Volume</span>
                    <span>{this.state.volume}</span>
                </div>
                <input 
                className="range"
                onChange={this.handleVolume} 
                onClick={this.handleVolume} 
                type="range" 
                value={this.state.volume}/>                
            </div>
        )
    }
}
export default VolumeController;