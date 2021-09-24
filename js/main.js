
function makeAsgList() {
    const links = [
        {
            label: "Week2 notes",
            url: "studynotes.html"
        },
        {
            label: "Week2 Team Assignment",
            url: "/week_2/week2/team1w2.html"
        }
    ];
    const asgUl = document.getElementById('asg-list');

    for (i = 0; i < links.length; ++i) {
        let labelItem = document.createElement('li');
        labelItem.textContent = links[i].label;
        let urlItem = document.createElement('a');
        urlItem.setAttribute('src', links[i].url);
        labelItem.appendChild(urlItem);
        document.getElementById('asg-list').appendChild(labelItem);
    }
};

makeAsgList();

