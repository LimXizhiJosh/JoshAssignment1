// import timetablingservice.js
const tutorModule = require('./Josh_timetablingservice');

// adding new tutor
const tutor1 = tutorModule.addTutor("Alice", "Mathematics");
console.log("Tutor added :", tutor1);

// adding tutor no2
const tutor2 = tutorModule.addTutor("Bob", "Physics");
console.log("Tutor added:", tutor2);

//adding tutor no3
const tutor3 = tutorModule.addTutor("Josh", "PE");
console.log("Tutor added :", tutor3);

// Get a tutor by ID
try {
    const specificTutor = tutorModule.getTutor(tutor1.id);
    console.log("Tutor retrieved:", specificTutor);
} catch (error) {
    console.error(error.message);
}

// get all tutors
let allTutors = tutorModule.getAllTutors();
console.log("Total number of tutors: " , allTutors.length);

// updating tutor info
try {
    const updatedTutor = tutorModule.updateTutor(tutor1.id, "Alice Smith", "Advanced Mathematics");
    console.log("Updated tutor:", updatedTutor);
} catch (error) {
    console.error(error.message);
}

// 
allTutors = tutorModule.getAllTutors();
console.log("New updated tutors:", allTutors);

let getAllTutorsAU = tutorModule.getAllTutorsAU();
console.log("Total number of tutors: " , getAllTutorsAU.length);

// removing tutor
try {
    tutorModule.removeTutor(tutor2.id);
    console.log("Tutor removed.");
} catch (error) {
    console.error(error.message);
}

// Get the updated list of tutors after removng
const updatedTutors = tutorModule.getUpdatedTutors();
console.log("All tutors after deletion:", updatedTutors);  
