import api from "../services/api";

const ContactItem = ({ contact, onDelete }) => {
  const handleDelete = async () => {
    await api.delete(`/contacts/${contact._id}`);
    console.log("Contact deleted:", contact);
    onDelete();
  };

  return (
    <li className="contact-item">
      <div className="contact-info">
        <p className="contact-name">{contact.name}</p>
        <p className="contact-meta">
          {contact.email} | {contact.phone}
        </p>
      </div>

      <button className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
