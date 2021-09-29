class Walker {
	constructor(x, y) {
		this.pos = createVector(x, y);
		this.vel = createVector(1, -1);
		//this.vel = p5.Vector.random2D();
		//this.vel.mult(random(3));
	}

	update() {
		//this.pos.add(this.vel);
		this.pos.x = this.pos.x + random(-10, 10);
		this.pos.y = this.pos.y + random(-10, 10);
	}

	show() {
		stroke(255);
		strokeWeight(2);
		fill(255, 100);
		ellipse(this.pos.x, this.pos.y, 5);
		//point(this.pos.x, this.pos.y);
	}
}
