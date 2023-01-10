import { useState } from "react";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import Contact from "./Contact";

export default function ContactList() {
  const [contactsList, setContactsList] = useState([
    {
      id: 1, 
      firstname: 'Anthony',
      lastname: 'Moita'
    },
    {
      id: 2, 
      firstname: 'Martin',
      lastname: 'Pain'
    },
    {
      id: 3, 
      firstname: 'Camille',
      lastname: 'Oget'
    },
    {
      id: 4, 
      firstname: 'Juliette',
      lastname: 'Padou'
    },
    {
      id: 5, 
      firstname: 'Théo',
      lastname: 'Lemoine'
    }
  ]);

  return <>
    <div className="flex justify-between mb-4">
      <span className="font-bold text-slate-400">Contacts</span>
      <Badge bgColor='muted'>{contactsList.length}</Badge>
    </div>
    <Card>
      <ul>
        {contactsList.map(contact => {
          return <li className="mb-4"key={contact.id}>
            <Contact firstname={contact.firstname} lastname={contact.lastname} />
          </li>
        })}
      </ul>
    </Card>
  </>
}