const INCREASE_NUMBER_ANIMATION_SPEED = 500;

function increaseNumberAnimationStep (i, element, endNumber) {
    if (i <= endNumber) {
      if (i === endNumber) {
        element.innerText = i + '+';
        //console.log('Элемент = '+i+"+");
      } else {
        element.innerText = i;
        //console.log('Элемент = '+i);
      }  
      i+=100;
      setTimeout(increaseNumberAnimationStep(i, element, endNumber), INCREASE_NUMBER_ANIMATION_SPEED)
   }
}


function initIncreaseNumberAnimation() {
    let element = document.querySelector(".features__clients-count");
    //console.log('Элемент = '+element.innerText);
    increaseNumberAnimationStep(0, element, 5000);
}

initIncreaseNumberAnimation();