import React from "react";

export const BrightnessSlider = ({
    value, callback
} : {
    value: number,
    callback: any
}) => (
    <>
        <div className='brightness-slider'>
            <input type='range' min={0} max={100} value={value} onChange={callback}/>
            <div className="slider-thumb-text">{value}%</div>
        </div>
    </>
)