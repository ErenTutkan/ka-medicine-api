# KolayAsistanMedicineApi.MedicineApi

All URIs are relative to *https://ka-medicine.herokuapp.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**medicineControllerFindAll**](MedicineApi.md#medicineControllerFindAll) | **GET** /medicine | Get all medicine list
[**medicineControllerFindByBarcode**](MedicineApi.md#medicineControllerFindByBarcode) | **GET** /medicine/findByBarcode/{barcode} | Get medicine by barcode
[**medicineControllerFindByName**](MedicineApi.md#medicineControllerFindByName) | **GET** /medicine/findByName/{medicineName} | Get medicine by name
[**medicineControllerFindOne**](MedicineApi.md#medicineControllerFindOne) | **GET** /medicine/{id} | Get medicine by id



## medicineControllerFindAll

> [Medicine] medicineControllerFindAll(filterModel)

Get all medicine list

### Example

```javascript
import KolayAsistanMedicineApi from 'kolay_asistan_medicine_api';

let apiInstance = new KolayAsistanMedicineApi.MedicineApi();
let filterModel = new KolayAsistanMedicineApi.FilterModel(); // FilterModel | 
apiInstance.medicineControllerFindAll(filterModel).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterModel** | [**FilterModel**](FilterModel.md)|  | 

### Return type

[**[Medicine]**](Medicine.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## medicineControllerFindByBarcode

> Medicine medicineControllerFindByBarcode(barcode)

Get medicine by barcode

### Example

```javascript
import KolayAsistanMedicineApi from 'kolay_asistan_medicine_api';

let apiInstance = new KolayAsistanMedicineApi.MedicineApi();
let barcode = "barcode_example"; // String | 
apiInstance.medicineControllerFindByBarcode(barcode).then((data) => {
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

[**Medicine**](Medicine.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## medicineControllerFindByName

> [Medicine] medicineControllerFindByName()

Get medicine by name

### Example

```javascript
import KolayAsistanMedicineApi from 'kolay_asistan_medicine_api';

let apiInstance = new KolayAsistanMedicineApi.MedicineApi();
apiInstance.medicineControllerFindByName().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Medicine]**](Medicine.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## medicineControllerFindOne

> Medicine medicineControllerFindOne(id)

Get medicine by id

### Example

```javascript
import KolayAsistanMedicineApi from 'kolay_asistan_medicine_api';

let apiInstance = new KolayAsistanMedicineApi.MedicineApi();
let id = "id_example"; // String | 
apiInstance.medicineControllerFindOne(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Medicine**](Medicine.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

