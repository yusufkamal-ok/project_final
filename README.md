# project_final

## URL Deploy
- **Public** https://api.myproject.com
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
  - Bearer Token : Token
 
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


  
### 1. Product

- **POST** `/products`
  - Deskripsi: add product.
  - Request Body:
    ```json
    {
    "name": "nameproduct",
    "description": "Deskripsi product",
    "images": ["images product],
    "price": 10000,
    "qty": 100,
    "category": "categoryproduct"
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
      "images": ["images product],
      "price": 10000,
      "qty": 100,
      "category": "categoryproduct"
    }
    
- **DELETE** `/products/:id`
  - Deskripsi: Delete produk berdasarkan id.
