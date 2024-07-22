import Container from '../utils/Container';
import DataText from './DataText'; 
import IsOnline from './isOnline';
import CustomHookInput from './useForm/index';
import ChatRoom from './ChatRoom/index';
export default function CustomHooks({lang}){

    return (
        <div>
            {lang ?
           <Container  Title="Reusing Logic with Custom Hooks" ColorDivider={`success`} ColorText={`warning text-pink-200`}>
           {DataText.ReusingLogicWithCustomHooks()}
            <IsOnline />
               {DataText.customHooks2()}
               <CustomHookInput/>
           </Container>
               : <Container  Title="استفاده از قطعی برای استفاده از Custom Hooks" ColorDivider={`success`} ColorText={`warning text-pink-200`}>
               {DataText.ReusingLogicWithCustomHooksFa()}
               <IsOnline />
               {DataText.customHooks2Fa()}
                 <CustomHookInput/>
               </Container>

            } {lang ? <Container Title="Passing reactive values between Hooks" ColorDivider={`success`} ColorText={`warning text-pink-200`}>
                {DataText.PassingReactiveValuesBetweenHooks()}
                <ChatRoom/>
                </Container> 
                : <Container Title="ارائه ورودی با استفاده از Custom Hooks" ColorDivider={`success`} ColorText={`warning text-pink-200`}>
                    {DataText.PassingReactiveValuesBetweenHooksFa()}
                    <ChatRoom/>
                </Container> }

           
              
        </div>
    )
}