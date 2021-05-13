import React from 'react';
import Controls from './controls/controls';
import DrumPad from './drum-pad';


export default class DrumMachine extends React.Component
{    
    render()
    {
        return(
            <div id="drum-machine">
                <DrumPad/>
                <Controls/>
            </div>
        )
    }
}