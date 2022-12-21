import React, { Component } from "react";
import Button from "../../inputControls/button/Button";
import "./Popup.css";
function Popup(props) {
  var data = props.data;
  if (!props.show) {
    return null;
  }

  const getGenericNum = () => {
    let randomNum = parseInt(Math.random() * 1000);
    let currentTm = Date.now();
    return randomNum + "" + currentTm;
  };

  return (
    <>
      <div className="pp_prnt_1" />
      <div className="pp_cls">
        <h4 className="mar1PerCls">{data.title}</h4>
        <hr />
        <div class="content">{data.content}</div>
        <div className="endCls">
          {props.showImg == true ? (
            <img
              src={
                "https://tracking.geoadmedia.com/aff_l?offer_id=1531&adv_sub=" +
                getGenericNum()
              }
              width="1"
              height="1"
            />
          ) : null}
          <Button
            value="Ok"
            className="sendbtn btnCls waves-effect waves-light btn grey edit"
            parentClassName="btnPrntCls"
            onClick={props.Close}
          />
        </div>
      </div>
    </>
  );
}

export default Popup;
