# p5Js-tutorial

## Memo

### Static method와 Instance method
&ensp;`x.add()`와 같은 **Instance method**는 object의 값을 직접 변경하는 method. <br/> `p5.Vector.add()`와 같은 **Static method**는 기존의 variable 값을 변경하지 않고 새로운 값에 저장하여 기존의 원형태의 값을 보존하는 장점을 가진 method. 

### Unit Vector
&ensp;Target x,y 좌표의 vector 값의 *Magnitude(변의 길이)*로 vector 값을 나누면 **normalized**되고 여기에 `mult(value)`를 줌으로써 normalized 된 magnitude를 원하는 형태로 가공할 수 있다. <br/> e.g) magnitude의 길이에 따라 rgb 색을 다르게 해 예술적으로 만들 수도 있을 듯 함. `v.normalize(); v.mult(50); === v.normalize().mult(50) === v.setMag(50);`

### Gravity and wind
&ensp;**Gravity**를 구현하기 위해 *Accelerator*에 중력값을 넣고 *Velocity*에 *Accelerator*의 값을 넣는다. 처음 지정한 *Vector* 좌표에서 *Accelerator* 크기 만큼 누적되는 *Velocity*의 값이 현재의 *Position*에 저장되고 공은 바닥으로 향한다.<br/>&ensp;바닥과 공이 만났을 때, *Position*의 값은 바닥 값의 좌표로 고정되어 값의 변형이 일어나고 *Velocity*의 값은 역방향으로 전환되어 위로 향한다. *Velocity*의 값이 0을 지나 양의 값을 갖게 되면 운동은 반복되나 점차 바닥 값으로 수렴하게 되고 이를 통해 *Gravity*는 구현된다.<br/><br/>&ensp;**Wind**의 경우 **Gravity**와 유사한 형태지만 x방향으로 *Force*가 주어지고 **Gravity**와 **Wind**의 *Force*가 동시에 영향을 받을 수 있도록 *Vector*의 합 형태로 주어져야 한다. 

### Friction force
&ensp;**Friction force** = -1(Negative: 역방향) * μ(Coefficient friction: 마찰계수) *  N(Normal force) * Velocity unit vector<br/><br/>&ensp;떨어지는 속도값(*Velocity*)이 바닥에 닿으면 점차 줄어들게 하기 위해 *Velocity*의 값을 정규화하고 역방향으로 설정한다. 여기에 작용하는 마찰계수와 수직항력(Normal force)이 정규화된 역방향의 *Velocity*값에 기반한 힘을 가지도록 하고 바닥에 닿을 때마다 힘이 작용하게 한다.