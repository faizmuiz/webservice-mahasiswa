var mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_mahasiswa'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql sudah terkoneksi')
});

module.exports = conn;