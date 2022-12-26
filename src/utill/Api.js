import axios from "axios";
//import Logout from './Logout/Logout';
axios.defaults.withCredentials = true;

export const apiCall = async (pmethod, purl, preqObj) => {
  if (pmethod === "post" || pmethod === "patch") {
    return axios[pmethod](purl, preqObj, axiosConfig(true))
      .then((response) => {
        return response;
      })
      .catch((err) => {
        if (err?.response?.data?.status === 401) {
          //Logout()
          return err;
        } else {
          return err;
        }
      });
  } else if (pmethod === "get") {
    let lconfig = axiosConfig(true);
    lconfig.params = preqObj;
    return axios[pmethod](purl, lconfig)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        if (err.response.status === 401) {
          //Logout()
        } else {
          return err.response;
        }
      });
  }
};

export const fetchCall = (pmethod, purl, preqObj) => {
  if (pmethod === "post" || pmethod === "patch") {
      return fetch(purl,{
        method: pmethod,
        headers: axiosConfig(true)?.headers,
        body: JSON.stringify(preqObj)
      }).then((response) => {
        return response;
      })
      .catch((err) => {
        if (err?.response?.data?.status === 401) {
          //Logout()
          return err;
        } else {
          return err;
        }
      });
  }else if (pmethod === "get") {
    let lconfig = axiosConfig(true);
    lconfig.params = preqObj;
    return fetch(purl,{
      method: pmethod,
      headers: axiosConfig(true)?.headers,
      body: JSON.stringify(preqObj)
    })
      .then((response) => {
         return response.json();
      }).then((response)=>{
        return response;
      })
      .catch((err) => {
        if (err.response.status === 401) {
          //Logout()
        } else {
          return err.response;
        }
      });
  }
}
const axiosConfig = (pflag) => {
  if (pflag) {
    return {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        //"Content-Type" : "application/x-www-form-urlencoded",
        access_token:
          "ya29.a0AX9GBdWJWMC-2tVmhVqKayTlPP0lb4vGfv7nUwVsDYOU-kRkidLZY9X4Jt6NmaYawjPSW-rZQrkqRdyJmJY42fJ9BEBt8qq1dXe7WluO4QUCGhEcEPJjvcmp3MkXkSxcN39hJJPqzK54egfTMW7Zo1U_Bss5FcMaCgYKAXASAQASFQHUCsbCyJA1VBGoCfzsbP9bv00_Ow0166",
        "Access-Control-Allow-Origin": "*",
        authorization: `bearer ya29.a0AX9GBdWJWMC-2tVmhVqKayTlPP0lb4vGfv7nUwVsDYOU-kRkidLZY9X4Jt6NmaYawjPSW-rZQrkqRdyJmJY42fJ9BEBt8qq1dXe7WluO4QUCGhEcEPJjvcmp3MkXkSxcN39hJJPqzK54egfTMW7Zo1U_Bss5FcMaCgYKAXASAQASFQHUCsbCyJA1VBGoCfzsbP9bv00_Ow0166`,
      },
      mode: "no-cors"
    };
  } else {
    return {};
  }
};
// apiCall(method, url, data).then(function(response) {
//   console.log(response);
// });
export const storeData = (pkey, pvalue) => {
  localStorage.setItem(pkey, pvalue);
};

export const retrieveData = (pkey) => {
  return localStorage.getItem(pkey);
};

export const encryptStr = (pstr) => {
  return window.btoa(pstr);
};

export const decryptStr = (pstr) => {
  return window.atob(pstr);
};

export const outTxtByTime = () => {
  let today = new Date();
  let loutTxt = "";
  let curHr = today.getHours();
  if (curHr < 12) {
    loutTxt = "Good Morning";
  } else if (curHr < 16) {
    loutTxt = "Good Afternoon";
  } else if (curHr < 20) {
    loutTxt = "Good Evening";
  } else {
    loutTxt = "Good To See You";
  }
  return loutTxt;
};

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const heightWidthCalc = () => {
  var w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  var h =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  return {
    height: h,
    width: w,
  };
};
