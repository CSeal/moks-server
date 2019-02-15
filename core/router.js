const path = require('path');
const fs = require('fs');

function setRoutes(controllerDirPath){
  if(fs.existsSync(controllerDirPath)){
    const ctrlNameRegExp = /^ctrl_.*/;
    const cotrollersFileName = fs.readdirSync(controllerDirPath);
    cotrollersFileName.forEach((controller) => {
      if(ctrlNameRegExp.test(controller)){
        const controllersInstanse = require(path.join(controllerDirPath, controller));
        controllersInstanse.initController(controller);
      }
    });
    return true;
  }
  return false;
}

module.exports = setRoutes;