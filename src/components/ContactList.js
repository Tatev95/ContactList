const ContactListItem = ({id, name, surname, phone, onRemove}) => {
    return (
        <li>
           <b>{name} {surname}:</b>  {phone} <button onClick={() => onRemove(id)}>delete</button>
        </li>
    )
}

const ContactsList = ({ contacts, onRemove,getContacts }) => {
    return (
        <ul>
            {contacts.map((contact) => (
                <ContactListItem {...contact} onRemove={onRemove} key={contact.id}/>
            ))}
        </ul>
    )
}

export default ContactsList
