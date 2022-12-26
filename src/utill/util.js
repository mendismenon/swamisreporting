import { COLD_REQUIREMENT, HOT_REQUIREMENT } from "./constants";

export const getFullDate = (pdate) => {
  let day =
    pdate.getDate() && pdate.getDate() < 10
      ? `0${pdate.getDate()}`
      : pdate.getDate();
  let month =
    pdate.getMonth() + 1 < 10
      ? `0${pdate.getMonth() + 1}`
      : pdate.getMonth() + 1;
  let year = pdate.getFullYear();
  return `${year}/${month}/${day}`;
};

export const getCallData = (pdata) => {
  let larr = [];
  let lnameArr = []
  pdata.map((lobj)=>{
    let ltemp = {}
    ltemp.name_of_sales_manager = lobj.name_of_sales_manager;
    if(lobj.requirement == null){
      ltemp.hotCount = 0;
      ltemp.coldCount = 0;
    }
    if(lnameArr.indexOf(lobj.name_of_sales_manager) === -1){
      if(lobj.requirement === HOT_REQUIREMENT){
        ltemp.hotCount = 1;
      }else if(lobj.requirement === COLD_REQUIREMENT){
        ltemp.coldCount = 1;
      }
      ltemp.recordCount = 1;
      lnameArr.push(lobj.name_of_sales_manager);
      larr.push(ltemp);
    }else {
      let currentIndex = lnameArr.indexOf(lobj.name_of_sales_manager);
      ltemp = {...larr[currentIndex]};
      if(lobj.requirement === HOT_REQUIREMENT){
        larr[currentIndex].hotCount = larr[currentIndex].hotCount +1;
      }else if(lobj.requirement === COLD_REQUIREMENT){
        larr[currentIndex].coldCount = larr[currentIndex].coldCount +1;
      }
      larr[currentIndex].recordCount = larr[currentIndex].recordCount +1;
    }
    
  })
  return {requirementArr : larr, salesManagerArr: lnameArr};
}