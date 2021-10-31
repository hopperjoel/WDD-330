
function makeAsgList() {
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
    ];
    const asgUl = document.getElementById('asg-list');

    for (i = 0; i < links.length; ++i) {
        labelItem = document.createElement('li');
        urlItem = document.createElement('a');
        urlItem.textContent = links[i].label;
        urlItem.setAttribute('href', `${links[i].url}`);
        labelItem.appendChild(urlItem);
        document.getElementById('asg-list').appendChild(labelItem);
    }
};


document.getElementById("asgButton").addEventListener("click", makeAsgList);

// for(const item of links){
//     console.log(item);
// }
