(function () {
	if (typeof Asteroids === "undefined"){
		window.Asteroids = {};
	}
	
	var MovingObject = Asteroids.MovingObject = function (
			pos, 
			game,
			vel, 
			radius, 
			color) {
				
		this.pos = pos;
		this.vel = vel;
		this.radius = radius;
		this.color = color;
		this.game = game;
	};
	
	MovingObject.prototype.draw = function (ctx) {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		
		ctx.arc(
			this.pos[0],
			this.pos[1],
			this.radius,
			0,
			2 * Math.PI,
			false
		);
		
		ctx.fill();
	};
	
	MovingObject.prototype.move = function () {
		var x = this.pos[0] + this.vel[0];
		var y = this.pos[1] + this.vel[1];
		this.pos = this.game.wrap([x, y]);
	};
	
	MovingObject.prototype.isCollidedWith = function (otherObject) {
		var delta_x = this.pos[0] - otherObject.pos[0];
		var delta_y = this.pos[1] - otherObject.pos[1];
		// optimization: avoiding square roots. 
		var distance_squared = delta_x * delta_x + delta_y * delta_y;
		var radius_sum = this.radius + otherObject.radius;
		if (distance_squared < radius_sum * radius_sum) {
			this.collideWith(otherObject);
			return true;
		} else {
			return false;
		}
	};
	
	MovingObject.prototype.collideWith = function (otherObject) {
		console.log("this shouldn't happebn");
	};
})();

// var mo = MovingObject