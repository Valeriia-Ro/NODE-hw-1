const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.resolve("././db/contacts.json");
const listContacts = require("./listContacts");

async function removeContact(contactId) {
  const contacts = await listContacts();
  const updateContact = contacts.filter((contact) => contact.id !== contactId);
  fs.writeFile(contactsPath, JSON.stringify(updateContact));
  console.table(updateContact);
  return updateContact;
}

module.exports = removeContact;
