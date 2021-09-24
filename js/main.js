const links = {
    week2: {
        label: "Week2 notes",
        url: "studynotes.html"
    },
    week3: {}
};

function assignmentUpdate(links) {
    const assignmentUl = document.getElementById("assignment-list");
    for (let i = 0; i < links.length; i ++) {
        
        let listAssignment = assignmentUl.innerHTML(`<li>${links[i].label}`)
    } 
}

function testAssignments(links) {
    const 
    for (const key of Object.keys(links)) {
        console.log(`${key} => ${links[key]}`);
    }
}
