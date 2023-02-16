// Tree Fractal
var myCanvas = document.getElementById("my_canvas");
var ctx = myCanvas.getContext("2d");
function draw(startX, startY, len, angle, branchWidth) {
    ctx.lineWidth = branchWidth;

    ctx.beginPath();
    ctx.save();

    ctx.strokeStyle = "green";
    ctx.fillStyle = "green";

    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI/180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();

    ctx.shadowBlur = 15;
    ctx.shadowColor = "rgba(0,0,0,0.8)";

    if(len < 6) {
        ctx.restore();
        return;
    }

    draw(0, -len, len*0.8, angle-15, branchWidth*0.8);
    draw(0, -len, len*0.8, angle+15, branchWidth*0.8);

    ctx.restore();
}
draw(162, 280, 55, 0, 10)       

// Julia Fractal
var creal = -.8
var cimag = .156;
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var frame = 0;
 
var pallette=[]; //an array that stores the RGB combinations
 
function julia()
{
        for(y=0;y<200;y++)
                {
                for(x=0;x<200;x++)
                        {
                        var cx=-2+x/50;
                        var cy=-2+y/50;
                        var i = 0;
 
                        do
                                {
                                xt=cx*cx-cy*cy+creal;
                                cy=2*cx*cy+cimag;
                                cx=xt;
                                i++;
                                }
                        while ((cx*cx+cy*cy<4)&&i<25);
 
                        //i=i.toString(16); - commented out since not needed in this version
                        context.beginPath();
                        context.rect(x*4, y*4, 4, 4);
                        context.fillStyle = pallette[i];
                        context.fill();
                        }
                }
        frame++;
        creal=-.8+.6*Math.sin(frame/(3.14*20));
        cimag=.156+.4*Math.cos(frame/(3.14*40));
        
}
 
for(x=0;x<9;x++) // this loop populates the color pallette array
        {
        color=(31*x).toString(16); // convert the number to hex
        if(color.length==1) color='0'+color;  // add a zero in front if only one hex digit
        pallette[x]="#"+color+color+'1F'; // colors 0-8: the Red and Green components change, Blue=FF
        pallette[x+8]='#00ff'+color;      // colors 8-16: the Blue component changes, Red and Green=FF
        pallette[17+x]="#"+color+'0000';  // colors 17-25: the Red component changes, Green and Blue=0
        }
 
a=setInterval(julia,100);

// Sierpinski Triangle

var c = document.getElementById("myCanvas2");
			var ctx = c.getContext("2d");
			ctx.translate(0.5, 0.5);	// anti-alias trick

			function drawLine(p0, p1, color="rgb(223, 229, 227") {
				ctx.beginPath();
				ctx.moveTo(p0.x, p0.y);
				ctx.lineTo(p1.x, p1.y);
				ctx.strokeStyle = color;
				ctx.lineWidth = 1;
				ctx.stroke();
			}

			function drawTriangle(p0, p1, p2) {
				drawLine(p0, p1)
				drawLine(p1, p2)
				drawLine(p2, p0)
			}

			function drawFract(p0, p1, p2, limit){
				if(limit > 0){
					const pA = {
							x: p0.x + (p1.x - p0.x)/2,
							y: p0.y - (p0.y - p1.y)/2
						},
						pB = {
							x: p1.x + (p2.x - p1.x)/2,
							y: p1.y - (p1.y - p2.y)/2
						},
						pC = {
							x: p0.x + (p2.x - p0.x)/2,
							y: p0.y
						};

					drawFract(p0, pA, pC, limit-1);
					drawFract(pA, p1, pB, limit-1);
					drawFract(pC, pB, p2, limit-1);
				}
				else{
					drawTriangle(p0,p1,p2);
				}
			}

			drawFract({x: 25, y:270},{x:165, y:10},  {x:300, y:270}, 5)

// Burning Ship Fractal
