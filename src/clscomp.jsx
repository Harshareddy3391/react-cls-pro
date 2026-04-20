import React from "react";

class Clscomponet extends React.Component{
     name="durander"
     image="https://imgs.search.brave.com/WVZLv9_iBhc0SBuhPltfiGgRFV2NIYIa-ffbe4dhCIA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YTUuYm9sbHl3b29k/aHVuZ2FtYS5pbi93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNi8w/NC9EaHVyYW5kaGFy/LVRoZS1SZXZlbmcx/LTMtMzIyeDMyMi5q/cGc"

     render(){
        return <div>
            <h2>Movi name : {this.name}</h2>
            <img src={this.image}/>
        </div>
     }

}


export default Clscomponet;