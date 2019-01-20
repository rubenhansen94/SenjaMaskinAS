function copyPhone() {
    var range = document.createRange();
    range.selectNode(document.querySelector(".--phone"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
}
function copyMail() {
    var range = document.createRange();
    range.selectNode(document.querySelector(".--mail"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
}

function checkWidth() {
    if (document.body.clientWidth <= 640) {
        alertify.set('notifier','position', 'bottom-center');
    } else if (document.body.clientWidth >= 640){
        alertify.set('notifier','position', 'bottom-right');
    }
}