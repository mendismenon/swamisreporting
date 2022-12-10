import React from "react";
import "./Select.scss";

export default function Select(props) {
  return (
    <div className="parntSelectCls">
      <label className={props.required ? "labelCls requiredCls" : "labelCls"}>
        {props.label}
      </label>
      <select
        value={props.value}
        className="selectCls"
        placeholder="Test"
        onChange={(e) => props.onChange(e.target.value, props.name, props.isRequired)}
      >
        <option selected disabled value="">
          Select
        </option>
        {props.optionsArray.map((x, y) => (
          <option key={y}>{x}</option>
        ))}
      </select>
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
  );
}
