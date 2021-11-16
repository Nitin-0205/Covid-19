import '../err.css';
import Error404 from '../img/Error404.gif'

const Error_Page = () => {
    return (
        <div className = 'Error_component'>
            <img src ={Error404} />
        </div>
    );
}

export default Error_Page;