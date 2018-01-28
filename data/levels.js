/*jshint esversion: 6 */
define(['mozart'], function (mozart) {
	var levelData = mozart(function(prototype, _, _protected, __, __private) {
		prototype.levels = [
			{player:
			     {x: 80, y: 180},
			 coins:
	           [{x: 150, y: 180},
					{x: 250, y: 180},
					{x: 350, y: 180},
					{x: 450, y: 180},
					{x: 550, y: 180},
					{x: 650, y: 180},
					{x: 750, y: 180},
					{x: 850, y: 180},
					{x: 950, y: 180},
					{x: 1050, y: 180},
					{x: 1150, y: 180},
					{x: 1250, y: 180},
					{x: 1350, y: 180},
					{x: 1450, y: 180}],
			 flag:
	           {x: 1550, y: 282},
			 walls:
	           {origin:
					    [0,0],
				   data:
					    ["|                                        /",
						  "|                                        /",
						  "|                                        /",
						  "|                                        /",
						  "|                                        /",
						  "|                                        /",
						  "|                                        /",
						  "|                                        /",
						  ".----------------------------------------,"]
				  }
			 },

			{player:
			     {x: 80, y: 180},
			 coins:
	           [{x: 150, y: 180},
					{x: 250, y: 180},
					{x: 350, y: 180},
					{x: 450, y: 180},
					{x: 550, y: 180},
					{x: 650, y: 180},
					{x: 750, y: 180},
					{x: 850, y: 180},
					{x: 950, y: 180},
					{x: 1050, y: 180},
					{x: 1150, y: 180},
					{x: 1250, y: 180},
					{x: 1350, y: 180},
					{x: 1450, y: 180}],
			 flag:
	           {x: 1550, y: 523},
			 walls:
	           {origin:
					    [0,0],
				   data:
					    ["|                                        /",
						  "|                                        /",
						  "|                                        /",
						  "|                                        /",
						  "|                                        /",
						  "|                                        /",
						  "|                                        /",
						  "|                                        /",
						  ".------v                                 /",
						  "       .---v                             /",
						  "           .---v                         /",
						  "               .---v                     /",
						  "                   .---v                 /",
						  "                       .---v             /",
						  "                           .-------------,"]
				  }
			 },



			{player:
			     {x: 40, y: 180},
		    coins:
	           [{x: 215, y: 180},
					{x: 265, y: 180},
					{x: 455, y: 180},
					{x: 505, y: 180},
					{x: 695, y: 180},
					{x: 745, y: 180},
					{x: 935, y: 180},
					{x: 985, y: 180},
					{x: 1175, y: 180},
					{x: 1225, y: 180}],
			 flag:
	           {x: 1430, y: 242},
			 walls:
	           {origin:
					    [0,0],
				   data:
					    ["|                                    /",
						  "|                                    /",
						  "|                                    /",
						  "|                                    /",
						  "|                                    /",
						  "|                                    /",
						  "|                                    /",
						  ".v   <-v   <-v   <-v   <-v   <-v   <-,",
						  " |   / |   / |   / |   / |   / |   /  ",
						  " |   / |   / |   / |   / |   / |   /  ",
						  " |   / |   / |   / |   / |   / |   /  ",
						  " |   / |   / |   / |   / |   / |   /  ",
						  " .---, .---, .---, .---, .---, .---,  "]
			     }
			 },



			{player:
	           {x: 100, y: 180},
			 coins:
	           [{x: 200,y: 100},
				   {x: 300,y: 100},
				   {x: 400,y: 100},
				   {x: 600,y: 100},
				   {x: 700,y: 100},
				   {x: 800,y: 100},
				   {x: 900,y: 100},
				   {x: 1000,y: 100},
				   {x: 1100,y: 100},
				   {x: 1200,y: 100},
				   {x: 1300,y: 100},
				   {x: 1400,y: 100}],
			 flag:
	           {x: 1500, y: 322},
			 sparkstrips:
	           [{x: 500, y: 332}],
		    walls:
	           {origin:
					    [0,0],
				   data:
					    ["                                         ",
						  "                                         ",
						  "                                         ",
						  "|                                       /",
						  "|                                       /",
						  "|                                       /",
						  "|                                       /",
						  "|                                       /",
						  "|                                       /",
						  ".---------------------------------------,"]
			     }
			 },

			{player:
			     {x: 100, y: 200},
          coins:
			     [{x: 200,y: 100},
				   {x: 550,y: 100}],
          flag:
			     {x: 1700, y: 322},
          sparkstrips:
				  [{x: 460, y: 332},
				   {x: 640, y: 252}],
          walls:
	           {origin:
					    [0,0],
				   data:
					    ["                                              ",
						  "                                              ",
						  "                                              ",
						  "|                                            /",
						  "|                                            /",
						  "|                                            /",
						  "|                                            /",
						  "|            <---v                           /",
						  "|            /   |                           /",
						  ".------------,   .---------------------------,"],
			     }
			 },

			{player:
	           {x: 100, y: 180},
			 coins:
	           [{x: 1520, y: 140},
					{x: 40, y: 340},
					{x: 1520, y: 540},
					{x: 40, y: 740},
					{x: 1520, y: 940},
					{x: 40, y: 1140},
					{x: 1520, y: 1340},
					{x: 40, y: 1540}],
			 batteries:
	           [{x: 1380, y: 140},
				   {x: 180, y: 340},
				   {x: 1380, y: 540},
				   {x: 180, y: 740},
				   {x: 1380, y: 940},
				   {x: 180, y: 1140},
				   {x: 1380, y: 1340},
				   {x: 180, y: 1540}],
	       flag:
	           {x: 1500, y: 1802},
		    walls:
	           {origin:
					    [0,0],
		         data:
					    ["                                        ",
				        "                                        ",
				        "                                        ",
				        "|                                      /",
				        "|                                      /",
				        "|                                      /",
				        ".----------------------------------v   /",
				        "`__________________________________>   /",
				        "|                                      /",
				        "|                                      /",
				        "|                                      /",
				        "|   <----------------------------------,",
						  "|   ^__________________________________'",
						  "|                                      /",
						  "|                                      /",
						  "|                                      /",
						  ".----------------------------------v   /",
						  "`__________________________________>   /",
						  "|                                      /",
						  "|                                      /",
						  "|                                      /",
						  "|   <----------------------------------,",
						  "|   ^__________________________________'",
						  "|                                      /",
						  "|                                      /",
						  "|                                      /",
						  ".----------------------------------v   /",
						  "`__________________________________>   /",
						  "|                                      /",
						  "|                                      /",
						  "|                                      /",
						  "|   <----------------------------------,",
						  "|   ^__________________________________'",
						  "|                                      /",
						  "|                                      /",
						  "|                                      /",
						  ".----------------------------------v   /",
						  "`__________________________________>   /",
						  "|                                      /",
						  "|                                      /",
						  "|                                      /",
						  "|   <----------------------------------,",
						  "|   ^__________________________________'",
						  "|                                      /",
						  "|                                      /",
						  "|                                      /",
						  ".--------------------------------------,"]
				  }
			 },


			{player:
				  {x: 100, y: 1120},
			 coins:
				  [{x: 240,y: 1100},
               {x: 240,y: 860},
               {x: 240,y: 620},
               {x: 240,y: 140},
				  ],
			 batteries:
				  [{x: 240,y: 380}],
			 portals:
				  [{x: 582,
					 y: 1079,
					 properties:
					     {portalDestination:
							  {x: 18, y: 919, d: 1}
						  }
				   },
				   {x: 18,
					 y: 919,
					 properties:
					     {portalDestination:
							  {x: 582, y: 1079, d: 3}
						  }
				   },
				   {x: 582,
					 y: 839,
					 properties:
					     {portalDestination:
							  {x: 18, y: 679, d: 1}
						  }
				   },
				   {x: 18,
					 y: 679,
					 properties:
					     {portalDestination:
							  {x: 582, y: 839, d: 3}
						  }
				   },
				   {x: 582,
					 y: 599,
					 properties:
					     {portalDestination:
							  {x: 18, y: 439, d: 1}
						  }
				   },
				   {x: 18,
					 y: 439,
					 properties:
					     {portalDestination:
							  {x: 582, y: 599, d: 3}
						  }
				   },
				   {x: 582,
					 y: 359,
					 properties:
					     {portalDestination:
							  {x: 18, y: 199, d: 1}
						  }
				   },
				   {x: 18,
					 y: 199,
					 properties:
					     {portalDestination:
							  {x: 582, y: 359, d: 3}
						  }
				   }],
			 flag:
				  {x: 540, y: 122},
			 sparkstrips:
				  [{x: 305, y: 1174}],
		    walls:
				  {origin:
					    [0,0],
				   data:
					    ["     `_________'",
						  "     |         /",
						  "`____>         /",
						  "|              /",
						  "|        <-----,",
						  "|        ^_____'",
						  ".-----v        /",
						  "`_____>        /",
						  "|              /",
						  "|              /",
						  "|        <-----,",
						  "|        ^_____'",
						  ".-----v        /",
						  "`_____>        /",
						  "|              /",
						  "|              /",
						  "|        <-----,",
						  "|        ^_____'",
						  ".-----v        /",
						  "`_____>        /",
						  "|              /",
						  "|              /",
						  "|        <-----,",
						  "|        ^_____'",
						  ".-----v        /",
						  "`_____>        /",
						  "|              /",
						  "|              /",
						  "|        <-----,",
						  "|        /      ",
						  ".--------,      "]
				  }
			 },

			{player:
			     {"x": 80, "y": 180},
			 coins:
	           [{"x": 120, "y": 180}],
			 flag:
	           {x: 3150, y: 282},
			 turrets:
				  [{x: 3000,
					 y: 288,
				    properties:
					     {shootingRate: 72, turned :false}
				   },
				   {x: 3000,
					 y: 266,
				    properties:
					     {shootingRate: 72, turned :false}
				   },
				   {x: 3000,
					 y: 244,
				    properties:
					     {shootingRate: 72, turned :false}
				   }],
			 walls:
	           {origin:
					    [0,0],
				   data:
					    ["|                                                                                /",
						  "|                                                                                /",
						  "|                                                                                /",
						  "|                                                                                /",
						  "|                                                                                /",
						  "|                                                                                /",
						  "|                                                                                /",
						  "|                                                                                /",
						  ".--------------------------------------------------------------------------------,"]
				  }
			 },


			{player:
			     {x: 50, y: 200},
			 portals:
				  [{x: 280,
					 y: 20,
					 properties:
					     {portalDestination:
							  {x: 18, y: 359, d: 1}
						  },
					 spriteProperties: [{r: Math.PI / 2}]
				   },
				   {x: 18,
					 y: 359,
					 properties:
					     {portalDestination:
							  {x: 280, y: 20, d: 2},
						  }
				   }],
			 enemies:
				  [{x: 280,
					 y: 200,
					 properties:
					     {x2: 40,
							v: 3,
						   at: 2}
					}],
			 flag:
	           {x: 260, y: 364},
			 walls:
	           {origin:
					    [0,0],
				   data:
					    ["|       /",
						  "|       /",
						  "|       /",
						  "|       /",
						  "|       /",
						  "|       /",
						  ".-------,",
						  "`_______'",
						  "|       /",
						  "|       /",
						  ".-------,"]
				  }
			 },

			{player:
			     {x: 50, y: 200},
			 flag:
	           {x: 1620, y: 284},
			 lifts:
				  [{x: 200,
					 y: 320,
					 properties:
					     {x2: 200,
							y2: 100,
							v: 2}
				   },
				   {x: 480,
					 y: 100,
					 properties:
					     {x2: 480,
							y2: 320,
							v: 2}
				   },
				   {x: 760,
					 y: 320,
					 properties:
					     {x2: 760,
							y2: 100,
							v: 2}
				   },
				   {x: 1040,
					 y: 100,
					 properties:
					     {x2: 1040,
							y2: 320,
							v: 2}
				   },
				   {x: 1320,
					 y: 320,
					 properties:
					     {x2: 1320,
							y2: 100,
							v: 2}
				   }],
			 sparkstrips:
	           [{x: 200, y: 412},
					{x: 480, y: 412},
					{x: 760, y: 412},
					{x: 1040, y: 412},
					{x: 1320, y: 412}],
			 walls:
	           {origin:
					    [0,0],
				   data:
					    ["|                                         /",
						  "|                                         /",
						  "|                                         /",
						  "|     <v     <v     <v     <v     <v      /",
						  "|     /|     /|     /|     /|     /|      /",
						  "|     /|     /|     /|     /|     /|      /",
						  "|     /|     /|     /|     /|     /|      /",
						  "|     /|     /|     /|     /|     /|      /",
						  ".---v /.---v /.---v /.---v /.---v /.------,",
						  "    | /    | /    | /    | /    | /        ",
						  "    | /    | /    | /    | /    | /        ",
						  "    .-,    .-,    .-,    .-,    .-,        "]
				  }
			 },

			];

	});
	return levelData;
});



