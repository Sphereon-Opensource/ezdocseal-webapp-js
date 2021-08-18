const DefaultApi = require('./api/DefaultApi')
const JsonSignRequest = require('./model/JsonSignRequest')
const SignData = require('./model/SignData')
//const Error = require('model/Error')

export class SignPdf {

  constructor() {
    this.api = new DefaultApi.default()
    this.api.apiClient.basePath = process.env.API_BASE_URL
    const authentication = this.api.apiClient.authentications['api_key'];
    authentication.apiKey = process.env.API_KEY
  }

  doSignPDF = async pdfSignRequest => {
    console.log(pdfSignRequest.description)

    const jsonSignRequest = new JsonSignRequest.default(pdfSignRequest.signData, pdfSignRequest.file.substring(37));

    // eslint-disable-next-line no-unused-vars
    const callback = function (error, data, response) {
      if (error) {
        console.error(error);
      } else {
        var a = document.createElement("a");
        a.href = "data:application/octet-stream;base64," + data.content;
        a.download = "test.pdf";
        a.click();
      }
    };
    this.api.sign(jsonSignRequest, callback);
  };

  createSignRequest = (fields, file) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    return new Promise((resolve, reject) => {
      fileReader.onload = () => {
        try {
          const signRequest = new PdfSignRequest(file.name, SignData.default.constructFromObject(fields, null), fileReader.result);
          resolve(signRequest);
        } catch (err) {
          reject(err);
        }
      };
      fileReader.onerror = err => {
        reject(err);
      };
    });
  };
}

export class PdfSignRequest {
  constructor(name, signData, file) {
    this.name = name;
    this.signData = signData;
    this.file = file;
  }
  name;
  file;
  signData
}
