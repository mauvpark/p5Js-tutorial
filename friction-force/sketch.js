let movers = [];
let mu = 0.1;

function setup() {
	createCanvas(400, 400);
	for (let i = 0; i < 10; i++) {
		movers[i] = new Mover(random(width), 200, random(1, 8));
	}
}

function draw() {
	background(0);

	for (let mover of movers) {
		// ? Euler's integration에 의해 중력값이 축적되므로 update() 상에서 중력에 0 값을 주어야 함
		if (mouseIsPressed) {
			let wind = createVector(0.1, 0);
			mover.applyForce(wind);
		}
		let gravity = createVector(0, 0.1);
		let weight = p5.Vector.mult(gravity, mover.mass);
		mover.applyForce(weight);
		mover.friction();
		mover.update();
		mover.edges();
		mover.show();
	}
}
