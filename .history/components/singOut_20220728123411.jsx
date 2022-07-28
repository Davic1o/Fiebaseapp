import firebaseAuth from '../firebase/firebase_auth';
import {Button} from 'reactstrap';

export default function ButtonSingOut() {
    const handleSingOut = async () => {
        //firebaseAuth.singOut();
    }    
    return <Button color='info' 
    outline style={{margin:'40px 10%', position: 'absolute', top: '0', right:'0'}} onClick={handleSingOut}>
    Cerrar sesion
</Button>
}