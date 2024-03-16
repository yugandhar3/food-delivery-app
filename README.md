# Food Delivery App

## Description

This is a backend REST API for a food delivery app built using Node.js, Express, PostgreSQL database, Prisma ORM, and Swagger for API documentation. The API calculates the total cost of food delivery based on various factors such as distance, item type, and zone.

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/yugandhar3/food-delivery-app/tree/main
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Set up the PostgreSQL database and update the connection details in the `.env` file.

4. Run the migrations to create the necessary tables in the database:

    ```
    npx prisma migrate dev
    ```

5. Start the server:

    ```
    npm start
    ```

## Usage

The API provides endpoints for calculating the price of food delivery. You can use Swagger API documentation to explore and test the endpoints.

### Endpoints

- **POST /api/calculate-price**: Calculate the price for food delivery based on the provided parameters.

### Request Payload

```json
{
    "zone": "central",
    "organization_id": 1,
    "total_distance": 12,
    "item_type": "perishable"
}
```
### Response

```json
{
    "total_price": 3075
}
```
### To access application click below link:-

```
https://food-delivery-app-7gjx.onrender.com
```
## API Documentation

Swagger API documentation is available at `/api-docs` endpoint. You can access it in your browser to view and interact with the API endpoints.
