//############################################//
let env="dev" //dev, qa, prod
//############################################//

const profileConfig = {
  qa:{
    global: "",
    employeesure: "",
    dashboardUrl: ""
  },
  dev:{
    global: "",
    employeesure: "",
    dashboardUrl: ""
  },
  prod:{
    global: "",
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

export const pageURL = {
  ENV : env,
  LOGIN_URL : urlPrefixGlobal("/users?country_id=~cId~&mobile_no=~mNum~"),
  SHEET_URL: "https://sheet.best/api/sheets/d1cc308d-2e10-4a7a-96ee-0dff6d4de677"
}
