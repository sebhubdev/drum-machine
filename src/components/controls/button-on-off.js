import React from "react"
import '../../assets/css/controls.css'
import $ from 'jquery'
import {store} from '../../redux/reducers'


class ButtonOnOff extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            power:true
        }
    }
    componentDidMount()
    {
        this.powerSwitch()
    }
    handleButtom=()=>
    {
        const action=
        {
            type:'SWITCH'
        }
        store.dispatch(action);        
    }

    powerSwitch=()=>
    {
        this.state.power===true ?
        $('#button-on-off').addClass('on') :
        $('#button-on-off').removeClass('on')
    }

    render()
    {
        this.powerSwitch()
        store.subscribe(()=>{
            this.setState({
                power:store.getState().power
            })
        });
        return(
            <div id="button-on-off">
                <div className="btn" onClick={this.handleButtom}>
                    <div className="mark"></div>
                </div>
            </div>
        )
    }
}

export default ButtonOnOff