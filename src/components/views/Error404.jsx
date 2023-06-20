import { Button } from 'react-bootstrap';
import error from '../../assets/error404.jpg'
import { Link } from 'react-router-dom';
const Error404 = () => {
    return (
        <section className="mainSection text-center d-flex flex-column justify-content-center align-items-center">
            <img src={error} alt="error 404" className='imagen404'/>
            <div>
            <Link className="btn btn-dark" to={'/'}>Volver al inicio</Link>
            </div>
        </section>
    );
};

export default Error404;