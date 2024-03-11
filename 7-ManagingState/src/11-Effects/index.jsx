import DataText from '../TasksContext'
export default function Effects(lang) {

    return (
<>
    
            {lang.lang?(
            <div className="">
                 {DataText[20].Effect()}
            </div>):(
               <>
                    
                    {DataText[21].EffectFa()}
               </>
            )}
            
</>
    );
}