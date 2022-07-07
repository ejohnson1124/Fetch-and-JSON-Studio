window.addEventListener('load', function(){
    const form = document.getElementById
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            console.log(json);
            const div = document.getElementById("container");
            for (const element of json){
            div.innerHTML += `
            <div class="astronaut">
            <div class="bio">
                <h3>Name: ${element.firstName} ${element.lastName}</h3>
                <ul>
                    <li>Hours in space: ${element.hoursInSpace}</li>
                    <li>Active: ${element.active}</li>
                    <li>Skills: ${element.skills}</li>
                        </ul>
            </div>
            <img class="avatar" src=${element.picture}>
            </div>
        
            `
            }
        }); 
    });
});