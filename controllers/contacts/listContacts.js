const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("././db/contacts.json");
const listContacts = async () => {
  try {
    const contactInfo = await fs.readFile(contactsPath, "utf8");
    const allContacts = JSON.parse(contactInfo);
    console.table(allContacts);
    return allContacts;
  } catch (err) {
    console.log(err);
  }
};

module.exports = listContacts;
