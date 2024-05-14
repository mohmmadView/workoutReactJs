export default function  LangBtn({lang, setLang}){

    (
<div className="z-50 flex flex-col gap-2 p-2  fixed top-5 right-5 bg-primary-content ring-8 ring-primary  ring-offset-2 rounded-xl ">
        <button
          className={` btn btn-circle btn-outline mx-2 font-bold ${lang?`btn-primary `:`btn-success btn-active`}`}
          onClick={() => {
            setLang(false);
          }}>
          fa
        </button>
        <button
          className={` btn btn-circle btn-outline mx-2 font-bold ${lang?` btn-active btn-success`:`btn-primary`}`}
          onClick={() => {
            setLang(true);
          }}>
          En
        </button>
      </div>
      )
}