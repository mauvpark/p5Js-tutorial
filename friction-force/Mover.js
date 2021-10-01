// ? Force = Mass * Acceleration;

class Mover {
	constructor(x, y, m) {
		this.pos = createVector(x, y);
		this.vel = createVector(0, 0);
		this.acc = createVector(0, 0);
		this.mass = m;
		this.r = sqrt(this.mass) * 10;
	}

	friction() {
		let diff = height - (this.pos.y + this.r);
		if (diff < 1) {
			// ? Easy way
			this.vel.mult(0.95);
			// ? Mathmatical way
			/*
			// ? 속도를 정규화하고 반대 방향으로 설정
			let friction = this.vel.copy();
			friction.normalize();
			friction.mult(-1);

			// ? Magnitude of Fricition
			let normal = this.mass;
			// ? 정규화된 속도 힘에 설정된 마찰계수와 수직항력의 곱만큼 magnitude를 설정
			friction.setMag(mu * normal);

			this.applyForce(friction);
			*/
		}
	}

	applyForce(force) {
		// ! this.acc = force일 때, gravity와 wind 값이 같이 적용되는 것이 아니라
		// ! (0,1) 혹은 (1,0)의 형태로 적용되므로 오류 발생
		this.acc.add(force);
	}

	// ? code 상에는 보이지 않지만 Euler's integration에 의해 속도가 점차 감소하여 바닥에 떨어지는 상태가 됨
	// ? this.vel.y의 축적값이 변동되면서 점차 가라앉는 모션이 생김
	// ? this.pos.y의 값: 201, 400, 210, 400, 229, 400, 247...
	edges() {
		if (this.pos.y >= height - this.r) {
			// ? 높이 값이 초과했을 경우 바닥 값으로 강제 고정함으로써 변동이 생김
			this.pos.y = height - this.r;
			this.vel.y *= -1;
		}

		if (this.pos.x >= width - this.r) {
			this.pos.x = width - this.r;
			this.vel.x *= -1;
		} else if (this.pos.x <= this.r) {
			this.pos.x = this.r;
			this.vel.x *= -1;
		}
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		// ? Acceleration 값을 고정해 값이 누적값이 되지 않아 속도가 조절됨
		this.acc.set(0, 0);
	}

	show() {
		stroke(255);
		strokeWeight(2);
		fill(255, 100);
		ellipse(this.pos.x, this.pos.y, this.r * 2);
	}
}
