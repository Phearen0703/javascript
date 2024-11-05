let tasks = [
    {
        title:"Learn Front End",
        body:"Learn Js",
        property:"normal"

    },
    {
        title:"Learn Back End",
        body:"Learn PHP",
        property:"importan"

    },
    {
        title:"Learn Laravel End",
        body:"Learn API",
        property:"blue"

    }
]
// --------------loop to access opject-------------
let placdisplay = document.getElementById("app");
for(task of tasks){
    placdisplay.innerHTML += `<div class="card ${task.property}">
            <h3>${task.title}</h3>
            <p>${task.body}</p>
        </div>`
}
