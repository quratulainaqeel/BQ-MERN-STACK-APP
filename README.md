# Ecommerce-Website-API

## USER

#### LOGIN

```http
  POST /api/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required** **Unique** Enter your email |
| `password` | `string` | **Required**. Enter your password|

#### SIGNUP

```http
  POST /api/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Enter  username|
| `email` | `string` | **Required**  Enter  email|
| `password` | `string` | **Required**. Enter your password|

#### GET all User

```http
  GET /api/get-all-user
```
  | `Description`                |
  :------------------------- |
| This API returns a list of all user


#### GET User by ID

```http
  GET /api/get-user-by-id?_id=
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. Enter ID after "_id=" (ID is Auto generated by database)|

#### GET User by Email

```http
  GET /api/get-user-by-email?email=
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Enter email after "email="|

#### Update User Details

```http
  POST /api/update-user
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. Enter ID|
| `username` | `string` | . Enter username if you want to update username|
| `profile_pic` | `string` | .Upload Image if you want to update Image|

#### Delete User

```http
  POST /api/delete-user
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. Enter ID to delete user|


## CATEGORY

#### Add Category

```http
  POST /api/create-category
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `CategoryName` | `string` | **Required** **Unique** Enter Category name|
| `CategoryImage` | `string` | **Required**. Upload Category Image|

#### GET All Category

```http
  GET /api/get-all-category
```
  | `Description`                |
  :------------------------- |
| This API returns a list of all Categories

#### GET Category by ID

```http
  GET /api/get-category-by-id?_id=
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. Enter ID after "_id="|

#### GET Category by Name

```http
  GET /api/get-category-by-name?CategoryName=
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `CategoryName` | `string` | **Required**. Enter Category Name after "CategoryName="|

#### Update Category

```http
  POST /api/update-category
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `CategoryName` | `string` | **Required**. Enter Category Name|
| `CategoryImage` | `string` |Upload Category Image|

#### Delete Category

```http
  POST /api/delete-category
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. Enter ID to delete Category|


## BRAND

#### Add Brand

```http
  POST /api/create-brand
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `BrandName` | `string` | **Required** **Unique** Enter Brand Name|
| `CategoryImage` | `string` | **Required**. Upload Category Image|

#### GET All Brand

```http
  GET /api/get-all-brand
```
  | `Description`                |
  :------------------------- |
| This API returns a list of all Brands

#### GET Brand by ID

```http
  GET /api/get-brand-by-id?_id=
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. Enter ID after "_id="|

#### GET Brand by Name

```http
  GET /api/get-brand-by-name?BrandName=
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `BrandName` | `string` | **Required**. Enter Brand Name after "BrandName="|

#### Update Brand

```http
  POST /api/update-brand
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `BrandName` | `string` | **Required**. Enter Brand Name|
| `BrandImage` | `string` |Upload Brand Image|

#### Delete Brand

```http
  POST /api/delete-brand
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. Enter ID to delete Brand|



## PRODUCT

#### Add Product

```http
  POST /api/create-product
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**  Enter Product Name|
| `description` | `string` | **Required**. Write description about Product|
| `price` | `number` | **Required**. Enter Product price|
| `rating` | `string` | Enter Product Rating|
| `images` | `string` | **Required**. Upload Product Images|
| `category` | `string` | **Required**. Enter Product Category|
| `brand` | `string` | **Required**.Enter Product Brand|
| `thumbnail` | `string` | **Required**. Upload Product Thumbnail|

#### GET All Products

```http
  GET /api/get-all-product
```
  | `Description`                |
  :------------------------- |
| This API returns a list of all Products

#### GET Product by ID

```http
  GET /api/get-product-by-id?_id=
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. Enter ID|

#### GET Product by Brand

```http
  GET /api/get-product-by-brand?brand=
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `brand` | `string` | **Required**. Enter Brand|

#### GET Product by Category

```http
  GET /api/get-product-by-category?category=
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `BrandName` | `string` | **Required**. Enter Category after "?category="|

#### Update Product

```http
  POST /api/update-product
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**  Enter ID|
| `name` | `string` |  Enter Product Name|
| `description` | `string` | Write description about Product|
| `price` | `number` |Enter Product price|
| `rating` | `string` | Enter Product Rating|
| `images` | `string` |  Upload Product Images|
| `category` | `string` | Enter Product Category|
| `brand` | `string` | Enter Product Brand|
| `thumbnail` | `string` | Upload Product Thumbnail|

#### Delete product

```http
  POST /api/delete-product
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. Enter ID to delete Product|


## ORDER

#### Place ORDER

```http
  POST /api/create-order
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `items` | `Array` | **Required** Enter list of items in array|
| `totalBill` | `string` | **Required**. Enter total amount|
| `customerAddress` | `string` | **Required**. Enter Customer Address|
| `customerContact` | `string` | **Required**. Enter Customer Contace No|
| `customerName` | `string` | **Required**. Enter Customer Name|
| `customerEmail` | `string` | **Required**. Enter Customer  email|

#### GET All ORDERS

```http
  GET /api/get-all-order
```
  | `Description`                |
  :------------------------- |
| This API returns a list of all ORDERS

#### GET ORDER by ID

```http
  GET /api/get-order-by-id?_id=
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. Enter ID after "_id="|