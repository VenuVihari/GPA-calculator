function checkMinValue() {
    
    let num = document.getElementById("num");
    if (num.value < 1) {
        num.value = '';
    }
}
function check(){
    let num = document.getElementsByClassName("credit");
    if (num.value < 1) {
        num.value = '';
    }
}
function checkmin(){
    let num = document.getElementsByClassName("grade");
    if (num.value < 0) {
        num.value = '';
    }
}
function getcg() {
    let n = document.getElementById("num").value;
    let crgr = document.getElementById("cgs");
    crgr.innerHTML = '';

    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            let credits = document.createElement("label");
            credits.innerHTML = "Credits of course " + i;
            let c = document.createElement("input");
            c.type = "number";
            c.id = "credit" + i;
            c.classList.add("credit");
            c.min="1";
            c.oninput="check()";
            let grades = document.createElement("label");
            grades.innerHTML = "Grade in course " + i;
            let g = document.createElement("input");
            g.type = "number";
            g.id = "grade" + i;
            g.classList.add("grade");
            g.min="0";
            g.oninput="checkmin()";
            let br = document.createElement("br");
            crgr.appendChild(credits);
            crgr.appendChild(c);
            crgr.appendChild(grades);
            crgr.appendChild(g);
            crgr.appendChild(br);
        }

        let submit = document.createElement("button");
        submit.type = "button";
        submit.innerHTML = "Calculate GPA";
        submit.id="cgpa";
        submit.addEventListener("click", getgpa);
        crgr.appendChild(submit);

        function getgpa() {
            let totalg = 0;
            let totalc = 0;
            let n = document.getElementById("num").value;
            for (let i = 1; i <= n; i++) {
                let currentc = document.getElementById("credit" + i).value;
                let currentg = document.getElementById("grade" + i).value;
                currentc = Number(currentc);
                currentg = Number(currentg);
                totalg = totalg + currentc * currentg;
                totalc = totalc + currentc;
            }
            let gpa = totalg / totalc;
            let gpadiv = document.createElement("div");
            let pgpa = document.getElementById("gpar");
            if (pgpa) {
                pgpa.remove();
            }

            gpadiv.textContent = "Your GPA is: " + gpa.toFixed(2);
            gpadiv.id = "gpar";
            crgr.appendChild(gpadiv);
        }
    }
}
