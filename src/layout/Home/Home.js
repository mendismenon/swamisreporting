import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/footer/Footer";
import Button from "../../inputControls/button/Button";
import Checkbox from "../../inputControls/checkbox/Checkbox";
import FloatingInput from "../../inputControls/floatingInput/FloatingInput";
import Header from "../../inputControls/header/Header";
import Radio from "../../inputControls/radio/Radio";
import Select from "../../inputControls/select/select";
import DatePicker from "react-datepicker";
import "./Home.css";
import "react-datepicker/dist/react-datepicker.css";
import TextArea from "../../inputControls/textarea/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { STATE, stateChanges } from "../../redux/actions/StateAction";
import { isEmpty } from "../../utill/validator";
const Home = () => {
  const [data, setData] = useState({
    name_of_sales_manager: "",
    customer_name: "",
    customer_number: "",
    customer_requirement: [],
    requirement: "",
    callback_date: "",
    remarks: "",
  });
  const dispatch = useDispatch();
  const stateValue = useSelector((state) => {
    return state.StateReducer.reportingData;
  });
  const handleChange = (pdata, pname, isRequired) => {
    debugger;
    var lcurrentObj = { ...stateValue };
    lcurrentObj[pname] = {};
    lcurrentObj[pname].value = pdata;
    if (isRequired && isEmpty(pdata)) {
      lcurrentObj[pname].valid = false;
      lcurrentObj[pname].errorMsg = "Kindly provide valid input.";
    } else if (pname === "customer_number") {
    } else {
      lcurrentObj[pname].valid = true;
      lcurrentObj[pname].errorMsg = "";
    }
    dispatch(stateChanges(lcurrentObj));
  };
  const selectCustRequirement = (pcheckedVal, pcurrentObj, pindex) => {
    let lcurrentObj = { ...stateValue };
    if (!lcurrentObj.customer_requirement) {
      lcurrentObj.customer_requirement = [];
    }
    lcurrentObj.customer_requirement[pindex] = pcurrentObj;
    lcurrentObj.customer_requirement[pindex].checked = pcheckedVal;
    dispatch(stateChanges(lcurrentObj));
  };
  const dateFn = (pdate, pVal) => {
    let day =
      pdate.getDate() && pdate.getDate() < 10
        ? `0${pdate.getDate()}`
        : pdate.getDate();
    let month =
      pdate.getMonth() && pdate.getMonth() + 1 < 10
        ? `0${pdate.getMonth() + 1}`
        : pdate.getMonth() + 1;
    let year = pdate.getFullYear();
    let ldate = `${day}/${month}/${year}`;
    handleChange(ldate, pVal);
  };
  const setDateValueFn = (pdate) => {
    debugger;
    var dateParts = pdate.split("/");
    return new Date([dateParts[1], dateParts[0], dateParts[2]].join("/"));
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
            <div className="custCallDataCls">Customer Call Data</div>
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

          <div className="m7w29c padTpHmCls">
            <Select
              label="Name of sales manager"
              optionsArray={["Reshma", "Geffin", "Divya", "Siji", "Walk in"]}
              onChange={handleChange}
              name="name_of_sales_manager"
              required={true}
              value={stateValue?.name_of_sales_manager?.value}
              isRequired={true}
              isValid={stateValue?.name_of_sales_manager?.valid}
              errorMsg={stateValue?.name_of_sales_manager?.errorMsg}
            />
            <div className="spacAddBtwnFildCls"></div>
            <FloatingInput
              className="custNameIpt"
              type="text"
              handleChange={handleChange}
              label="Customer name"
              htmlFor="Customer name"
              name="customer_name"
              required={true}
              isRequired={true}
              value={stateValue?.customer_name?.value}
              isValid={stateValue?.customer_name?.valid}
              errorMsg={stateValue?.customer_name?.errorMsg}
              maxLength={30}
            />
            <div className="spacAddBtwnFildCls"></div>
            <FloatingInput
              className="custNumIpt"
              type="text"
              handleChange={handleChange}
              label="Customer number"
              htmlFor="Customer number"
              name="customer_number"
              maxLength={10}
              required={true}
              isRequired={true}
              value={stateValue?.customer_number?.value}
              isValid={stateValue?.customer_number?.valid}
              errorMsg={stateValue?.customer_number?.errorMsg}
            />
            <div className="spacAddBtwnFildCls"></div>
            <div className="ReqHeadCls requiredCls labelCls">
              Customer Requirement
            </div>
            <div className="ReqHeadCls">
              {[
                {
                  id: "Tiles",
                  name: "Tiles",
                  value: "Tiles",
                },
                {
                  id: "Sanitaries",
                  name: "Sanitaries",
                  value: "Sanitaries",
                },
                {
                  id: "Fittings",
                  name: "Fittings",
                  value: "Fittings",
                },
              ].map((e, ind) => (
                <div className="dispFlex">
                  <Checkbox
                    label={e.name}
                    index={ind}
                    required={false}
                    isRequired={false}
                    checked={
                      stateValue?.customer_requirement?.length > 0
                        ? stateValue?.customer_requirement[ind]?.checked
                        : false
                    }
                    value={e}
                    onClick={selectCustRequirement}
                  />
                  <div className="chck-updates my-auto ml-half">{e.name}</div>
                </div>
              ))}
            </div>
            <div className="spacAddBtwnFildCls"></div>
            <div className="ReqHeadCls requiredCls labelCls">Requirement</div>
            <div className="radioParentCls">
              {["Hot", "Cold"].map((pval, pind) => (
                <>
                  <Radio
                    for={"Payment1"}
                    onClick={handleChange}
                    value={pval}
                    selected={stateValue?.requirement?.value}
                    label={pval}
                    name="requirement"
                  />
                </>
              ))}
            </div>
            <div className="spacAddBtwnFildCls"></div>
            <div className="ReqHeadCls requiredCls labelCls">Callback date</div>
            <div className="ReqHeadCls">
              <DatePicker
                placeholderText="dd/mm/yyyy"
                className="dateStyleCls"
                selected={
                  stateValue?.callback_date?.value
                    ? setDateValueFn(stateValue?.callback_date?.value)
                    : undefined
                }
                onChange={(date) => dateFn(date, "callback_date")}
                dateFormat="dd-MM-yyyy"
              />
            </div>
            <div className="spacAddBtwnFildCls"></div>
            <TextArea
              label="Remarks"
              required={false}
              isRequired={false}
              value={stateValue?.remarks?.value}
              isValid={stateValue?.remarks?.valid}
              errorMsg={stateValue?.remarks?.errorMsg}
              handleChange={handleChange}
              name="remarks"
            />
            <div className="spacAddBtwnFildCls"></div>
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
