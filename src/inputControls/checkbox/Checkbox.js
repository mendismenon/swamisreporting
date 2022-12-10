import React from "react";
import "./Checkbox.scss";

export default function Checkbox(props) {

  const checkBxClk = (pcheckedVal, pcurrentObj, pindex) => {
    props.onClick(pcheckedVal, pcurrentObj, pindex);
  };

  return (
    <div className="checkk-cls">
      <div>
        <label class="contain">
          <input
            type="checkbox"
            checked={props.checked && "checked"}
            onClick={(e) =>
              checkBxClk(e.target.checked, props.value, props.index)
            }
            value={props}
          />
          <div class="checkmark-cmn-cls"></div>
        </label>
      </div>
    </div>
  );
}
