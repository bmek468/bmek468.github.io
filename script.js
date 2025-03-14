const works = {
    "task1": {
        "title": "Project 1",
        "url": "works/task1/index.html",
        "style": "background-color: rgb(255, 0, 0);"
    },
    "task2": {
        "title": "Project 2",
        "url": "works/task2/index.html",
        "style": "background-color: rgb(0, 168, 65);"
    },
    "task3": {
        "title": "Project 3",
        "url": "works/task3/index.html",
        "style": "background-color: rgb(0, 68, 255);"
    },
};

function loadProject(project) {
    const projectData = works[project];

    // Update iframe source
    const iframe = document.getElementById('project-frame');
    iframe.src = projectData.url;

    // Change the background color for each project
    document.body.style.backgroundColor = projectData.style;
}
