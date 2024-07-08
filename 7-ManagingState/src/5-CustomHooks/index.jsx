import Container from '../utils/Container';
import DataText from './DataText'; 
import IsOnline from './isOnline';
export default function CustomHooks({lang}){

    return (
        <div>
            {lang ?
           <Container  Title="Reusing Logic with Custom Hooks" ColorDivider={`success`} ColorText={`warning text-pink-200`}>
           {DataText.ReusingLogicWithCustomHooks()}
            <IsOnline />
               {DataText.customHooks2()}
           </Container>
               : <Container  Title="استفاده از قطعی برای استفاده از Custom Hooks" ColorDivider={`success`} ColorText={`warning text-pink-200`}>
               {DataText.ReusingLogicWithCustomHooksFa()}
               <IsOnline />
               {DataText.customHooks2Fa()}
               </Container>
            }
           
              
        </div>
    )
}