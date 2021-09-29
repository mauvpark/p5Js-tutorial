function setup() {
	createCanvas(400, 400);
	//background(0);
}

function draw() {
	let pos = createVector(200, 200);
	let mouse = createVector(mouseX, mouseY);

	// mouse가 위치한 vector 좌표를 반환
	let v = p5.Vector.sub(mouse, pos);

	// Magnitude: 변의 길이
	let m = v.mag();
	// v의 값을 magitude 값으로 나누면 normalized되고 변의 길이는 1이 되고 각각의 x,y 값 또한 normalized 됨
	// v.div(m); == v.normalize();
	// scaling up: 표준화된 상태에서 vector 값을 scaling up 함
	// v.normalize(); v.mult(50); === v.normalize().mult(50) === v.setMag(50);
	v.setMag(50);
	background(m, m - 50, m - 100);

	// Unit vector: normilized
	//v.normalize();

	translate(width / 2, height / 2);
	strokeWeight(4);
	stroke(255);
	line(0, 0, v.x, v.y);
}
