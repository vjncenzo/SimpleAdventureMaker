# SimpleAdventureMaker
SAM is an html page to write simple adventure games.

## How to create you own adventure
All you need to change is the 'commands.js' file.

You can set there:
- Game name (will appear as title);
- Credits (will appear at the footer of the page);
- Commads of the game.

Command syntax is:
- **I**: Image;
  _param_: ImageFileName
  _Example_: `["I", "images/question-mark.jpg"]`
- **T**: Text;
  _param_: Text to show
  _Example_: `["T", "It's evening and you studied all day long!"]`
- **B**: Button;
  _param_: Text of the button
  _param_: Label where the button points to
  _Example_: `["B", "You decide to play just for five minutes", "Play"]`
- **R**: Restart Button.
  _param_: Text of the button
  _Example_: `['R','You lose, do you want to restart?']`

You can also change 'SAM.css' to change the page look (colors, dimensions, ...).