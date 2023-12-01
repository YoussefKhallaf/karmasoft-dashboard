import { createFunction } from '/toolpadapp/@mui/toolpad/server';
import mysql from 'mysql2/promise';
import fs from 'fs';

async connectionFn () {
   const connection = await mysql.createConnection({
   host: process.env.MYSQL_HOST,
   port: process.env.MYSQL_PORT,
   user: process.env.MYSQL_USERNAME,
   password: process.env.MYSQL_PASSWORD,
   database: process.env.MYSQL_DATABASE
   });
   return connection;
}

export const getData = createFunction(async function getData() {
   const query = `SELECT * FROM table WHERE order_id=${parameters.order_id}`;
   const connection = await connectionFn();
   const [rows] = await connection.execute(sql);
   connection.end();
   return rows;
}, {
   parameters: {
      order_id: {
         type: 'number'
      }
   }
});
