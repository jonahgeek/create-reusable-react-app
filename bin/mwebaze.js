#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const { exec } = require("child_process");

const scripts = `"start": "react-scripts start",
"build": "react-scripts build",
"eject": "react-scripts eject", "test"`;

function install(modules, callback) {
  if (modules.length == 0) {
    if (callback) callback(null);
    return;
  }
  var module = modules.shift();
  exec(`cd ${process.argv[2]} && npm install ${module}`, {}, function (
    error,
    stdout,
    stderr
  ) {
    // process.stdout.write(stdout + "\n");
    // process.stderr.write(stderr + "\n");
    console.log("Installing dependencies...");
    if (error !== null) {
      if (callback) callback(error);
    } else {
      install(modules, callback);
    }
  });
}
console.log("Initializing project");

exec(
  `mkdir ${process.argv[2]} && cd ${process.argv[2]} && npm init -f`,
  (initErr) => {
    if (initErr) {
      console.error(`Everything was fine, then it wasn't: ${initErr}`);
      return;
    }

    const packageJSON = `${process.argv[2]}/package.json`;
    fs.readFile(packageJSON, (err, file) => {
      // if (err) throw err;
      const data = file.toString().replace('"test"', scripts);
      fs.writeFile(packageJSON, data, (err2) => err2 || true);
    });
    const filesToCopy = ["README.md"];

    for (let i = 0; i < filesToCopy.length; i += 1) {
      fs.createReadStream(path.join(__dirname, `../${filesToCopy[i]}`)).pipe(
        fs.createWriteStream(`${process.argv[2]}/${filesToCopy[i]}`)
      );
    }
    console.log("npm init -- done\n");
    // installing dependencies
    // installDepsDev(["react-scripts"]);
    install(["react", "react-dom", "react-scripts", "styled-components"]);

    // console.log("Copying additional files..");
    // copy additional source files
    fs.copy(path.join(__dirname, "../src"), `${process.argv[2]}/src`);
    fs.copy(path.join(__dirname, "../public"), `${process.argv[2]}/public`)
      .then(() =>
        console.log(
          "\x1b[32m",
          "The creator of create-reusable-react-app is looking for a job",
          "\x1b[37m"
        )
      )
      .catch((err) => console.error(err));
  }
);
