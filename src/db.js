const mysql = require('mysql');

const mysqlConfig = {
  host: 'localhost',  // �½����ݿ�����ʱ�� ��������ID��ַ ����
  user: 'root', 
  password: '506830', // root ����
  database: 'mobileshop', // ���ݿ���
  port: '3306'
}
const pool = mysql.createPool({
  host: mysqlConfig.host,
  user: mysqlConfig.user,
  password: mysqlConfig.password,
  database: mysqlConfig.database,
  port: mysqlConfig.port,
  multipleStatements: true    // ������ѯ
});

var setValue = function() {
  pool.getConnection((err, connection) => {
    var sql = 'INSERT INTO mobileclassify(id, name) VALUES (4, "ȫ���ֻ�")'
    connection.query(sql, (err, result) => {
        console.log(result);
        connection.release();
    })
  })
}
setValue();