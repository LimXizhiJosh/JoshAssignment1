let tutors = [{ 'id': 1, 'name' : "josh", 'subject' : "maths" }];

// Add a new tutor to the database
function addTutor(name, subject) {
    const newTutor = { id: tutors.length + 1, name, subject };
    tutors.push(newTutor);
    return newTutor;
}

// Get a specific tutor by ID
function getTutor(tutorId) {
    const tutor = tutors.find(tutor => tutor.id === tutorId);
    if (!tutor) {
        throw new Error("Tutor not found");
    }
    return tutor;
}

// Function C: Gets all tutors from the database
function getAllTutors() {

    return tutors;
}

// Update a tutor's information
function updateTutor(tutorId, newName, newSubject) {
    const tutor = tutors.find(tutor => tutor.id === tutorId);
    if (!tutor) {
        throw new Error("Tutor not found");
    }
    tutor.name = newName;
    tutor.subject = newSubject;
    return tutor;
}

function getAllTutors() {

    return tutors;
}

// Remove a tutor by ID
function removeTutor(tutorId) {
    const initialLength = tutors.length;
    tutors = tutors.filter(tutor => tutor.id !== tutorId);
    if (tutors.length === initialLength) {
        throw new Error("Tutor not found");
    }
}

module.exports = {
    addTutor,
    getTutor,
    getAllTutors,
    updateTutor,
    getAllTutors,
    removeTutor
};
