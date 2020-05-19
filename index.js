const inquirer = require("inquirer")
const mysql = require("mysql")
// cofig db
// connect to the db and then call the menu
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "employee_db"
});
//Opening connection 
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  menu();
});

function menu(){
/// inquirer for the menu intereacting with the user from the command line
inquirer
  .prompt([{
    type:"list",
    name:"choice",
    message: "what do you want to do?",
    choices:["add dep", "add role", "add emp", "view dep", "view role", "view emp","update emp"]

  }
    /* Pass your questions in here */
  ])
  .then(answers => {
    console.log(answers)
    // Use user feedback for... whatever!!

    // switch statement 

    addDep()
  })
}

// creating all the conection.query for the db (insert, select...)

function addDep(){
    // inquiere asking for the name
    // then I will insert the row on the department table
    inquirer.prompt({
      type:"input",
      message: "department name",
      name:"name"
    }).then(answers =>{

      console.log(answers)
      var query = connection.query(
        "INSERT INTO department SET ?",
        {
          name: answers.name,
         
        },
        function(err, res) {
          if (err) throw err;
          console.log(res.affectedRows + " dep inserted!\n");
        
         menu()
        }
      );

    })

}