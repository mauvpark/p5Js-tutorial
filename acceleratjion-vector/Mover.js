class Mover {
	constructor(x, y) {
		this.pos = createVector(x, y);
		this.vel = p5.Vector.random2D();
		this.vel.mult(random(3));
		// Force = Manitude * Acceleration
		// this.acc = p5.Vector.random2D();
		// this.acc.setMag(0.01);
	}

	update() {
		let mouse = createVector(mouseX, mouseY);
		this.acc = p5.Vector.sub(mouse, this.pos);
		this.acc.setMag(0.1);
		//this.acc = p5.Vector.random2D();
		//this.acc.setMag(0.01);
		this.vel.add(this.acc);

		// nomalize와 달리 Magnitude가 Limit보다 작을 경우 그대로 보여줌
		//this.vel.limit(2);
		this.pos.add(this.vel);
	}

	show() {
		stroke(255);
		strokeWeight(2);
		fill(255, 100);
		ellipse(this.pos.x, this.pos.y, 32);
	}
}
