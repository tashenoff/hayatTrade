import contacts from '../../data/contacts.json';

export default function Contacts() {
  return (
    <div>
      <h1>Контакты</h1>
      <p>Телефон: {contacts.phone}</p>
      <p>Адрес: {contacts.address}</p>
      <a href={contacts.whatsapp}>Связаться с нами в WhatsApp</a>
    </div>
  );
}
