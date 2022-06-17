let counter = 0;

function chooser() {
    let x_random=Math.random();
    let y_random=Math.random();

    let x;
    let y;

    counter = counter+1;

    if (x_random >= 0 || x_random >= 0.1){
        x=0
    }
    if (x_random >= 0.2 || x_random >= 0.3){
        x=1
    }
    if (x_random >= 0.4 || x_random >= 0.5){
        x=2
    }
    if (x_random >= 0.7 || x_random >= 0.6){
        x=3
    }
    if (x_random >= 0.8 || x_random >= 0.9){
        x=4
    }

    if (y_random >= 0 || y_random >= 0.1){
        y=0
    }
    if (y_random >= 0.2 || y_random >= 0.3){
        y=1
    }
    if (y_random >= 0.4 || y_random >= 0.5){
        y=2
    }
    if (y_random >= 0.6 || y_random >= 0.7){
        y=3
    }
    if (y_random >= 0.8 || y_random >= 0.9){
        y=4
    }

    document.getElementById("ball").style.gridRowStart=x;
    document.getElementById("ball").style.gridColumnStart=y;

    document.getElementById("2").innerHTML= "The Boring Game\
    Counter:" + counter.toString();
}
