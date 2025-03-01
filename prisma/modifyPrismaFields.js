"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function modifyFieldsToJSON(filePath) {
    var fileContent = fs.readFileSync(filePath, "utf8");
    var regex = /(\w+)\s+(\w+)\[\]/g;
    var updatedContent = fileContent.replace(regex, function (match, fieldName) {
        return "".concat(fieldName, " Json");
    });
    fs.writeFileSync(filePath, updatedContent);
    console.log("Fields from format arrays modified to JSON :".concat(filePath));
}
var filePath = "./schema.prisma";
modifyFieldsToJSON(filePath);
