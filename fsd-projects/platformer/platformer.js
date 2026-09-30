$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();



    // TODO 2 - Create Platforms
    //function createPlatform(Xpos, Ypos, Width, Height, "Color")
    //function createPlatform(Xpos, Ypos, Width, Height, "Color", minX, maxX, speedX, minY, maxY, speedY)
createPlatform(200, 700, 80, 20, "green", 0, 1300, 1.5, 0, 700, 1.5)
createPlatform(300, 700, 80, 20, "purple", 0, 1300, 1.5, 0, 680, 1.5)
createPlatform(400, 700, 80, 20, "yellow", 0, 1300, 1.5, 0, 660, 1.5)
createPlatform(500, 700, 80, 20, "grey", 0, 1300, 1.5, 0, 640, 1.5)
createPlatform(600, 700, 80, 20, "white", 0, 1300, 1.5, 0, 620, 1.5)


    // TODO 3 - Create Collectables
//createCollectable("Name", xPos, yPos, GravitNumber, BounceNumber, minX, maxX, speed)
//createCollectable("Name", xPos, yPos, GravitNumber, BounceNumber)
//createCollectable("Name", xPos, yPos)
createCollectable("database", 780, 280)
createCollectable("diamond", 800, 150, 0.5, 1, 100, 1300, 6);
createCollectable("steve", 1200, 200, 0.5, 1, 100, 1300, 4)
createCollectable("max", 400, 190)

    // TODO 4 - Create Cannons
//createCannon("top bottom left right", position, timeBetweenShots, BulletWidth, BulletHeight, minCannonPos, maxCannonPos, cannonSpeed)
//createCannon("top bottom left right", position, timeBetweenShots, BulletWidth, BulletHeight)
//createCannon("top bottom left right", position, timeBetweenShots)
createCannon("top", 150, 1000, 10, 10, 150, 1300, 2)
createCannon("left", 100, 1000, 10, 10, 100, 570, 2)
createCannon("right", 100, 1000, 10, 10, 100, 640, 2)


    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
