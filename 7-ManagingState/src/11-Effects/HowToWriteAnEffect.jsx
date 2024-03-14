import DataText from "../TasksContext"
export default function HowToWriteAnEffect (lang) {

    return (
        <div className="my-12">
<div className="divider  text-primary divider-secondary">How to write an Effect </div>
 {lang.lang?( <>
    {DataText[24].HowToWriteAnEffect()}
  </>):(
<>
{DataText[25].HowToWriteAnEffectFa()}
</>
  )}
        </div>
    )
}