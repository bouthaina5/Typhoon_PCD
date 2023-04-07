import React from "react";
import './Profile.css';


const Profile = ()=>{
    return(
        <div className="profile-container">
            <button className="profile-button">Lancer jeu</button>
            <button  className="profile-button"><a href="/addBanque">Ajouter une banque</a></button>
        </div>
    )
}

export default Profile;