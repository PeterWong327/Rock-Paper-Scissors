# Rock-Paper-Scissors

### Background and Overview
Rock Paper Scissors is an endless running-style game in which a player controls a pair of scissors, moving left and right, to navigate through obstacles (rocks), while cutting as much papers as possible.

### MVP Features
In Rock Paper Scissors, users will be able to:

- [x] Control a pair of scissors by moving it left and right
- [x] Collect points for 'cutting' through paper obstacles
- [x] Lose the game on collision with a rock
- [x] Hear background music and collision sounds
- [x] Start a game and restart after losing

### Technologies
Rock Paper Scissors will be implemented using JavaScript and HTML5 Canvas.

### Wireframes
This game will consist of a single screen with the simulation canvas along with a panel on the side:

- A "Start Game" button allows the user to initiate the game when ready.

- Two boxes with information on how to play the game.

- A mute/un-mute button allows the user to toggle the sounds on/off.

- Links to my Github and LinkedIn.

![](./images/wireframeRPS.png)

### Implementation Timeline

**Over the weekend:**
- [x] Create images for the background, scissors, rocks and papers
- [x] Create/gather audio files for sound effects and background music
- [x] Setup required files within project folder: HTML and JavaScript
- [x] Save images and sounds into project folder

**Day 1:** Implement code to generate obstacles (rocks and papers) randomly. Goals for the day:
- [x] Learn how to randomly generate the rocks and papers and have them scroll down the screen

**Day 2:** Implement ability for user to move pair of scissors left and right. Goals for the day:
- [x] Finish random obstacle generation
- [x] Set up keyboard keys to enable user control

**Day 3:** Implement collision detection for scissors and obstacles. Goals for the day:
- [x] Set up collision detection for scissors and rocks: game over
- [x] Create and display a counter to show total points
- [x] Set up collision detection for scissors and papers: +1 to the points

**Day 4:** Implement music/sound effects, and style the frontend. Goals for the day:
- [x] Add music to the game when the game is started
- [x] Make a unique sound effect for different types of collisions
- [x] Create mute functionality with button
- [x] Add instructions to the game page
