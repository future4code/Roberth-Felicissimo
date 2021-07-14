import React, {useState} from 'react'
import './Buttonunlike.css'
import axios from "axios"


function Buttonunlike(props) {
    const [choose, setChoose] = useState(false)

    const handleClick = () =>{
        setChoose(!choose)
        choosePerson(props.id, choose)

    }
    const handleClickDeslike = () =>{
        choosePerson(props.id, choose)
    }

    const choosePerson = (profileId, match) =>{
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/roberth/choose-person"
        const body = {
            id: profileId,
            choice: match
        }

        axios
        .post(url, body)
        .then((res) => {
            console.log(res)
            setChoose(!choose)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }



    return (
        <div className="buttons">
            <button className="button-unlike">
                <i class="fas fa-frown" />
            </button>
            <button className="button-like" onClick={() => handleClick}>
                <i class="fas fa-grin-hearts" />
            </button>
        </div>
    )
}

export default Buttonunlike
