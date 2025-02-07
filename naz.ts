// Adding event listener to the form submission
document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Selecting input elements
    const nameElement = document.getElementById('name') as HTMLInputElement
    const emailElement = document.getElementById('email') as HTMLInputElement
    const phoneElement = document.getElementById('phone') as HTMLInputElement
    const educationElement = document.getElementById('education') as HTMLInputElement
    const experienceElement = document.getElementById('experience') as HTMLInputElement
    const skillsElement = document.getElementById('skills') as HTMLInputElement

    // Check if all elements are present
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        // Extracting values
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Creating the resume output HTML
        const resumeHTML = `
            <h2>Resume</h2> 
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Inserting the resume output
        const resumeOutputElement = document.getElementById('resume-output');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
        } else {
            console.error('Resume output element is missing');
        }
    } else {
        console.error('One or more input elements are missing');
    }
});
