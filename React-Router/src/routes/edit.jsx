import {Form,
        useLoaderData,
        redirect} from 'react-router-dom'
        import {updateContact} from '../contacts'
export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}
export default function EditContact() {
    const  contact  = useLoaderData();
      {console.log('Contact/edit ===============================');
console.log(contact);
console.log('====================================');}
return (
    <Form className='flex flex-col gap-4' method="post" id="contact-form">
    <div className='flex  justify-center gap-4'>
      <span className='self-center w-2/6 mr-6'>Name :</span>
      <input
      className='input input-primary'
        placeholder="First"
        aria-label="First name"
        type="text"
        name="first"
        defaultValue={contact?.first}
      />
      <input
       className='input input-primary'
        placeholder="Last"
        aria-label="Last name"
        type="text"
        name="last"
        defaultValue={contact?.last}
      />
    </div>
    <div >
        <span className='self-center mr-6'>Twitter :</span>
        <input
        className='input input-primary'
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact?.twitter}
        />
    </div>
      <label>
        <span className='mr-2'>Avatar URL :</span>
        <input
        className='input input-primary'
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact?.avatar}
        />
      </label>
    <label>
      <span >Notes :</span>
      <textarea
      className='w-full  textarea textarea-primary'
        name="notes"
        defaultValue={contact?.notes}
        rows={6}
      />
    </label>
     <input
        className='input input-primary'
          placeholder="game"
          type="text"
          name="game"
          defaultValue={contact?.game}
        />
    <div className='flex justify-center gap-5'>
      <button className='btn btn-success' type="submit">Save</button>
      <button className='btn  btn-error' type="submit">Cancel</button>
    </div>
  </Form>
)
}
