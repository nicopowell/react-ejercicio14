import { Button } from 'react-bootstrap';
import error from '../../assets/error404.jpg'
const Error404 = () => {
    return (
        <section className="mainSection text-center d-flex flex-column justify-content-center align-items-center">
            <img src={error} alt="error 404" className='imagen404'/>
            <div>
            <Button variant='primary' >Volver al inicio</Button>

            </div>
        </section>
    );
};

export default Error404;