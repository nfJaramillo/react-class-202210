import './Home.scss';
import {DarkModeContext} from '../context/DarkModeContext';
import  {useContext} from 'react';

function Home() {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div className={darkMode ? `Home Home-dark` : `Home Home-light`}>
        </div>
    )
}

export default Home