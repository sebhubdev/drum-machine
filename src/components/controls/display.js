import React from 'react'
import {store} from '../../redux/reducers'
import $ from 'jquery'



class Display extends React.Component
{
    componentDidMount()
    {
        this.checkState()
    }
    checkState=()=>
    {
            store.getState().power===false ?
            this.displayOff() :
            this.displayOn()
    }
    displayOn=()=>
    {
        $('#display').removeClass('off');
        $('#display').html('Nothing yet...');
    }
    displayOff=()=>
    {
        $('#display').addClass('off');
        $('#display').html('Turned Off');
    }
   
    render()
    {
        store.subscribe(()=>{
            this.checkState()
        });
        return(
            <div id="display" className="off">Nothing yet...</div>
        )
    }
}

export default Display