import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

function Home() {
  return (
    <div>
        <div className = "show_map">
            <img className="entire_map" src="img/sea.svg" />
        </div>
        <AddIcon sx = {{fontSize: 60, color: '#ffffff'}} className ="main_add_icon"/>
    </div>
  )
}

export default Home;