

let userName = document.querySelector('.username');
let userNameAnswer = document.querySelector('.out');


function correctName() {
    let userNameCorrect = userName.value.substr(0, 1).toUpperCase() + userName.value.substr(1).toLowerCase();
    return userNameCorrect;

    let yesusername = document.querySelector('#yes');
    let nousername = document.querySelector('#no');

    if (yesusername.hasAttribute(checked)) {
        userNameAnswer.textContent = correctName();
    }

    if (nousername.hasAttribute(checked)) {
        userNameAnswer.textContent = 'username';
    }
}


function checkSpam() {
    let comment = document.querySelector('.comment').value;
    comment.indexOf('viagra');
    let commentCorrect = comment.replace(/viagra/i, "***");
    return commentCorrect;
}



function showComment() {

    let userNameAnswer = document.querySelector('.out');
    userNameAnswer.textContent = correctName();
    
    let avatar = document.querySelector('.avatar').value;
    let avatarAnswer = document.querySelector('.outavatar');
    avatarAnswer.setAttribute("src", avatar);
    avatarAnswer.textContent = avatar;

    let commentAnswer = document.querySelector('.commentanswer');
    commentAnswer.textContent = checkSpam();

    
    let date =  new Date();
    let showdate = document.querySelector('.time');
    showdate.textContent = date;

    
    
}






