import { 
   Outlet ,
   Link ,
   useLoaderData ,
   Form} from "react-router-dom";
import { getContacts, createContact } from "../contacts";
import LogoReactRouter from "./../assets/react-router-mark-color.svg"
export async function action() {
  const contact = await createContact();
  return { contact };
}

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}
export default function Root() {
// location.reload()
    const { contacts } = useLoaderData();
    

    return (
      <div className="flex">
        <div className="w-2/6 h-screen drawer  bg-slate-500 lg:drawer-open" id="sidebar">
          
          <div className="drawer-content flex flex-col items-center   ">
              <div className="w-full bg-base-100/40 my-4">
                <h1 className="text-2xl text-red-500 text-center  p-2 rounded-lg font-semibold">React Router Contacts</h1>
              </div>
            <div>
              <form id="search-form" role="search">
                <input
                  id="q"
                  className="input input-primary"
                  aria-label="Search contacts"
                  placeholder="Search"
                  type="search"
                  onChange={() => {console.log(loader(contacts.id));}}
                  name="q"
                />
                <div
                  id="search-spinner"
                  aria-hidden
                  hidden={true}
                />
                <div
                  className="sr-only"
                  aria-live="polite"
                ></div>
              </form>
              <Form  className="flex justify-center my-2" method="post">
                <button className="btn btn-block " type="submit">New</button>
              </Form>
            </div>
            <nav>
            {contacts.length ? (
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    <Link to={`contacts/${contact.id}`}>
                      {contact.first || contact.last ? (
                        <>
                          {contact.first} {contact.last} 
                        </>
                      ) : (
                        <i>{contact.first}</i>
                      )}{" "}
                      {contact.favorite && <span>★</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No contacts</i>
              </p>
            )}
            </nav>
            <div className="w-full h-14 flex justify-center items-center bg-base-100/50 mt-5"> <img className="w-2/12" src={LogoReactRouter}></img></div>
          </div>
          </div>
        <div className="mx-auto my-auto" id="detail">
          <Outlet />
        </div>
      </div>
    );
  }