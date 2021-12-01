const listContacts = require("./listContacts");

async function getContactById(contactId) {
  const contacts = await listContacts();
  const gotContact = contacts.find(({ id }) => id === parseInt(contactId));
  if (!gotContact) {
    console.log("Can not find this contact");
    return;
  }
  console.log(gotContact);
  return gotContact;
}

module.exports = getContactById;
