import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/footer/Footer";
import Button from "../../inputControls/button/Button";
import Checkbox from "../../inputControls/checkbox/Checkbox";
import FloatingInput from "../../inputControls/floatingInput/FloatingInput";
import Header from "../../inputControls/header/Header";
import Select from "../../inputControls/select/select";
import "./Home.css";
const Home = () => {
  const [data, setData] = useState({
    name_of_sales_manager: "",
    customer_name: "",
    customer_number: "",
    customer_requirement: [],
    requirement: "",
    callback_date: "",
    remarks: ""
  });
  const handleChange = (pdata, pname) => {
    debugger;
    let ldata = { ...data };
    ldata[pname] = pdata;
    setData({ ...ldata });
  };

  const onBtnClick = () => {
    axios
      .post(
        "https://sheet.best/api/sheets/d1cc308d-2e10-4a7a-96ee-0dff6d4de677",
        data
      )
      .then((response) => {
        console.log(response);
      });
  };

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
          <div className="m7w29c headCusstCallDataCls">
            <div className="custCallDataCls">
            Customer Call Data
            </div>
          </div>
          <div className="m7w29c custCallDatatWebCls">
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
            <Select
              label="Name of sales manager"
              optionsArray={["Tiles", "Chits"]}
              onChange={handleChange}
              name="name_of_sales_manager"
              required={true}
            />
            <FloatingInput
              className="custNameIpt"
              type="text"
              handleChange={handleChange}
              label="Customer name"
              htmlFor="Customer name"
              name="customer_name"
              required={true}
            />
            <FloatingInput
              className="custNumIpt"
              type="text"
              handleChange={handleChange}
              label="Customer number"
              htmlFor="Customer number"
              name="customer_number"
              required={true}
            />
            <Checkbox 
              label="Customer requirement"
              required={true}
              items={[
                {
                  id: "Tiles",
                  name: "Tiles",
                  value: "Tiles"
                },
                {
                  id: "Sanitaries",
                  name: "Sanitaries",
                  value: "Sanitaries"
                },
                {
                  id: "Fittings",
                  name: "Fittings",
                  value: "Fittings"
                }
              ]}
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
