import React from "react";
import '../../assets/css/controls.css';
import ButtonOnOff from "./button-on-off";
import Display from './display'
import VolumeController from "./volume-controller";


export default class Controls extends React.Component
{
    render()
    {
        return(
            <div id="controls-container">
                <ButtonOnOff/>
                <Display/>
                <VolumeController/>
            </div>
        )
    }
}