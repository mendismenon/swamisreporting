import { useState } from "react";
import "./FloatingInput.css";

const FloatingInput = (props) => {
  const [isActive, setIsActive] = useState(false);
  const handleTextChange = (text,pname) => {
    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    props.handleChange(text,pname);
  };

  const getLabelCls = () => {
    let lclsName = "";
    if(isActive){
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
        props?.invalidObj?.invalid && (
          <div className="errorMsgCls">
          {
            props?.invalidObj?.msg
          }
          </div>
        )
      }
    </div>
    </>
  );
};
export default FloatingInput;
