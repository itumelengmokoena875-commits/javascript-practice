function getGrade(mark) {
    if (mark >=75) {
        return "Distinction";
    }
    else if (mark < 50) {
        return "Fail";
    }
    else { 
        return "Pass"}
}

function isEligible(mark, attendance) {
    if (mark >= 50 && attendance >= 80) {
        return "Eligible";
    }

    else {
        return "Not-Eligible"
    }
}
const students = [
    {name: "Itumeleng", mark:78, attendance: 80},
    {name: "Tshepo", mark:58, attendance: 79},
    {name: "Babalwa", mark:90, attendance: 85},
    {name: "Tshepo", mark:45, attendance: 87}
];

for (const student of students) {
    console.log(student.name, getGrade(student.mark), isEligible(student.mark, student.attendance));
}

const failed=[];

for (const student of students) {
    if (getGrade(student.mark) === "Fail") {
    failed.push(student.name)
    }
}

console.log(failed);