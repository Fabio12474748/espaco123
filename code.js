var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","efbc27fc-92e4-4282-b736-6dc8f1315885"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"planeta","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"i4TsYwYa5DtLeHgcW1Vzr8netKWySUhR","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"trolzim1","sourceUrl":null,"frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":12,"version":"7.Np21I4mfchId31XldlatreKGOrzI3R","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":null,"frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":12,"version":"SU_EcOE918.aIALy8W_H.ghb224CjK3W","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/dfc53be7-786c-4305-b8eb-81fa595e9903.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":null,"frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ffs7X86AtQg4CU8JBYh63AWnUmM8vLhr","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/47fade86-5bd1-4789-87af-896fb1433a7b.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":null,"frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":12,"version":"4aD7wW6BumPb0Deci7Qak0CL93psjjgE","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/043deebf-64b8-4795-be8d-db5055414f2f.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"W2dJ5aSPWTo2WkGL3TA0HdQCmylMYOy6","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/3221caad-ae37-4eec-92a8-56bae4769e66.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"trol21","sourceUrl":null,"frameSize":{"x":386,"y":365},"frameCount":1,"looping":true,"frameDelay":12,"version":"ADegXbrwMO7S_Lhp1uiLYhd8gc2ZgcIF","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":365},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"efbc27fc-92e4-4282-b736-6dc8f1315885":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/LSAxFAITzH2xiX41pmUjjKZ0mjsPflUA/category_vehicles/playerShip3_green.png","frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"LSAxFAITzH2xiX41pmUjjKZ0mjsPflUA","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LSAxFAITzH2xiX41pmUjjKZ0mjsPflUA/category_vehicles/playerShip3_green.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("b");
var hero = createSprite(200,345,200,345);
hero.shapeColor="red";

var enemy1 = createSprite(200,250,10,10);
enemy1.shapeColor="red";

var enemy2 = createSprite(200,150,10,10);
enemy2.shapeColor="red";

var enemy3 = createSprite(200,50,10,10);
enemy3.shapeColor="red";
var  trol2 = createSprite(380,50);
trol2.setAnimation("trol21");
trol2.scale=0.1;
var net = createSprite(200,5,200,20);
net.shapeColor="red";
net.setAnimation("planeta");
net.scale=0.2;
var trol1 = createSprite(10,60);
trol1.setAnimation("trolzim1");
trol1.scale=0.1;
var goal =0;
var death = 0;

hero.setAnimation("hero1");
hero.scale=.5;
enemy1.setAnimation("enemy");
enemy1.scale=.1;
enemy2.setAnimation("enemy2");
enemy2.scale=.1;
enemy3.setAnimation("enemy3");
enemy3.scale=.1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);
trol1.velocityY=8;
trol2.velocityY=8;

function draw() {
  
//plano de fundo(b);

createEdgeSprites();




enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);
trol1.bounceOff(bottomEdge);
trol1.bounceOff(topEdge);
trol2.bounceOff(bottomEdge);
trol2.bounceOff(topEdge);
if(keyDown(UP_ARROW)){
  hero.y=hero.y-3;
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+3;
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3;
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3;
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)|| hero.isTouching(trol1)|| hero.isTouching(trol2)){
  playSound("assets/category_poof/puzzle_game_poof_bubble_01.mp3");
  hero.x=200;
  hero.y=350;
  death = death+1;
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  hero.x=200;
  hero.y=345;
  goal=goal+1;
}

  

textSize(20);
  fill("blue");
  text("mortes:"+death,20,350);
  
drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
