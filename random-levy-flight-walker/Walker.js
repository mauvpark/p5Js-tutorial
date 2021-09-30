class Walker {
	constructor(x, y) {
		this.pos = createVector(x, y);
		this.vel = createVector(1, -1);
		//this.vel = p5.Vector.random2D();
		//this.vel.mult(random(3));
		// ? Copy() makes new vector for making line between prev and present
		this.prev = this.pos.copy();
	}

	update() {
		//this.pos.add(this.vel);
		//this.pos.x = this.pos.x + random(-10, 10);
		//this.pos.y = this.pos.y + random(-10, 10);
	}

	show() {
		stroke(255, 50, 213);
		strokeWeight(2);
		//fill(255, 100);
		//ellipse(this.pos.x, this.pos.y, 5);
		//point(this.pos.x, this.pos.y);
		line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
		// ? To set value into an instance which is copied
		this.prev.set(this.pos);

		let step = p5.Vector.random2D();

		// ? Fire this when of an 1% probability.
		let r = random(100);
		if (r < 1) {
			step.mult(random(25, 100));
		} else {
			step.setMag(2);
		}

		this.pos.add(step);
	}
}
