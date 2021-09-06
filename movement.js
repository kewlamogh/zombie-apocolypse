async function move() {
    if ("w" in keyspressed) {
        moveThreePixels('y', -1)
    }
    if ("r" in keyspressed && reloadData._inCurrentClip != reloadData._clip) {
        reload();
    } 
    if ("s" in keyspressed) {
        moveThreePixels('y', 1);
    }
    if ("a" in keyspressed) {
        moveThreePixels('x', -1);
    }
    if ("d" in keyspressed) {
        moveThreePixels('x', 1);
    }
    if ('z' in keyspressed) {
        objects.push({
            "x": mouseX,
            "y": mouseY
        });
    }
}

document.onkeydown = (e) => {keyspressed[e.key] = true};
document.onkeyup = (e) => {delete keyspressed[e.key]};

window.onkeypress = (e) => {
    if (e.key == "q" && hammerOfLight) {
        for (var zomb of zombs) {
            zomb.x -= zomb.x / 30;
            zomb.y -= zomb.y / 30;
        }
    }
}