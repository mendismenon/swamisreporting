import React, { useEffect, useState } from "react";
import "./TextArea.scss";

export default function TextArea(props) {
  const [isActive, setIsActive] = useState(false);

  useEffect(()=>{
    if (props.value !== "" && props.value !== undefined) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  },[props.name]);

  const handleTextChange = (text, pname) => {
    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    props.handleChange(text,pname,props.isRequired);
  };
  const getLabelCls = () => {
    let lclsName = "";
    if(isActive /*&& props.value !== ""*/){
      lclsName = "Active ";
    }
    if(props.required){
      lclsName = lclsName + "requiredCls "
    }
    return lclsName;
  };
  return (
    <div>
      <div className="LableFloat float-label d-flex mx-auto">
        <textarea
          className="descr-box-cls"
          name={props.name}
          value={props.value}
          onChange={(e) => handleTextChange(e.target.value, props.name)}
        ></textarea>
        {"label" in props && (
          <label htmlFor={props.htmlFor} className={ getLabelCls()}>
            {props.label}
          </label>
        )}
      </div>
    </div>
  );
}
