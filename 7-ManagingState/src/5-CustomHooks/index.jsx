import Container from '../utils/Container';
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