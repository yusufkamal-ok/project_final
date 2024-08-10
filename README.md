# project_final

## URL Deploy
- **Public** https://project-final-seven-silk.vercel.app/api
- **Local:** http://localhost:3000/api

## Daftar Endpoint

### 1. Authentication

- **POST** `/auth/login`
  - Deskripsi: Login user dengan email dan password.
  - Request Body:
    ```json
    {
      "email": "yourname@mail.com",
      "password": "yourpassword"
    }
    ```

- **POST** `/auth/register`
  - Deskripsi: Register user baru.
  - Request Body:
    ```json
    {
      "email": "yourname@mail.com",
      "fullName": "yourname",
      "password": "yourpassword",
      "username": "yourusername",
      "role": "user"
    }
    ```

- **GET** `/auth/me`
  - Deskripsi: Detail User.
  - Auth Type : Bearer Token 
 
- **PUT** `/auth/profile`
  - Deskripsi: Update informasi user.
  - Request Body:
    ```json
    {
      "email": "yourname@mail.com",
      "fullName": "yourname",
      "password": "yourpassword",
      "username": "yourusername",
      "role": "user"
    }
    ```

### 2. Category

- **POST** `/category`
  - Deskripsi: add category.
  - Request Body:
    ```json
    {
    "nameCategory" : "Categoryproduct"
    }
    ```

- **GET** `/category`
  - Deskripsi: Menampilkan semua category produk.
 
- **PUT** `/category/:id`
  - Deskripsi: Update category.
  - Request Body:
    ```json
    {
    "nameCategory" : "categoryproduct"
    }
    
- **DELETE** `/category/:id`
  - Deskripsi: Delete category berdasarkan id.


  
### 3. Product

- **POST** `/products`
  - Deskripsi: add product.
  - Request Body:
    ```json
    {
    "name": "nameproduct",
    "description": "Deskripsi product",
    "images": ["imagesproduct"],
    "price": 10000,
    "qty": 100,
    "category": "id categoryproduct"
    }
    ```

- **GET** `/products`
  - Deskripsi: Menampilkan semua produk.
 
- **PUT** `/products/:id`
  - Deskripsi: Update product.
  - Request Body:
    ```json
    {
      "name": "nameproduct",
      "description": "Deskripsi product",
      "images": ["imagesproduct"],
      "price": 10000,
      "qty": 100,
      "category": "id categoryproduct"
    }
    
- **DELETE** `/products/:id`
  - Deskripsi: Delete produk berdasarkan id.

### 4. Order

- **POST** `/order`
  - Deskripsi: add order.
  - Request Body:
    ```json
    {
    "grandTotal": 150,
    "orderItems": [
    {
      "product": "id product",
      "quantity": 2
    }
    ],
    "createdBy": "id user",
    "status": "pending"
    }
    ```
  - Jika Order Success akan mengirimkan email invoice :
    !(images/ss_mail.png)
- **GET** `/order?userId=id user`
  - Deskripsi: Menampilkan semua order berdasarkan id user.
