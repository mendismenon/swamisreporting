import { Helmet } from "react-helmet";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../inputControls/header/Header";
import { isMobile } from "react-device-detect";
import "./ViewRecords.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewRecordsActnFn } from "../../redux/actions/ViewRecordsActn";
import Loader from "../../components/loader/Loader";

const ViewRecords = () => {
  const [apiCalled, setApiCalled] = useState(false);
  const dispatch = useDispatch();
  const viewRecordsData = useSelector((state) => {
    return state.viewReducer.viewRecordObj.data;
  });
  const isLoading = useSelector((state) => {
    debugger;
    return state.viewReducer.viewRecordObj.isLoading;
  });
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="prerender-status-code" content="200"></meta>
        <title>View Records</title>
      </Helmet>
      {isLoading && <Loader FullScreen={true} />}
      <Navigation />
      <div className="ViewPrentCls">
        {isMobile ? (
          <>
            <div className="m7w29c headCusstCallDataCls">
              <div className="custCallDataCls">View Records Data</div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};
export default ViewRecords;
