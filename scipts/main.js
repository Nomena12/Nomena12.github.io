let myImage = document.querySelector('img');
myImage.addEventListener('click',function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/sarysoe.jpg') {myImage.setAttribute('src','images/sarygroupe.jpg');
        
    } else {myImage.setAttribute('src','images/sarysoe.jpg');
        
    }
});