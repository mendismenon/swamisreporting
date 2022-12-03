import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/footer/Footer";
import Button from "../../inputControls/button/Button";
import FloatingInput from "../../inputControls/floatingInput/FloatingInput";
import Header from "../../inputControls/header/Header";
import Select from "../../inputControls/select/select";
import "./Home.css";
const Home = () => {
  
  const [data, setData] = useState({
    name: "",
    site: ""
  });
  const handleChange =  (pdata, pname) => {
    debugger;
    let ldata= {...data};
    ldata[pname] = pdata;
    setData({...ldata});
  };

  const onBtnClick = () => {
    axios.post('https://sheet.best/api/sheets/d1cc308d-2e10-4a7a-96ee-0dff6d4de677', data)
    .then(response => {
      console.log(response);
    })
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="prerender-status-code" content="200"></meta>
        <title>Home</title>
      </Helmet>

      <div className="HomePrentCls">
        <Header />
        <div className="parentDivHomeCls">
          <div className="m7w29c">
            <div class="JH79cc RVEQke b33AEc"></div>
            <div class="N0gd6">
              <div class="ahS2Le">
                <div
                  class="custCallHeadData"
                  dir="auto"
                  role="heading"
                  aria-level="1"
                >
                  Customer Call Data
                </div>
              </div>
              <div class="totalHeadCls" dir="auto">
                TOTAL BUILDWARE MALA
              </div>
              <div jsname="F0H8Yc" class="liS6Hc"></div>
            </div>
            <div class="zAVwcb"></div>
            <div className="subHeadTitleCls">
              The entered data will be stored into google sheet once you submit
              the form.
            </div>
          </div>

          <div className="m7w29c">
            <Select label="Select Site" optionsArray={["Tiles","Chits"]} onChange={handleChange} name="site"/>
            <FloatingInput
              className="custNameIpt"
              type="text"
              handleChange={handleChange}
              label="Customer Name"
              htmlFor="Customer Name"
              name="name"
            />
            <Button
              value="Submit"
              className="sendbtn btnCls"
              parentClassName="btnPrntCls"
              onClick={onBtnClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
