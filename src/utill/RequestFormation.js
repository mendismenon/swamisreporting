import { SHEET_FIELD_INDEX_MAPPING } from "./constants";

export const getUploadFormDataRequest = (pdata) => {
  let lreq = {
    requests: [
      {
        appendCells: {
          sheetId: 0,
          rows: [
            {
              values: [],
            },
          ],
          fields: "*",
        },
      },
    ],
  };
  Object.keys(pdata).map((pobj) => {
    let ltempObj = {};
    ltempObj.userEnteredValue = {};
    ltempObj.userEnteredValue.stringValue = pdata[pobj];
    lreq.requests[0].appendCells.rows[0].values[SHEET_FIELD_INDEX_MAPPING[pobj]] = ltempObj;
  });
  return lreq;
};
