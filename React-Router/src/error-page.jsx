import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-screen h-screen flex justify-center items-center" id="error-page">
     <div className="bg-base-300/50 p-12 text-2xl bg-warning-content text-warning ">
        <h1 >Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
     </div>
    </div>
  );
}