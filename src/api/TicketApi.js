/**
 * Kolay Asistan Medicine API
 * Kolay Asistan medicine application api layer. Revision Date: 04.12.2022
 *
 * The version of the OpenAPI document: v1
 * Contact: ahmetyagibasan@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import RequestTicketMedicine from '../model/RequestTicketMedicine';
import Ticket from '../model/Ticket';

/**
* TICKET service.
* @module api/TICKETApi
* @version v1
*/
export default class TICKETApi {

    /**
    * Constructs a new TICKETApi. 
    * @alias module:api/TICKETApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get medicine detail
     * @param {String} barcode 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ticket} and HTTP response
     */
    ticketControllerFindByBarcodeWithHttpInfo(barcode) {
      let postBody = null;
      // verify the required parameter 'barcode' is set
      if (barcode === undefined || barcode === null) {
        throw new Error("Missing the required parameter 'barcode' when calling ticketControllerFindByBarcode");
      }

      let pathParams = {
        'barcode': barcode
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Ticket;
      return this.apiClient.callApi(
        '/ticket/findByBarcode/{barcode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get medicine detail
     * @param {String} barcode 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ticket}
     */
    ticketControllerFindByBarcode(barcode) {
      return this.ticketControllerFindByBarcodeWithHttpInfo(barcode)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get medicine detail
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ticket} and HTTP response
     */
    ticketControllerFindByNameWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Ticket;
      return this.apiClient.callApi(
        '/ticket/findByName/{ticketName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get medicine detail
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ticket}
     */
    ticketControllerFindByName() {
      return this.ticketControllerFindByNameWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get medicine detail from cache
     * @param {module:model/RequestTicketMedicine} requestTicketMedicine 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ticket} and HTTP response
     */
    ticketControllerFindByTicketFromCacheWithHttpInfo(requestTicketMedicine) {
      let postBody = requestTicketMedicine;
      // verify the required parameter 'requestTicketMedicine' is set
      if (requestTicketMedicine === undefined || requestTicketMedicine === null) {
        throw new Error("Missing the required parameter 'requestTicketMedicine' when calling ticketControllerFindByTicketFromCache");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Ticket;
      return this.apiClient.callApi(
        '/ticket/findByTicketFromCache', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get medicine detail from cache
     * @param {module:model/RequestTicketMedicine} requestTicketMedicine 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ticket}
     */
    ticketControllerFindByTicketFromCache(requestTicketMedicine) {
      return this.ticketControllerFindByTicketFromCacheWithHttpInfo(requestTicketMedicine)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
