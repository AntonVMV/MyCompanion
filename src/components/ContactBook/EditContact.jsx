import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ContactForm } from "./ContactForm";
import { putRequest } from "../../store/thunk/mockApiThunk";

export const EditContact = () => {
    const {id} = useParams();
    const { loading, contacts } = useSelector(store => store.contactsReducer);

    const getItem = () => {
        return contacts.find(item => item.id === id)
    }

    return (
        <ContactForm item={getItem} onSubmit={putRequest} loading={loading}/>
    )
}