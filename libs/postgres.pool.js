const { Pool } = require('pg');


  const pool  = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'capinz',
    password: 'capinz123',
    database: 'myStore'
  });

module.exports = pool;

