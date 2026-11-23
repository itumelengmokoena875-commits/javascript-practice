function getGrade(mark) {
    if (mark >=75) {
        return "Distinction";
    }
    else if (mark < 50) {
        return "Fail";
    }
    else { 
        return "Pass"
    }
}

const markinput = document.querySelector("#markInput");
const checkBtn = document.querySelector("#checkBtn");
const result = document.querySelector("#results");

checkBtn.addEventListener("click", function() {
    const mark = Number(markInput.value);
    const grade = getGrade(mark);

    const item = document.createElement("li");
    item.textContent = `${mark}: ${grade}`;

    if (grade === "Fail") {
        item.style.color = "red";
    }
    else {
        item.style.color = "green";
    }

    results.appendChild(item);
    markInput.value ="";
})