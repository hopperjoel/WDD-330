
const asgUl = document.getElementById('asg-list');
const links = [
    {
        label: "Week2 notes",
        url: "studynotes.html"
    },
    {
        label: "Week2 Team Assignment",
        url: "week_2\\week2\\team1w2.html"
    },
    {
        label: "Week03 Quiz Ninja",
        url: "week3/js/w03-quiz-ninja.js"
    },
    {
        label: "Week03 Team Assignment",
        url: "week3/teamAssignment_W3.html"
    },
    {
        label: "Week04 Team Assignment",
        url: "week4/Week04Team/index.html"
    },
    {
        label: "Week04 Quiz Ninja",
        url: "week4/W04-QuizNinja/heroes.html"
    },
    {
        label: "Week05 Eloquent JavaScript Exercises",
        url: "week5/exercises/main.js"
    },
    {
        label: "Week05 Team Assignment",
        url: "week5/team_exercise/index.html"
    },
    {
        label: "Week06 ToDo App",
        url: "todo/test.js"
    },
    {
        label: "Week07 Quiz Ninja",
        url: "week7/quizNinja/main.js"
    },
    {
        label: "Week07 Team Assignment",
        url: "week7/week7Team/team1w7.html"
    },
    {
        label: "Midterm ToDo Project",
        url: "ToDo/todo.html"
    },
    {
        label: "Week08 Notes",
        url: "week8/Week 8 Notes.txt"
    },
    {
        label: "Week08 Team Assignment",
        url: "week8/week8 team assignment/teamAssignment.html"
    },
    {
        label: "Week09 Quiz Ninja",
        url: "week9/quizNinja/index.html"
    },
    {
        label: "Week09 Team Assignment",
        url: "week9/Week9 Team Assignment/index.html"
    },
    {
        label: "Week10 EarthQuake",
        url: "week10/earthquake watch/index.html"
    },
    {
        label: "Week10 Team Assignment",
        url: "week10/teamActivityW10/"
    },
    {
        label: "Week11 JSON-Server",
        url: "week11/client/week11.html"
    },
    {
        label: "Final Project - Macro Tracking App",
        url: "Final Project/index.html"
    },
    {
        label: "Final Project in Modules",
        url: "final-project-original/testindex.html"
    },

];
function makeAsgList() {
    asgUl.innerHTML = '';
    for (i = 0; i < links.length; ++i) {
        labelItem = document.createElement('li');
        urlItem = document.createElement('a');
        urlItem.textContent = links[i].label;
        urlItem.setAttribute('href', `${links[i].url}`);
        labelItem.appendChild(urlItem);
        asgUl.appendChild(labelItem);
    }
};

document.getElementById("asgButton").addEventListener("click", makeAsgList);

// for(const item of links){
//     console.log(item);
// }
