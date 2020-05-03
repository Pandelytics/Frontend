var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
// percent is the ratio of recovery in percentage
var percent = 31.1
if (percent > 100) percent = 100 //useful checks
if (percent < 0) percent = 0 
// x is the starting x coordinate i.e the center x point of canvas
var x = c.width/2
// y is the starting y coordinate i.e the center y point of canvas
var y = c.height/2
// radius of big circle
var rB = x * 0.8
//radius of center circle
var rC = rB/1.9
// start point of the arc equal to angle 270 which is at the top of circle
var angleStart = 1.5 * Math.PI
// end point of arc calculated from the percentage given
var angleEnd = calcPart(percent) * Math.PI
// r is just 1 point more than big circle radius for perfect positioning
var r = rB + 1 
var x1 = x + r * Math.cos(angleStart);//x coordinate for arc top point
var y1 = y + r * Math.sin(angleStart);//y coordinate for arc top point
var x2 = x + r * Math.cos(angleEnd);//x coordinate for arc bottom donut
var y2 = y + r * Math.sin(angleEnd);//y coordinate for arc bottom donut

drawArc()
drawBigCircle()
drawCenterCircle()
drawPercentText(percent)
drawArcTopPoint();
drawArcBottomDonut();

function drawBigCircle() {
  ctx.beginPath();
  ctx.arc(x, y, rB, 0, 2 * Math.PI);
  ctx.fillStyle = '#F9F6F6';
  ctx.fill();
}

function drawCenterCircle() {
  ctx.beginPath();
  setShadow(ctx, "#FFE8E7", 0, 0, 70);
  ctx.arc(x, y, rC, 0, 2 * Math.PI);
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
}

function drawPercentText(percent) {
  ctx.beginPath();
  ctx.font = rC/2 +"px Georgia";
  ctx.fillStyle = "black";
  ctx.textAlign="center"; 
  ctx.textBaseline = "middle";
  ctx.fillText(percent+"%",x,y);
}

function drawArc() {
//we can draw arc with "ctx.arc(x, y, rB, angleStart, angleEnd);" but
//gradient is difficult on arc. We have to split the arc into 2 parts
//so that gradient plays nicely
var xc = x + r * Math.cos(calcPart(percent/2) * Math.PI);
var yc = y + r * Math.sin(calcPart(percent/2) * Math.PI);
var lw = rC/10
  // 1st arc
  ctx.beginPath();
  ctx.arc(x, y, rB, angleStart, calcPart(percent/2) * Math.PI);
  ctx.strokeStyle = drawGradient('#FFEBEB','#FEA8A9',x1,y1,xc,yc);
  ctx.lineWidth = lw;
  ctx.lineCap = 'round';
  ctx.stroke();
  // 2nd arc
  ctx.beginPath();
  ctx.arc(x, y, rB, calcPart(percent/2) * Math.PI, angleEnd);
  ctx.strokeStyle = drawGradient('#FEA8A9','red',xc,yc,x2,y2);
  ctx.lineWidth = lw;
  ctx.lineCap = 'round';
  ctx.stroke();
 
  
}

function drawGradient(color0,color1,x1,y1,x2,y2) {
  var gradient = ctx.createLinearGradient(x1,y1,x2,y2);
  gradient.addColorStop(0, color0);
  gradient.addColorStop(1, color1);
  return gradient;
}
   //for the top arc circle
function drawArcTopPoint(){
	var r = rC/18
	ctx.beginPath();
    ctx.arc(x1, y1, r, 0, 2 * Math.PI);
    ctx.fillStyle = '#FF8686'
    ctx.fill();
}
   //for the bottom arc circle 
function drawArcBottomDonut(){
	var r = rC/6
    ctx.beginPath();
    setShadow(ctx, "#FE8281", 0, 0, 15);
    ctx.arc(x2, y2, r, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFFFFF'
    ctx.fill();
    ctx.beginPath();
    setShadow(ctx, "#FFFFFF", 0, 0, 15);
    ctx.arc(x2, y2, r/1.45, 0, 2 * Math.PI);
    ctx.fillStyle = '#FD4745'
    ctx.fill();
}
    //to calculate the percentage of the center text
function calcPart(percent) {
    //given that 0.5*Math.PI corresponds to 25%, we can calculate any %
	return 1.5 + ((percent * 0.5)/25)
}

function setShadow(ctx, color, ox, oy, blur) {
  ctx.shadowColor = color;
  ctx.shadowOffsetX = ox;
  ctx.shadowOffsetY = oy;
  ctx.shadowBlur = blur;
}
