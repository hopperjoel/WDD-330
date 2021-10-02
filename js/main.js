
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
            url: "week3/"
        },
        {
            label: "Week03 Team Assignment",
            url: "week3/teamAssignment_W3.html"
        }
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