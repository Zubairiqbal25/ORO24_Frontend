
export const graphApiUrl =
    "https://graph.microsoft.com/v1.0/drive/root/children/";
//----- local host -------//
//export const ApiDevUrl = "http://localhost:7071/api/";

//==============================                                                            ============================== //
//============================== Dev App URLs (uncomment following while uploading to dev app)  ============================== //
//==============================                                                            ============================== //

export const ApiDevUrl = process.env.ApiDevUrl;
export const AppUrl = process.env.AppUrl;
export const AppClientID = process.env.AppClientID;
export const AppBaseUrl = process.env.AppBaseUrl;
const hostKey = process.env.hostKey;
export const ApiCurriculam = process.env.ApiCurriculam;
export const AppScope = process.env.AppScope;



/**
 * Convert an object to a URLSearchParams
 * @param obj object that will be converted
 */
function objToParams(obj) {
    const params = new URLSearchParams();
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (value !== undefined) {
                params.append(key, value);
            }
        }
    }
    return params;
}

export const HOST_URL_COMMON = "https://localhost:7067/";

/**
 * Get data from the UMS Service, returns a promise with the data
 * @param url The Service Method URL to get the data from.
 * @param parameters the parameters (as an object with name:value pairs) the request should be made with.
 */


export async function LogInpostData(url, parameters)  {
    const actualUrl = HOST_URL_COMMON +url;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
   
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: parameters,
      redirect: 'follow',
    };
    
    return await fetch(actualUrl , requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}


export async function SignUp(url, parameters){
    const actualUrl = HOST_URL_COMMON +url;
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: parameters,
  redirect: 'follow'
};

return fetch(actualUrl, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

export async function GetProduct(url){
  const actualUrl = HOST_URL_COMMON +url;
  var myHeaders = new Headers();
myHeaders.append("Authorization", "<API Key>");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(actualUrl, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  return 
}