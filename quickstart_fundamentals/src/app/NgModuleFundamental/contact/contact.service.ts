import { Injectable } from '@angular/core';

export class Contact {
  constructor(public id: number, public name: string) { }
}

const CONTACTS: Contact[] = [
  new Contact(21, 'Max Mustermann'),
  new Contact(22, 'Thomas Test'),
  new Contact(23, 'Peter Probe')
];

const FETCH_LATENCY = 500;

@Injectable()
export class ContactService {

  getContacts() {
    return new Promise<Contact[]>(resolve => {
      setTimeout(() => { resolve(CONTACTS); }, FETCH_LATENCY);
    });
  }

  getContact(id: number | string) {
    return this.getContacts()
    .then(contacts => contacts.find(contact => contact.id === +id));
  }
}
