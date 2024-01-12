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

import ApiClient from '../ApiClient';

/**
 * The RequestTicketMedicine model module.
 * @module model/RequestTicketMedicine
 * @version v1
 */
class RequestTicketMedicine {
    /**
     * Constructs a new <code>RequestTicketMedicine</code>.
     * @alias module:model/RequestTicketMedicine
     * @param fromCache {Boolean} 
     * @param ticketType {String} 
     * @param barcode {String} 
     * @param usePeriode {Number} 
     * @param usePeriodeUnit {Number} 
     * @param dailyUsingDose1 {Number} 
     * @param dailyUsingDose2 {Number} 
     */
    constructor(fromCache, ticketType, barcode, usePeriode, usePeriodeUnit, dailyUsingDose1, dailyUsingDose2) { 
        
        RequestTicketMedicine.initialize(this, fromCache, ticketType, barcode, usePeriode, usePeriodeUnit, dailyUsingDose1, dailyUsingDose2);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fromCache, ticketType, barcode, usePeriode, usePeriodeUnit, dailyUsingDose1, dailyUsingDose2) { 
        obj['fromCache'] = fromCache;
        obj['ticketType'] = ticketType;
        obj['barcode'] = barcode;
        obj['usePeriode'] = usePeriode;
        obj['usePeriodeUnit'] = usePeriodeUnit;
        obj['dailyUsingDose1'] = dailyUsingDose1;
        obj['dailyUsingDose2'] = dailyUsingDose2;
    }

    /**
     * Constructs a <code>RequestTicketMedicine</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestTicketMedicine} obj Optional instance to populate.
     * @return {module:model/RequestTicketMedicine} The populated <code>RequestTicketMedicine</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestTicketMedicine();

            if (data.hasOwnProperty('fromCache')) {
                obj['fromCache'] = ApiClient.convertToType(data['fromCache'], 'Boolean');
            }
            if (data.hasOwnProperty('ticketType')) {
                obj['ticketType'] = ApiClient.convertToType(data['ticketType'], 'String');
            }
            if (data.hasOwnProperty('barcode')) {
                obj['barcode'] = ApiClient.convertToType(data['barcode'], 'String');
            }
            if (data.hasOwnProperty('usePeriode')) {
                obj['usePeriode'] = ApiClient.convertToType(data['usePeriode'], 'Number');
            }
            if (data.hasOwnProperty('usePeriodeUnit')) {
                obj['usePeriodeUnit'] = ApiClient.convertToType(data['usePeriodeUnit'], 'Number');
            }
            if (data.hasOwnProperty('dailyUsingDose1')) {
                obj['dailyUsingDose1'] = ApiClient.convertToType(data['dailyUsingDose1'], 'Number');
            }
            if (data.hasOwnProperty('dailyUsingDose2')) {
                obj['dailyUsingDose2'] = ApiClient.convertToType(data['dailyUsingDose2'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RequestTicketMedicine</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RequestTicketMedicine</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RequestTicketMedicine.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['ticketType'] && !(typeof data['ticketType'] === 'string' || data['ticketType'] instanceof String)) {
            throw new Error("Expected the field `ticketType` to be a primitive type in the JSON string but got " + data['ticketType']);
        }
        // ensure the json data is a string
        if (data['barcode'] && !(typeof data['barcode'] === 'string' || data['barcode'] instanceof String)) {
            throw new Error("Expected the field `barcode` to be a primitive type in the JSON string but got " + data['barcode']);
        }

        return true;
    }


}

RequestTicketMedicine.RequiredProperties = ["fromCache", "ticketType", "barcode", "usePeriode", "usePeriodeUnit", "dailyUsingDose1", "dailyUsingDose2"];

/**
 * @member {Boolean} fromCache
 */
RequestTicketMedicine.prototype['fromCache'] = undefined;

/**
 * @member {String} ticketType
 */
RequestTicketMedicine.prototype['ticketType'] = undefined;

/**
 * @member {String} barcode
 */
RequestTicketMedicine.prototype['barcode'] = undefined;

/**
 * @member {Number} usePeriode
 */
RequestTicketMedicine.prototype['usePeriode'] = undefined;

/**
 * @member {Number} usePeriodeUnit
 */
RequestTicketMedicine.prototype['usePeriodeUnit'] = undefined;

/**
 * @member {Number} dailyUsingDose1
 */
RequestTicketMedicine.prototype['dailyUsingDose1'] = undefined;

/**
 * @member {Number} dailyUsingDose2
 */
RequestTicketMedicine.prototype['dailyUsingDose2'] = undefined;






export default RequestTicketMedicine;

