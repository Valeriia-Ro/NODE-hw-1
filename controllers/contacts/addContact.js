const fs = require("fs").promises;
const path = require("path");
const shortId = require("shortid");

const contactsPath = path.resolve("././db/contacts.json");

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = { id: shortId.generate(), name, email, phone };
  contacts.push(newContact);
  fs.writeFile(contactsPath, JSON.stringify(contacts));
  console.table(contacts);
  return newContact;
}
module.exports = addContact;
