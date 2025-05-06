var clicks = 0;
var eggClicks = 0;
var secretActive = false;

function movingImgsChange(){
    clicks = clicks + 1;

    const movingIcon = document.getElementById("icon");
    const stillIcon = document.getElementById("stillIcon");
    const navImg = document.getElementById("container");
    const egg = document.getElementById("easterEgg");

    if(clicks % 2 == 1){
        //Images become still
        movingIcon.style.display = 'none';
        egg.style.display = 'none';
        stillIcon.style.display = 'block';
        document.body.style.backgroundImage = 'url(imgs&vids/webBackgroundImg.png)';
        navImg.style.backgroundImage = 'url(imgs&vids/navBackgroundImg.png)';
    }else{
        //Images return to moving
        if(secretActive == true){
            egg.style.display = 'block';
            movingIcon.style.display = 'none';
        }else{
            egg.style.display = 'none';
            movingIcon.style.display = 'block';
        }
        stillIcon.style.display = 'none';
        document.body.style.backgroundImage = 'url(imgs&vids/webBackgroundGif.gif)';
        navImg.style.backgroundImage = 'url(imgs&vids/navBackgroundGif.gif)';
    }
};

function changeEasterEgg(){
    eggClicks = eggClicks + 1;

    const icon = document.getElementById("icon");
    const egg = document.getElementById("easterEgg");

    if(eggClicks % 2 == 1){
        //Reveal easter egg
        secretActive = true;
        egg.style.display = 'block';
        icon.style.display = 'none';
    }else{
        //Hides easter egg
        secretActive = false;
        egg.style.display = 'none';
        icon.style.display = 'block';
    }
}

//Change
function downloadImgChange(downloadImg, hover){
    if(hover == true){
        downloadImg.src = 'imgs&vids/downloadGif.gif';
    }
    else{
        downloadImg.src = 'imgs&vids/downloadImg.png';
    }
}
