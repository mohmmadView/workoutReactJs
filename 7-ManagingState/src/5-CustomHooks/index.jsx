import Container from '../utils/container';
import DataText from './DataText'; 
export default function CustomHooks(){

    return (
        <div>
           <Container  Title="Reusing Logic with Custom Hooks" ColorDivider={`success`} ColorText={`warning text-pink-200`}>
           {DataText.ReusingLogicWithCustomHooks()}

           </Container>
        </div>
    )
}