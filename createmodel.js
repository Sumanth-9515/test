var connection=require("./database.js")

exports.users1model = () => {
  return new Promise((resolve,reject) => {
    connection.query("select * from users1", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};


exports.dataid=(id)=>{
    return new Promise((resolve,reject)=>{    
  connection.query(
    "select * from users1 where id =? ",
    [id],
    (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    }
  );

    })
}