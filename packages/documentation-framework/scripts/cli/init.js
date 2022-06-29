const fs = require("fs");
const fse = require("fs-extra");
const path = require("path");

function init({ name, scripts }) {
  const srcDir = path.join(__dirname, "../../templates/patternfly-docs");
  const destDir = path.join(process.cwd(), "/patternfly-docs");

  console.log(`Scaffolding patternfly-docs at ${destDir}`);

  // To copy a folder or file
  fse.copy(srcDir, destDir, function (err) {
    if (err) {
      console.error(err);
    } else {
      const nameLowerCaseHyphenated = name.toLowerCase().split(" ").join("-");
      fs.renameSync(
        path.join(destDir, "/content/extensions/extension"),
        path.join(destDir, `/content/extensions/${nameLowerCaseHyphenated}`)
      );

      if (scripts) {
        console.log(`Adding script targets to package.json`);
        const packageJson = require(path.join(process.cwd(), "/package.json"));
        if (!packageJson) {
          console.error(`No package.json found at ${process.cwd()}`);
          return;
        }
        if (!packageJson.scripts) {
          packageJson.scripts = {};
        }
        packageJson.scripts = {
          ...packageJson.scripts,
          "docs:develop": "pf-docs-framework start",
          "docs:build": "pf-docs-framework build all --output public",
          "docs:serve": "pf-docs-framework serve public --port 5000",
          "docs:screenshots":
            "pf-docs-framework screenshots --urlPrefix http://localhost:5000",
        };
        // console.log(packageJson);
        const jsonString = JSON.stringify(packageJson, null, 2);
        fs.writeFile("./package.json", jsonString, (err) => {
          if (err) {
            console.log("Error writing to package.json", err);
          }
        });
      }

      const filesToReplaceId = [
        path.join(destDir, `/content/extensions/${nameLowerCaseHyphenated}/design-guidelines/design-guidelines.md`),
        path.join(destDir, `/content/extensions/${nameLowerCaseHyphenated}/examples/basic.md`)
      ];
      filesToReplaceId.forEach(path => {
        fs.readFile(path, "utf-8", function (err, data) {
          if (err) throw err;
          var newValue = data.replace(/id: My extension/, `id: ${name}`);
          fs.writeFile(path, newValue, "utf-8", function (err, data) {
            if (err) throw err;
          });
        });
      });
    }
  });
}

module.exports = {
  init,
};