/*
ACTION QUEUE USAGE


function init(robot){
	robot.actionQueue = require('action-queue');
	robot.actionQueue.push({type: 'move', amount: 5});
	robot.actionQueue.push({type: 'shoot'});
	robot.actionQueue.push({type: 'move', amount: 5});
}

function loop(robot){
	if (robot.actionQueue.empty()) {
		return {type: 'wait'};
	}

	var actionOnGround = ['jump', 'move'].indexOf(robot.actionQueue.peek().type) > -1;

	if (!actionOnGround ||
		(actionOnGround && robot.onGround())) {
		robot.action = robot.actionQueue.pop();
	}
	//robot.actionQueue.log();
	return robot.action
}

EVENTS USAGE

  	robot.on('collide', function(e){
      	if (e.with.t == 'wall') return;
		console.log('COLLISION: ' +
					'with: ' + e.with.t +
					 '.');
	});
  	//robot.on('ground', function(){console.log('ground')});
  


*/

/*

    LEVEL CONCEPTS

[X] move straight
[X] move and jump
[X] count coins collected
[X] use objects' positions
[.] portal
    [X] Keep moving right, portal takes robot to level higher
	     catch a coin or battery from previous iteration => jump in this iteration
[.] turret shooting
    [X] Flat plane with robot moving right
	     jump when bullet approaches, way of finding it, maybe library?
[.] enemy robot no gun
	  [X] very thin level use action queue:
	      shoot if far away if near by jump turn and carry on shooting
[X] moving floor
[ ] enemy robots with guns
	 [ ] two pointing towards player from both sides
[ ] push box
    [ ] use event to detect collision with box
[ ] spikes
    [ ] From a high platform push a box infront of a turret
        then go down to the lower platform hidden from bullets by the box
[ ] nextEdge()
[ ] action queue
	 without checking if action needs ground
[ ] action queue
    check if action needs ground (jump/move)
[ ] action queue
    with checked action library




*/
