let mover;

function setup() {
	createCanvas(400, 400);
	mover = new Mover(200, 200);
}

function draw() {
	background(0);

	// ? Euler's integration에 의해 중력값이 축적되므로 update() 상에서 중력에 0 값을 주어야 함
	if (mouseIsPressed) {
		let wind = createVector(1, 0);
		mover.applyForce(wind);
	}
	let gravity = createVector(0, 1);
	mover.applyForce(gravity);

	mover.update();
	mover.edges();
	mover.show();
}
