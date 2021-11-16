
import { useEffect, useState } from "react";
import '../dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faArrowAltCircleLeft, faArrowsAlt, faLongArrowAltLeft, faRocket } from '@fortawesome/free-solid-svg-icons';



const Dash = ()=>{

    const [data, setData] = useState([]);
    
    const CovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualdata = await res.json();
        setData(actualdata.statewise);
    }

    useEffect(()=>{
        CovidData();
    } , []);
    
    return(
        <div id='Dash'>
            <h1 className='Dashtitle'><span>India</span> Covid-19 DashBoard</h1>
            <div className='dashTable'>
                <table>
                    <thead className='table_head'>
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Death</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody className='table_body'>
                        {
                            data.map((Current, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{Current.state}</td>
                                        <td>{Current.confirmed}</td>
                                        <td>{Current.recovered}</td>
                                        <td>{Current.deaths}</td>
                                        <td>{Current.active}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )

}
export default Dash;