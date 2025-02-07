var _a;
// Adding event listener to the form submission
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Selecting input elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // Check if all elements are present
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        // Extracting values
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Creating the resume output HTML
        var resumeHTML = "\n            <h2>Resume</h2> \n            <p><strong>Name:</strong> ".concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        // Inserting the resume output
        var resumeOutputElement = document.getElementById('resume-output');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
        }
        else {
            console.error('Resume output element is missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
