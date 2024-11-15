let tutors = []; //empty tutor table, going to add in belw

// Function A: adding a new tutor to the database
function addTutor(name, subject) {
    const newTutor = { id: tutors.length + 1, name, subject };
    tutors.push(newTutor);
    return newTutor;
}

// Function B: getting a specific tutor by ID
function getTutor(tutorId) {
    const tutor = tutors.find(tutor => tutor.id === tutorId);
    if (!tutor) {
        throw new Error("Tutor not found");
    }
    return tutor;
}

// Function C: getting all the tutors 
function getAllTutors() {

    return tutors;
}

// updating one tutor information
function updateTutor(tutorId, newName, newSubject) {
    const tutor = tutors.find(tutor => tutor.id === tutorId);
    if (!tutor) {
        throw new Error("Tutor not found");
    }
    tutor.name = newName;
    tutor.subject = newSubject;
    return tutor;
}



function getAllTutorsAU() {

    return tutors;
}
// remove a tutor by ID
function removeTutor(tutorId) {
    const initialLength = tutors.length;
    tutors = tutors.filter(tutor => tutor.id !== tutorId);
    if (tutors.length === initialLength) {
        throw new Error("Tutor not found");
    }
}

// get  updated list of tutors

function getUpdatedTutors() {
    return tutors; 
}

module.exports = {
    addTutor,
    getTutor,
    getAllTutors,
    updateTutor,
    getAllTutors,
    getAllTutorsAU,
    removeTutor,
    getUpdatedTutors
};
