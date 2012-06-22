
			localStorage['maxscore'];
			var compte=0;
			function init(x) {
			compte++;
			document.getElementById("cont").innerHTML='<input type="text" id="sco" value="Score: 0 Meilleur score: '+localStorage['maxscore']+ '" class="sexybutton sexysimple sexygray" style="text-align:center; height:30px ; min-width:60px; text-size : 16px ">';
			document.getElementById("niveau").innerHTML="";
			if (compte==1)
				{

				var ctx;
				var turn  = [];

				var xV = [-1, 0, 1, 0];
				var yV = [0, -1, 0, 1];
				var queue = [];

				var elements = 1;
				var map = [];

				var MR = Math.random;

				var X = 5 + (MR() * (45 - 10))|0;
				var Y = 5 + (MR() * (30 - 10))|0;

				var direction = MR() * 3 | 0;

				var interval = 0;

				var score = 0;
				var inc_score = 50;
				var speed = 1/x*10 ;
				
				var sum = 0, easy = 0;

				var i, dir;

				
				
				var win = window;
				var doc = document;

				var canvas = doc.createElement('canvas');
				var setInt = win.setInterval;
				var clInt = win.clearInterval;

				var sound = new Audio("pop.wav");
sound.load();

				
				for (i = 0; i < 45; i++) {
					map[i] = [];
				}
				canvas.setAttribute('width', 45 * 10);
				canvas.setAttribute('height', 30 * 10);

				ctx = canvas.getContext('2d');

				doc.body.appendChild(canvas);

				function placeFood() {

					var x, y;

					do {
						x = MR() * 45|0;
						y = MR() * 30|0;
					} while (map[x][y]);

					map[x][y] = 1;
					ctx.strokeRect(x * 10 + 1, y * 10 + 1, 10 - 2, 10 - 2);
				}
				placeFood();


				function clock() {

					if (easy) {
						X = (X+45)%45;
						Y = (Y+30)%30;
					}

					--inc_score;

					if (turn.length) {
						dir = turn.pop();
						if ((dir % 2) !== (direction % 2)) {
							direction = dir;
						}
					}

					if (

					(easy || (0 <= X && 0 <= Y && X < 45 && Y < 30))


						&& 2 !== map[X][Y]) {

						if (1 === map[X][Y]) {
							sound.play();
							score+= Math.max(5, inc_score);
							if (score>Number(localStorage['maxscore'])){
							localStorage['maxscore']=score;
							
							}
document.getElementById("sco").value="Score: "+score+" Meilleur score: "+localStorage['maxscore'];							
							inc_score = 50;
							placeFood();
							elements++;
							
						}

						ctx.fillRect(X * 10, Y * 10, 10 - 1, 10 - 1);
						map[X][Y] = 2;
						queue.unshift([X, Y]);

						X+= xV[direction];
						Y+= yV[direction];

						if (elements < queue.length) {
							dir = queue.pop()

							map[dir[0]][dir[1]] = 0;
							ctx.clearRect(dir[0] * 10, dir[1] * 10, 10, 10);
						}

					} else if (!turn.length) {
											if (confirm("GAME OVER !  Réessayer ? Votre score est " + score)) {
											if (score>Number(localStorage['maxscore'])){
											localStorage['maxscore']=score;
											alert("vous avez atteint le meilleur score "+score) ;
											}
											
							document.getElementById("cont").innerHTML='<input type="text" id="sco" value="Score: 0 Meilleur score: '+localStorage['maxscore']+'" class="sexybutton sexysimple sexygray" style="text-align:center; height:30px ; min-width:60px; text-size : 16px ">';

						ctx.clearRect(0, 0, 450, 300);
							queue = [];

							elements = 1;
							map = [];

							X = 5 + (MR() * (45 - 10))|0;
							Y = 5 + (MR() * (30 - 10))|0;

							direction = MR() * 3 | 0;

							score = 0;
							inc_score = 50;
							
							for (i = 0; i < 45; i++) {
								map[i] = [];
							}
							
							placeFood();
						} else {
							clInt(interval);
							window.location = "/projects/";
						}
					}

				}

				interval = setInt(clock, speed*50*0.5);

				doc.onkeydown = function(e) {

					var code = e.keyCode - 37;

					/*
					 * 0: gauche
					 * 1: haut
					 * 2: droite
					 * 3: bas
					 **/
					if (0 <= code && code < 4 && code !== turn[0]) {
						turn.unshift(code);
					} else if (-5 == code) {

						if (interval) {
							clInt(interval);
							interval = 0;
						} else {
							interval = setInt(clock, speed*50*0.5);
						}

					} else { 
						dir = sum + code;
						if (dir == 44||dir==94||dir==126||dir==171) {
							sum+= code
						} else if (dir === 218) easy = 1;
					}
				}
}				
			}
			
			

		
				
		
