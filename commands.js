/* 
    setting here:
    * the game name (will appear as title)
    * Credits (will appear at the footer of the page)
	* commads of the game
*/

sGameName = "SAM test game";

GameCredits = 'Vjncenzo & Maialonzo';

aCommands = {
	"Start": [
		["i", "images/question-mark.jpg"],
		["t", "You love to play andventures on PC"],
		["t", "But you have to study, tomorrow you have the graduation exam."],
		["i", "images/start.jpg"],
		["b", "You decide to play just for five minutes", "Play"],
		["b", "You decide to study first", "Study"]
	],
	"Play": [
		["i", "images/video-games.jpg"],
		["t", "You're playing the adventure game"],
		["t", "You found a treasure chest, but you can't get it, it's too far!"],
		["t", "How to get it?"],
		["t", "You played for two hours, but now you found a rope, maybe using it you can get the chest!"],
		["b", "Just five minutes more, let's try to use the rope!", "PPlay"],
        ["b", "It's time to study!", "PStudy"]
	],
	"Study": [
		["i", "images/boystudy.gif"],
		["t", "You understand that your live is more important than a game and start study"],
		["t", "It's evening and you studied all day long!"],
		["b", "Now it's time to play!", "SPlay"],
        ["b", "It's better to sleep now", "SSleep"]
	],
	"PPlay":[
		["i", "images/video-games.jpg"],
		["t", "You get the chest, but it's closed!"],
		["t", "You need to find a key to open it"],
		["t", "The game is so engaging..."],
		["t", "It's evening, you played all day long!"],
        ["b", "It's time to study!", "PPStudy"],
		["b", "It's better to sleep now", "PPSleep"]
    ],	
	"PStudy":[
		["i", "images/barr3.gif"],
		["t", "You're trying to study..."],
		["t", "but you're wondering about how to get the chest!"],
		["t", "It's evening, you can't remember anything but the damn chest!"],
		["i", "images/fail.jpg"],
		["t", "You fail the exam. You lose!"],
		["r", "Retry"]
	],
	"SPlay":[
		["i", "images/video-games.jpg"],
		["t", "You're playing the adventure game"],
		["t", "You found a treasure chest, but you can't get it, it's too far!"],
		["t", "How to get it?"],
		["t", "You pass all the night try getting the chest!"],
		["t", "You fail the exam. You lose!"],
		["r", "Retry"]
    ],	
	"SSleep":[
		["i", "images/boy-sleeping-clip-art.png"],
		["t", "You enjoy a well-earned rest"],
		["t", "You go to the exam fresh and rested"],
		["i", "images/exam2.jpg"],
		["t", "You pass the exam!"],
		["r", "Want to play again?"]
	],
	"PPSleep":[
		["i", "images/boy-sleeping-clip-art.png"],
		["t", "You enjoy a well-earned rest"],
		["t", "You go to the exam fresh and rested"],
		["i", "images/exam1.jpg"],
		["t", "You pass the exam!"],
		["r", "Want to play again?"]
	],
	"PPStudy":[
		["i", "images/BookSleep.jpg"],
		["t", "You're so tired now!"],
		["t", "You fall asleep on the books!"],
		["i", "images/fail.jpg"],
		["t", "You slept poorly, and you fail the exam!"],
		["t", "You lose!"],
		["r", "Retry"]
	]
}			