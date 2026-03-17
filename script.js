/* particles background */

particlesJS("particles-js",{

particles:{

number:{value:80},

size:{value:3},

color:{value:"#38bdf8"},

line_linked:{enable:true}

}

});


/* dark light toggle */

const toggle=document.getElementById("themeToggle")

toggle.onclick=()=>{

document.body.classList.toggle("light")

}


/* GitHub project loader */

const username="YOUR_GITHUB_USERNAME"

fetch(`https://api.github.com/users/${username}/repos`)

.then(res=>res.json())

.then(data=>{

const container=document.getElementById("projectContainer")

data.slice(0,6).forEach(repo=>{

container.innerHTML+=`

<div class="project-card">

<img src="https://source.unsplash.com/400x300/?technology">

<div class="project-info">

<h3>${repo.name}</h3>

<p>${repo.description || "No description"}</p>

<a href="${repo.html_url}" target="_blank">View Code</a>

</div>

</div>

`

})

})