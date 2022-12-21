import logo from "./logo.svg";
import "./App.css";
import RouteComp from "./routes/routes";
import Toast from "./inputControls/toast/Toast";
import { useEffect } from "react";
import { Current_Version } from "./utill/Env";
import { useDispatch } from "react-redux";
import { resetState } from "./redux/actions/StateAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    
    let lcurrentVersion = localStorage.getItem("reporting_version");
    if (lcurrentVersion) {
      if (lcurrentVersion !== Current_Version) {
        localStorage.setItem("reporting_version", Current_Version);
        dispatch(resetState({}));
      }
    } else {
      localStorage.setItem("reporting_version", Current_Version);
    }
  }, []);
  return (
    <>
      <Toast />
      <RouteComp />
    </>
  );
}

export default App;
