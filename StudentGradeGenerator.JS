function getStudentGrade() {
    let marks = parseFloat(prompt("Enter student marks (0-100):"));

    if (isNaN(marks) || marks < 0 || marks > 100) {
        return("Invalid input. Please enter a number between 0 and 100.");
    }

    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    return(`The student's grade is: ${grade}`);
}
