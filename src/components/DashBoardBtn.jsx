import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine} from '@fortawesome/free-solid-svg-icons';

const DashBtn = () => {
    return (
        <div id  ="DashBtn">
            <a href="Dash"><FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon><span className = 'DashBtntxt'>Looking for Covid dashboard</span></a>
        </div>
    );
}

export default DashBtn;