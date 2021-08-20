const DefaultApi = require('./api/DefaultApi')
const JsonSignRequest = require('./model/JsonSignRequest')
const SignData = require('./model/SignData')

//const Error = require('model/Error')

export class SignPdf {

  constructor() {
    this.api = new DefaultApi.default()
    this.api.apiClient.basePath = process.env.API_PROXY_PATH;
    const authentication = this.api.apiClient.authentications['api_key'];
    authentication.apiKey = process.env.API_KEY
  }

  doSignPDF = async pdfSignRequest => {
    console.log(pdfSignRequest.description)

    let base64Content = pdfSignRequest.file;
    const startPos = base64Content.indexOf(',')
    if (base64Content.startsWith("data:") && startPos > -1) {
      base64Content = base64Content.substring(startPos + 1)
    }
    const jsonSignRequest = new JsonSignRequest.default(pdfSignRequest.signData, base64Content);
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-unused-vars
      this.api.sign(jsonSignRequest, (error, data, response) => {
          if (error) return reject(error);
          resolve(data);
        }
      );
    })
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
