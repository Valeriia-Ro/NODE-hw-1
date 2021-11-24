const fs = require("fs").promises;
const path = require("path");
const shortId = require("shortid");

const contactsPath = path.resolve("./db/contacts.json");

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

async function getContactById(contactId) {
  const contacts = await listContacts();
  const gotContact = contacts.find(({ id }) => id === parseInt(contactId));
  if (!gotContact) {
    console.log("Can not find this contact");
    return;
  }
  console.log(contacts);
  return gotContact;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const removeContact = contacts.filter((contact) => contact.id === contactId);
  fs.writeFile(contactsPath, JSON.stringify(removeContact));
  console.table(removeContact);
  return removeContact;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = { id: shortId.generate(), name, email, phone };
  contacts.push(newContact);
  fs.writeFile(contactsPath, JSON.stringify(contacts));
  console.table(newContact);
  return newContact;
}

module.exports = {
  addContact,
  removeContact,
  getContactById,
  listContacts,
};
