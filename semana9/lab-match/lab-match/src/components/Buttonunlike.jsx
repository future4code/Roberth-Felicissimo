import React from 'react'
import './Buttonunlike.css'


function Buttonunlike() {
    return (
        <div className="buttons">
            <button className="button-unlike">
                <i class="fas fa-frown" />
            </button>
            <button className="button-like">
                <i class="fas fa-grin-hearts" />
            </button>
        </div>
    )
}

export default Buttonunlike
