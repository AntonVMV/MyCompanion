import { postRequest } from '../../store/thunk/mockApiThunk'
import { ContactForm } from './ContactForm'

const fields = {
  name: '',
  lastName: '',
  phone: '',
  email: '',
  adress: '',
  company: '',
}

export const CreateContact = () => {
  return <ContactForm item={fields} onSubmit={postRequest} />
}
