const { default: loadCustomRoutes } = require("next/dist/lib/load-custom-routes")

import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;")
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;
  // const max_connections =
  // const used_connectins = 

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
      }
    }
    // database_version_result: ,
    // max_connections: ,
    // used_connectins: ,
  });
}

export default status