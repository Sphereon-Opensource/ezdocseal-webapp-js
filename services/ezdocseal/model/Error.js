/* eslint-disable */
/**
 * EzDocSeal
 * The easiest API to sign PDF documents, creating a blue bar. You provide a name, e-mail address, location and reason and the result is a signed PDF document. If you want more features and/or control we suggest to use our PDF stamper API.
 *
 * OpenAPI spec version: 0.1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The Error model module.
* @module SphereonSDKEzDocseal/model/Error
* @version 0.1.0
*/
export default class Error {
    /**
    * Constructs a new <code>Error</code>.
    * @alias module:SphereonSDKEzDocseal/model/Error
    * @class
    * @param code {String}
    * @param message {String}
    */

    constructor(code, message) {


        this['code'] = code;
        this['message'] = message;

    }

    /**
    * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:SphereonSDKEzDocseal/model/Error} obj Optional instance to populate.
    * @return {module:SphereonSDKEzDocseal/model/Error} The populated <code>Error</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Error();


            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} code
    */
    'code' = undefined;
    /**
    * @member {String} message
    */
    'message' = undefined;




}
