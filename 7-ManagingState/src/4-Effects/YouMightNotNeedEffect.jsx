import DataText from "../TasksContext"
import Code from '../utils/Prism';
export default function YouMightNotNeedEffect(lang) { 
    
    return (
        <div >
        {lang.lang ? DataText[26].YouMightNotNeedEffect(): DataText[27].YouMightNotNeedEffectFa()}
        <h1 className="text-red-500 text-2xl m-4">Example :</h1>
         <Code widthIN="w-full"  language={"js"} code={`
  function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    let ignore = false;
    fetchResults(query, page).then(json => {
      if (!ignore) {
        setResults(json);
      }
    });
    return () => {
      ignore = true;
    };
  }, [query, page]);

  function handleNextPageClick() {
    setPage(page + 1);
  }
  // ...
}
            `}  />
<h1 className="text-red-500 text-2xl m-4"> Remove effect</h1>
  <Code widthIN="w-full"  language={"js"} code={`
 function SearchResults({ query }) {
  const [page, setPage] = useState(1);
  const params = new URLSearchParams({ query, page });
  const results = useData(/api/search?params});

  function handleNextPageClick() {
    setPage(page + 1);
  }
  // ...
}

function useData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        if (!ignore) {
          setData(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, [url]);
  return data;
}
 
            `}  />


        </div>
        )
 } // (first) => {second}