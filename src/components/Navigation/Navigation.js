import React from "react";
import "./Navigation.scss";
import { useNavigate } from "react-router-dom";

function Navigation(props) {
  const navigation = useNavigate();
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <div className="NavInnerHeader">
          <div
            style={{ marginLeft: "1rem" }}
            className="my-auto "
          >
            <div
              className="BackBlock"
              onClick={() =>
                props.history.push(props.backPath ? props.backPath : "/")
              }
            >
              {!props.hideBack && (
                <>
                  <img
                    height="28px"
                    src={require("./back.png")}
                    alt="back"
                  />

                  <div
                    className="ml-1"
                    style={{ paddingTop: "5px", color: "#091C3F" }}
                  >
                    
                  </div>
                </>
              )}
            </div>
          </div>
          <div style={{ marginRight:"1rem" }} className="my-auto text-center">
            <img
              height="25px"
              style={{ cursor: "pointer" }}
              src={require("../../assets/img/swamis.jpg")}
              alt="navigation"
              onClick={() => {
                props.setNavSelected(navigation.HOME);
                props.history.push("/");
              }}
              className="navImgCls"
            />
          </div>
          {/*<div
            style={{ width: "30%", marginRight: "25px" }}
            className="my-auto text-right"
          >
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.setNavSelected(navigation.FAQ);
              }}
            >
              FAQ
            </span>
          </div>*/}
          {/* {console.log(props)} */}
        </div>
        <div
          className="LoaderHeader"
          style={{
            width: props.loaded ? props.loaded : "0%",
            height: !props.loaded || props.loaded == "0%" ? "0px" : "3px",
          }}
        ></div>
      </div>
    </>
  );
}

export default Navigation;
