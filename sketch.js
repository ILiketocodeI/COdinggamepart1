var character
var person
var enemy
var exitDoor
var celebrate
var getKeyAnimation
var deathAnimation

function preload () {

character = loadImage("PlayerCharacter.png")
enemy = loadImage("Enemy.png")
exitDoor = loadImage("ExitDoor.png")
celebrate = loadImage("PlayerCharacterCelebrate.png")
getKeyAnimation = loadImage("PlayerCharacterGetKey.png")
deathAnimation = loadImage("PlayerCharacterDeath.png")

person = loadAnimation("PlayerCharacter.png", "PlayerCharacter.png")
//Make sure to change the second PlayerCharacter.png to PlayerCharacterWalk.png
}


function setup () {
canvas = createCanvas(windowWidth, windowHeight);

character = createSprite(200,200,10,10)
character.scale = 0.5
character.addAnimation("PlayerCharacterWalk", person)

exitDoor = createSprite(100,100,30,60)
}





function draw () {
background("grey")

  drawSprites()
}