import { Helmet } from "react-helmet";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../inputControls/header/Header";
import { isMobile } from "react-device-detect";
import "./CallDashboard.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import Button from "../../inputControls/button/Button";
import { getCallData, getFullDate } from "../../utill/util";
import { viewRecordsActnFn } from "../../redux/actions/ViewRecordsActn";
import CallsMade from "../../components/callDashboard/callesMade/CallsMade";

const CallDashboard = () => {
  const [apiCalled, setApiCalled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dateRangeSelect, setDateRangeSelect] = useState(false);
  const dispatch = useDispatch();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      autoFocus: true,
    },
  ]);
  const viewRecordsApiData = useSelector((state) => {
    return state.viewReducer.viewRecordObj.data;
  });
  const isLoading = useSelector((state) => {
    return state.viewReducer.viewRecordObj.isLoading;
  });
  const Endate =
    state[0].endDate === null
      ? getFullDate(state[0].startDate)
      : getFullDate(state[0].endDate);
  const startDate = state[0].startDate ? getFullDate(state[0].startDate) : "";

  useEffect(() => {
    dispatch(viewRecordsActnFn());
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="prerender-status-code" content="200"></meta>
        <title>View Records</title>
      </Helmet>
      {isLoading && <Loader FullScreen={true} />}
      <Navigation />
      <div className="bgClolor">
        <div className="CallDashPrentCls">
          {isMobile ? (
            <>
              <div className="m7w29c headCusstCallDataCls">
                <div className="custCallDataCls">Call Dashboard</div>
              </div>
            </>
          ) : (
            <>
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
                      Call Dashboard
                    </div>
                  </div>
                  <div class="totalHeadCls" dir="auto">
                    TOTAL BUILDWARE MALA
                  </div>
                  <div jsname="F0H8Yc" class="liS6Hc"></div>
                </div>
              </div>
            </>
          )}
          <div className="dispFlex">
            <div>
              <Button
                value="Select date range"
                className="btnCls secondary"
                onClick={() => setOpen(!open)}
              />
            </div>
            <div className="marginLeft1rem padRight1rem">
              {(dateRangeSelect || open) &&
                state[0].startDate !== "" &&
                state[0].endDate !== "" && (
                  <p>
                    {startDate} {"- "}
                    {Endate}
                  </p>
                )}
            </div>
            {open && (
              <div className="widthFull">
                <div>
                  <DateRangePicker
                    onChange={(item) => setState([item.selection])}
                    editableDateInputs={true}
                    //showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={state}
                    direction="horizontal"
                  />
                </div>
                <div className="dispFlex">
                  <Button
                    value="Done Selection"
                    className="btnCls"
                    onClick={() => {
                      setOpen(false);
                      setDateRangeSelect(true);
                    }}
                  />
                  <Button
                    value="Clear Selection"
                    className="secondary btnCls marginLeft1rem"
                    onClick={() => {
                      setOpen(false);
                      setDateRangeSelect(false);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          {viewRecordsApiData?.length > 0 && (<div>
            <CallsMade data={viewRecordsApiData} callData={getCallData(viewRecordsApiData)}/>
          </div>)}
        </div>
      </div>
    </>
  );
};
export default CallDashboard;
