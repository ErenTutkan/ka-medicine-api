# KolayAsistanMedicineApi.TICKETApi

All URIs are relative to *https://ka-medicine.herokuapp.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ticketControllerFindByBarcode**](TICKETApi.md#ticketControllerFindByBarcode) | **GET** /ticket/findByBarcode/{barcode} | Get medicine detail
[**ticketControllerFindByName**](TICKETApi.md#ticketControllerFindByName) | **GET** /ticket/findByName/{ticketName} | Get medicine detail
[**ticketControllerFindByTicketFromCache**](TICKETApi.md#ticketControllerFindByTicketFromCache) | **POST** /ticket/findByTicketFromCache | Get medicine detail from cache



## ticketControllerFindByBarcode

> Ticket ticketControllerFindByBarcode(barcode)

Get medicine detail

### Example

```javascript
import KolayAsistanMedicineApi from 'kolay_asistan_medicine_api';

let apiInstance = new KolayAsistanMedicineApi.TICKETApi();
let barcode = "barcode_example"; // String | 
apiInstance.ticketControllerFindByBarcode(barcode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **barcode** | **String**|  | 

### Return type

[**Ticket**](Ticket.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ticketControllerFindByName

> Ticket ticketControllerFindByName()

Get medicine detail

### Example

```javascript
import KolayAsistanMedicineApi from 'kolay_asistan_medicine_api';

let apiInstance = new KolayAsistanMedicineApi.TICKETApi();
apiInstance.ticketControllerFindByName().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Ticket**](Ticket.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ticketControllerFindByTicketFromCache

> Ticket ticketControllerFindByTicketFromCache(requestTicketMedicine)

Get medicine detail from cache

### Example

```javascript
import KolayAsistanMedicineApi from 'kolay_asistan_medicine_api';

let apiInstance = new KolayAsistanMedicineApi.TICKETApi();
let requestTicketMedicine = new KolayAsistanMedicineApi.RequestTicketMedicine(); // RequestTicketMedicine | 
apiInstance.ticketControllerFindByTicketFromCache(requestTicketMedicine).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestTicketMedicine** | [**RequestTicketMedicine**](RequestTicketMedicine.md)|  | 

### Return type

[**Ticket**](Ticket.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

