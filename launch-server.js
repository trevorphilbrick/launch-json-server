const { exec } = require("child_process");

exec(
  "json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000",
  (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  }
);
