import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert(
      "companies",
      [
        {
          description: "Digital Connecting",
          email: "admin@digitalconnecting.com.br",
          phone: "5554999999999",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("companies", {});
  }
};
