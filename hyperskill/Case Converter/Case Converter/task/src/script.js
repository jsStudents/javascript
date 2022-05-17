document.getElementById("upper-case").addEventListener("click", function() {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.toUpperCase();
});
document.getElementById("lower-case").addEventListener("click", function() {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.toLowerCase();
});
document.getElementById("proper-case").addEventListener("click", function() {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.split(" ").map(function (text){
        return text[0].toUpperCase() + text.substring(1).toLowerCase();
    }).join(" ");
});
document.getElementById("sentence-case").addEventListener("click", function() {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.split(". ").map(function (text){
        return text[0].toUpperCase() + text.substring(1).toLowerCase();
    }).join(". ");
});
