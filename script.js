function generateName() {
    let first = document.getElementById("firstName").value.trim();
    let middle = document.getElementById("middleName").value.trim();
    let last = document.getElementById("lastName").value.trim();

    if (first === "" || last === "") {
        document.getElementById("result").innerHTML =
            "⚠️ Please enter at least your first and last name.";
        return;
    }

    let fullName = `${first} ${middle} ${last}`.replace(/\s+/g, " ").trim();

    document.getElementById("result").innerHTML =
        `Your Full Name:<br><strong>${fullName}</strong>`;
}

function copyName() {
    let result = document.getElementById("result").innerText;

    if (result === "") {
        alert("Generate a name first.");
        return;
    }

    navigator.clipboard.writeText(result).then(() => {
        alert("Full name copied successfully!");
    });
}

function clearFields() {
    document.getElementById("firstName").value = "";
    document.getElementById("middleName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("result").innerHTML = "";
}