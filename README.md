# Rock-Paper-Scissors Run!

[Live Link ](https://peterwong327.github.io/Rock-Paper-Scissors/)

### Background and Overview
Rock Paper Scissors Run! is an endless running-style game in which a player controls a pair of scissors, moving left and right, to navigate through obstacles (rocks), while cutting as much papers as possible.

![](https://s15.postimg.cc/ssboczb4r/in_Game_Shot.png)

### Technologies
This game was implemented using JavaScript for overall structure and game logic, HTML5 Canvas for rendering, along with Webpack to bundle all the JavaScript files.

### Functionalities and MVP Features
A player can:
- Control a pair of scissors by moving it left and right
- Collect points for 'cutting' through paper obstacles
- Lose the game on collision with a rock
- Hear background music and collision sounds
- Start a game and restart after losing

#### Moving the pair of scissors
A player moves the pair of scissors by using the left and right arrow keyboard keys, which was set up with an event listener in the entry file. The event listener is linked to the Scissor class method, which updates the scissor direction based on the keypress. With a single press of a key, the pair of scissors would move continuously to that direction until it hits the edge of the screen. The overall strategy would be to continuously press on either the left or right arrow key to balance the pair of scissors.

#### Sound
MP3 sound clips are directly added into the project folder, linked to the main Game class constructor method. Audio clips of collision, background music, and leveling up are rendered using conditionals throughout the Game class. A mute button on the screen can be clicked to turn off all sounds. Alternatively, the 'shift' key can be pressed to toggle the 'Mute' button.

#### Scoring
A user scores 1 point for each 'hand' obstacle that was 'cut' by the pair of scissors. Collision can be detected from all directions between the scissor and a paper. Once a collision with a paper obstacle is detected, a score counter increments by 1. Once a player reaches 25 points, the player goes to the next level, in which the speed of obstacles falling increases. The game ends as soon as a rock touches the pair of scissors.

### Additional features to be implemented
The following features can be added in the future:
- animation for the pair of scissors to simulate movement
- animation for collision to show piece of paper being cut
- 'powerups' to slow down the speed of obstacles falling and/or freeze the obstacles
