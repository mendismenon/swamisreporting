import React from 'react'
import './Radio.scss';

export default function Radio(props) {
    return (
        <>
            <label className="contain_RdBtn_">
            <input
                type="radio"
                value={props.value}
                disabled={props.disabled}
                onClick={()=>props.onClick(props.value, props.name)}
                checked={props.value===props.selected ? "checked" : null }
                name="radio" />
            <span className={props.for=="Payment"? "radio-cmn-cls radio-cmn-cls-Payment":"radio-cmn-cls"}></span>
            {props.label}
            </label>
        </>
    )
}
