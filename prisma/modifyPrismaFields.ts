import * as fs from "fs";

function modifyFieldsToJSON(filePath: string) {
  const fileContent = fs.readFileSync(filePath, "utf8");

  const regex = /(\w+)\s+(\w+)\[\]/g;

  const updatedContent = fileContent.replace(regex, (match, fieldName) => {
    return `${fieldName} Json`;
  });

  fs.writeFileSync(filePath, updatedContent);
  console.log(`Fields from format arrays modified to JSON :${filePath}`);
}
const filePath = "./schema.prisma";

modifyFieldsToJSON(filePath);
