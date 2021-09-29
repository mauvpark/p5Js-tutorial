# p5Js-tutorial

## Memo
- **Static method**와 **Instance method**
> `x.add()`와 같은 **Instance method**는 object의 값을 직접 변경하는 method. <br/> `p5.Vector.add()`와 같은 **Static method**는 기존의 variable 값을 변경하지 않고 새로운 값에 저장하여 기존의 원형태의 값을 보존하는 장점을 가진 method. 
- **Unit Vector**
> Target x,y 좌표의 vector 값의 *Magnitude(변의 길이)*로 vector 값을 나누면 **normalized**되고 여기에 `mult(value)`를 줌으로써 normalized 된 magnitude를 원하는 형태로 가공할 수 있다. <br/> e.g) magnitude의 길이에 따라 rgb 색을 다르게 해 예술적으로 만들 수도 있을 듯 함. `v.normalize(); v.mult(50); === v.normalize().mult(50) === v.setMag(50);`