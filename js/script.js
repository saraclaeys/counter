let count = 0;
let countEl = document.getElementById("count");

function plus() {
    count++;
    countEl.value = count;
}

function minus() {
    if (count > 0) {
        count--;
        countEl.value = count;
    }
}