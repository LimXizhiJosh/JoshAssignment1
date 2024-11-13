// Import the timetablingservice module
const tutorModule = require('./Josh_timetablingservice');

// Add a new tutor
const tutor1 = tutorModule.addTutor("Alice", "Mathematics");
console.log("Tutor added :", tutor1);

// Add  tutor number 2
const tutor2 = tutorModule.addTutor("Bob", "Physics");
console.log("Tutor added:", tutor2);

//Add tutor number 3
const tutor3 = tutorModule.addTutor("Josh", "PE");
console.log("Tutor added :", tutor3);

// Get a tutor by ID
try {
    const specificTutor = tutorModule.getTutor(tutor1.id);
    console.log("Tutor retrieved:", specificTutor);
} catch (error) {
    console.error(error.message);
}

// Get all tutors
let allTutors = tutorModule.getAllTutors();
console.log("Total number of tutors: " , allTutors.length);

// Update a tutor's information
try {
    const updatedTutor = tutorModule.updateTutor(tutor1.id, "Alice Smith", "Advanced Mathematics");
    console.log("Updated tutor:", updatedTutor);
} catch (error) {
    console.error(error.message);
}

allTutors = tutorModule.getAllTutors();
console.log("Total number of tutors after updating:", allTutors);

// Remove a tutor by ID
try {
    tutorModule.removeTutor(tutor2.id);
    console.log("Tutor Bob removed.");
} catch (error) {
    console.error(error.message);
}

// Get all tutors after deletion to see if it removed
const updatedTutors = tutorModule.getAllTutors();
console.log("All tutors after deletion:", updatedTutors);
