import css from './Contact.module.css';
import { IoMdPerson } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.contact}>
      <div className={css.contactInfo}>
        <p>
          <IoMdPerson className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
