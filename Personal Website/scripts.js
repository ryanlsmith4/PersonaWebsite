var interval = setInterval(myTimer, 1500);
const arrayOfArticles = [
    "Place Holder, Medium Article",
    "Place Holder, Medium Article",
    "Demystifying publishing code to git hub for the amateur developer, https://medium.com/@ryan.l.smith4/demystifying-publishing-code-to-git-hub-for-the-amateur-developer-8bcb4a8b7925",
];

let i = 0;

function myTimer() {
    // var d = new Date();
    if (i < arrayOfArticles.length) {
        document.getElementById("medium-articles").innerHTML = arrayOfArticles[i];
        i++;
    } else {
        i = 0;
    }
}
