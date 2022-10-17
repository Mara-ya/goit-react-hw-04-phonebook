import PropTypes from 'prop-types';
import { Contact } from "../Contact/Contact";

export const ContactList = ({filtered, onDelete}) => {
    return (
        <ul>
            {filtered.map(({ id, name, number }) => {
                return (
                    <li key = {id}>
                        <Contact contact={{id, name, number }} onDelete={onDelete}/>
                    </li>
                )
            })}
        </ul>
    )
}

ContactList.proptype = {
    filtered: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.isRequired
        })
    )
}