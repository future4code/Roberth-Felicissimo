import React, {useState, useEffect} from 'react'
import Buttonunlike from './Buttonunlike'
import './Cardprofile.css'
import axios from 'axios'


function Cardprofile() {
    
const [profile, setProfile] = useState({})
useEffect(() => {
    getProfile()
}, [])   
const getProfile = () =>{
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/roberth/person")
        .then( response => {
            setProfile(response.data.profile)
        })  
        .catch(err =>{
            alert(`Ocorreu um erro ${err.response.status}, atualize a página`)
        })
    }  

    return (
        <div className="profile">
            <div className="card-profile">
                <div className="profile.data">
                    <img className="profile-image" src={profile.photo} alt={profile.name} />
                    <h2>{`Nome: ${profile.name}`}</h2>
                    <h3>{`Idade: ${profile.age}`}</h3>
                    <p>{`Bio: ${profile.bio}`}</p>

                </div>
            <Buttonunlike id={profile.id}/>    
            </div>
            
        </div>
    )
}

export default Cardprofile
