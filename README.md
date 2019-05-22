# LAB - 07

## API Server

### Author: Morgana Spake, Joé Jemmely

### Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-mj/lab-07-api-server/pull/6)

#### Documentation

- [Swagger](https://app.swaggerhub.com/apis/joejemmely/lab-07/0.1)

### Modules

#### `server.js`

##### Exported Values and Methods

###### `server -> instance of Express`

##### `stat -> function(port)`

#### `entryConstructor.js`

##### Exported Values and Methods

###### `Entry -> instance of Entry`

new Entry(string)

### Setup

#### Running the app

- `npm start`
- Endpoint: GET `/categories/`
  - Returns a JSON object with a collection of entries
- Endpoint: POST `/categories/`
  - Body
    ```
    {
      "name":"Homer"
    }
    ```
  - Returns the newly added entry
- Endpoint: PUT `/categories/:id`
  - Body
    ```
    {
      "name":"Homer"
    }
    ```
  - Returns the modified entry
- Endpoint: DELETE `/categories/:id`

  - Returns the collection of entries without the removed entry

### UML

![UML](https://www.lucidchart.com/publicSegments/view/b08c57a2-b43d-492d-88da-242be7d1ee5c/image.png)
