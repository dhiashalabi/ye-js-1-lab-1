function ageGroupFinder(age) {
    if (age < 5) {
        return "Baby πΆπΌ";
    } else if (age < 13) {
        return "Child π¦πΌ";
    } else if (age < 18) {
        return "Teenager π¨πΌβπ";
    } else if (age < 26) {
        return "Young Adult π¨πΌβπ»";
    } else if (age < 61) {
        return "Adult π¨πΌβπ«";
    } else {
        return "Old π΄πΌ";
    }
}

const triggerFinder = () => {
    let age = document.getElementById("age").value;
    let result = ageGroupFinder(age);
    document.getElementById("result").innerHTML = `You are ${result}`;
}

document.getElementById("age").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        triggerFinder();
    }
});

document.getElementById("btn").addEventListener("click", function() {
    triggerFinder();
});
