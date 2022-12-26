//############################################//
let env="prod" //dev, qa, prod
//############################################//

const profileConfig = {
  qa:{
    global: "",
    employeesure: "",
    dashboardUrl: ""
  },
  dev:{
    global: "http://localhost:3500/",
    employeesure: "",
    dashboardUrl: ""
  },
  prod:{
    global: "https://reporting-979z.onrender.com/",
    employeesure: "",
    dashboardUrl: ""
  }
}

export const DashboardUrl=profileConfig[env].dashboardUrl;

const urlPrefixGlobal = (url) =>{
  return profileConfig[env].global + url;
}
const urlPrefixEmpSure = (url) =>{
  return profileConfig[env].employeesure + url;
}

const SPREAD_SHEETS_ID = "19dKuryRzIcsRO7iH-K2zUkTvo7qOH0LYb4P392la-3U";
const proxyURl = "https://cors-anywhere-herokuapp.com/";
export const pageURL = {
  ENV : env,
  LOGIN_URL : urlPrefixGlobal("/users?country_id=~cId~&mobile_no=~mNum~"),
  SHEET_URL_OLD: "https://sheet.best/api/sheets/d1cc308d-2e10-4a7a-96ee-0dff6d4de677",
  TOKEN_REFRESH: "https://developers.google.com/oauthplayground/refreshAccessToken",
  SHEET_URL_OLD1 : `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEETS_ID}:batchUpdate`,
  SAVE_USER: urlPrefixGlobal("saveUser"),
  FETCH_CALLDATA: urlPrefixGlobal("fetchCallRecords"),
}
