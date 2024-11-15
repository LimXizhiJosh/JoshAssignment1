# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# References
Provide the references that you have used to support your assignment. 


File Structure


Josh_timetablingservice.js: code to manage the tutors (adding, updating, retrieving, and removing).


app.js: Demonstrates how to use the Josh_timetablingservice.js module to perform actions

Functions

addTutor()
getTutor()
getAllTutors()
updateTutor()
removeTutor()
getAllTutorsAU() 


addTutor()

- Add a new tutor with a name and a subject
Returns: The newly added tutor

function addTutor(name, subject) {
    const newTutor = { id: tutors.length + 1, name, subject };
    tutors.push(newTutor);
    return newTutor;
}


getTutor()

 - retrieve information for a tutor by theri ID

Returns: The tutor chosen specifically

function getTutor(tutorId) {
    const tutor = tutors.find(tutor => tutor.id === tutorId);
    if (!tutor) {
        throw new Error("Tutor not found");
    }
    return tutor;
}

getAllTutors()

 - retrieve all tutors

Returns: All tutors in databse

let allTutors = tutorModule.getAllTutors();

updateTutor()

- update a tutor name and subject , throw error if no such tutor exists

Returns: Update a specific tutor information

try {
    const updatedTutor = tutorModule.updateTutor(tutor1.id, "Alice Smith", "Advanced Mathematics");
    console.log("Updated tutor:", updatedTutor);
} catch (error) {
    console.error(error.message);
}



removeTutor()

- remove a tutor by ID

Returns: Remove a tutor from databse

try {
    tutorModule.removeTutor(tutor2.id);
    console.log("Tutor Bob removed.");
} catch (error) {
    console.error(error.message);
}

getAllTutorsAU()
    
- retrieve all tutors after updating

Returns: Retrieve all the new tutors after updating process

const updatedTutors = tutorModule.getAllTutors();