import React from "react";
import "./Select.scss";

export default function Select(props) {
  return (
    <div className="parntSelectCls">
      <label className="labelCls">{props.label}</label>
      <select value={props.value} className="selectCls" placeholder="Test" onChange={(e)=>props.onChange(e.target.value, props.name)}>
        <option selected disabled>
          Select
        </option>
        {props.optionsArray.map((x, y) => (
          <option key={y}>{x}</option>
        ))}
      </select>
    </div>
  );
}
