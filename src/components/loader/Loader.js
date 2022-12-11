import React from 'react'
import './Loader.scss'

export default function Loader(props) {
    return (
   <div className={`${props.FullScreen && "lader-parent"}`}>
        <div className="loader-container">
            <div className="imgParentDivCls">
                <img className="loaderGlobalCenter" height="90px" src={require("./loader.gif")} alt="loading" />
            </div>
        </div>
   </div>
    )
}
