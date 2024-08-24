import { Form , useLoaderData } from "react-router-dom";
import { getContact } from '../contacts';
export async function loader({params}){
  const contact = await getContact(params.contactId);
  return(contact)
}
export default function Contact() {
  const dataContact = useLoaderData() 
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://robohash.org/you.png?size=200x200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div className="card card-side bg-white shadow-lg " id="contact">
      <div>
       <figure>
          <img
            key={contact.avatar}
            src={
              contact.avatar ||
              `https://robohash.org/${contact.id}.png?size=200x200`
            }
          />
       </figure>
      </div>

      <div className="card-body">
        <h1 className="text-success">
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <div>
            <a
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </div>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div className="flex gap-1">
          <Form action="edit">
            <button className="btn btn-success" type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button className="btn btn-secondary" type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  const favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}