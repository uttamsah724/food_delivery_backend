const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Food Delivery API",
      version: "1.0.0",
      description: "A simple Express Food Delivery API",
    },
  },
  // Path to the API docs
  apis: ["./routes/pricingRoutes.js"], // Adjust this according to your project structure
};

const swaggerSpecs = swaggerJsDoc(swaggerOptions);

module.exports = {
  swaggerUi,
  swaggerSpecs
};
