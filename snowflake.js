window.onload=function () {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	W=window.innerWidth;
	H=window.innerHeight;
	
	canvas.width=W;
	canvas.height=H-4;
	// canvas.style.width= '100%';
	// canvas.style.height= '100%';
	
	var maxsnow=80;
	var snow = [];

	for(var i = 0; i < maxsnow; i++)
	{
		snow.push({
			x: Math.random()*W, //x-coordinate
			y: Math.random()*H, //y-coordinate
			r: (Math.random()+0.1)*40, //size of flake
			d: Math.random() //speed of flow
		})
	}

	angle = 0;

	function draw () {
		angle += 0.01;
		if (angle > 1) {
			angle=0;
		};

		ctx.clearRect(0, 0, W, H);
		var image=document.getElementById("source");
		for (var i = 0; i < maxsnow; i++) {
			ctx.drawImage(image,snow[i].x,snow[i].y,snow[i].r,snow[i].r);
			snow[i].y += 2;	
			snow[i].x += Math.sin(snow[i].d+angle);

			if (snow[i].x > (W + snow[i].r)) {
				snow[i].x = - snow[i].r;
			};

			if (snow[i].x < -snow[i].r) {
				snow[i].x = W-snow[i].r;
			};

			if (snow[i].y > (H + snow[i].r)) {
				snow[i].y = - snow[i].r;
				snow[i].x = Math.random()*W;
			};
		}

	}

	setInterval(draw, 30);
}