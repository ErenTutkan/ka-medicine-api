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
import FilterModel from '../model/FilterModel';
import Medicine from '../model/Medicine';

/**
* MEDICINE service.
* @module api/MEDICINEApi
* @version v1
*/
export default class MEDICINEApi {

    /**
    * Constructs a new MEDICINEApi. 
    * @alias module:api/MEDICINEApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get all medicine list
     * @param {module:model/FilterModel} filterModel 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Medicine>} and HTTP response
     */
    medicineControllerFindAllWithHttpInfo(filterModel) {
      let postBody = filterModel;
      // verify the required parameter 'filterModel' is set
      if (filterModel === undefined || filterModel === null) {
        throw new Error("Missing the required parameter 'filterModel' when calling medicineControllerFindAll");
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
      let returnType = [Medicine];
      return this.apiClient.callApi(
        '/medicine', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all medicine list
     * @param {module:model/FilterModel} filterModel 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Medicine>}
     */
    medicineControllerFindAll(filterModel) {
      return this.medicineControllerFindAllWithHttpInfo(filterModel)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get medicine by barcode
     * @param {String} barcode 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Medicine} and HTTP response
     */
    medicineControllerFindByBarcodeWithHttpInfo(barcode) {
      let postBody = null;
      // verify the required parameter 'barcode' is set
      if (barcode === undefined || barcode === null) {
        throw new Error("Missing the required parameter 'barcode' when calling medicineControllerFindByBarcode");
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
      let returnType = Medicine;
      return this.apiClient.callApi(
        '/medicine/findByBarcode/{barcode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get medicine by barcode
     * @param {String} barcode 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Medicine}
     */
    medicineControllerFindByBarcode(barcode) {
      return this.medicineControllerFindByBarcodeWithHttpInfo(barcode)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get medicine by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Medicine>} and HTTP response
     */
    medicineControllerFindByNameWithHttpInfo() {
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
      let returnType = [Medicine];
      return this.apiClient.callApi(
        '/medicine/findByName/{medicineName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get medicine by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Medicine>}
     */
    medicineControllerFindByName() {
      return this.medicineControllerFindByNameWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get medicine by id
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Medicine} and HTTP response
     */
    medicineControllerFindOneWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling medicineControllerFindOne");
      }

      let pathParams = {
        'id': id
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
      let returnType = Medicine;
      return this.apiClient.callApi(
        '/medicine/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get medicine by id
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Medicine}
     */
    medicineControllerFindOne(id) {
      return this.medicineControllerFindOneWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
