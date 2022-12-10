import { useEffect, useState } from "react";
import "./FloatingInput.css";

const FloatingInput = (props) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(()=>{
    if (props.value !== "" && props.value !== undefined) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  },[props.name]);

  const handleTextChange = (text,pname) => {
    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    props.handleChange(text,pname,props.isRequired);
  };

  const getLabelCls = () => {
    debugger
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
    <>
    <div>
    <div className={`float-label ${props.className} `}>
      <input
        type={props.type}
        maxLength={props.maxLength ?? 15}
        onChange={(e) => handleTextChange(e.target.value, props.name)}
        value={props.value}
      />

      <label htmlFor={props.htmlFor} className={ getLabelCls()}>{props.label}</label>
    </div>
      {
        props?.isValid === false && (
          <div className="errorMsgCls">
          {
            props?.errorMsg
          }
          </div>
        )
      }
    </div>
    </>
  );
};
export default FloatingInput;
