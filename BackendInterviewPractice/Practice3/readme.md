REST API: Product Manager
Create a REST API with CRUD for products.

POST /products: Add a product
GET /products: List all products
GET /products/:id: Get one
PUT /products/:id: Update
DELETE /products/:id: Delete

Model fields: name, price, inStock (boolean)

Can build full CRUD manually using Node.js and http module
🔸 You’ll manually parse req.url, req.method, and body data (with event listeners)
🔸 You’ll also write response headers yourself

