import React, {useState} from 'react'
import Buttonunlike from './Buttonunlike'
import './Cardprofile.css'
import axios from 'axios'


function Cardprofile() {
    
const [profile, setProfile] = useState({})

const getProfile = () => setProfile("")
    
const chooseProfile = () =>{
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/roberth")
        .then( response => {
            console.log(response)
        })  
        .catch(err =>{
            console.log(err)
        })
    }  

    return (
        <div className="profile">
            <div className="card-profile">
                <div>
                    {getProfile}
                </div>
                <Buttonunlike />
            </div>
        </div>
    )
}

export default Cardprofile
