

let userName = document.querySelector('.username');
let yesusername = document.querySelector("#yes");
let nousername = document.querySelector("#no");

yesusername.addEventListener("click", () => {
    userName.style.display = "block";
    });

    nousername.addEventListener("click", () => {
    userName.style.display = "none";
    });


let userNameAnswer = document.querySelector('.out');

function correctName() {
    if (userName.value != "") {
        let userNameCorrect =
        userName.value.substr(0, 1).toUpperCase() +
        userName.value.substr(1).toLowerCase();
        
        return userNameCorrect;
        } 
        else {
        return "Username";
    }
    }


function checkSpam() {
    let comment = document.querySelector('.comment').value;
    comment.indexOf('viagra');
    let commentCorrect = comment.replace(/viagra/i, "***");
    return commentCorrect;
}

let avatar = document.querySelector('.avatar').value;
let avatarAnswer = document.querySelector('.outavatar');

function showRandomAvatar() {
    if (avatar.value != "") {
        avatarAnswer.setAttribute("src", avatar);
        
        return avatarAnswer;
    }
    
    else {
    let images = [
        './1.png',
        './2.png',
        './3.png',
        './4.png',
        './5.png',
        './6.png'

    ];

        avatarAnswer = () => {
        let randomNum = Math.floor(Math.random() * images.length);
        let chosenImage  = images[randomNum];
        avatarAnswer.src = chosenImage;
    
}
}
return avatarAnswer;
}


function showComment() {

    let userNameAnswer = document.querySelector('.out');
    userNameAnswer.textContent = correctName();

    let date =  new Date();
    let showdate = document.querySelector('.time');
    showdate.textContent = date;
    
    //avatarAnswer.setAttribute("src", avatar);
    avatarAnswer.textContent = showRandomAvatar();
    
    let commentAnswer = document.querySelector('.commentanswer');
    commentAnswer.textContent = checkSpam();

    
    

}






