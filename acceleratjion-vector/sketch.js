let mover;

function setup() {
	createCanvas(400, 400);
	mover = new Mover(200, 200);
	background(0);
}

function draw() {
	mover.update();
	mover.show();
}
