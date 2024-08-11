import { QueryInterface } from "sequelize";
import { hash } from 'bcryptjs';
module.exports = {
  up: async(queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Digital Connecting",
          email: "admin@digitalconnecting.com.br",
          password: await hash('123456', 10),
          companyId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("users", {});
  }
};
