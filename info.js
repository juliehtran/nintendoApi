// Worked with a mentor to get data from wiki https://nintendo.fandom.com/wiki/List_of_Nintendo_systems

const data = [
  {
    "name": "Color TV Game series",
    "imageUrl": "img/Nintendo_color_tv_game_15.png",
    "description": "The Color TV Game series includes five different pieces of hardware, each one with a unique game. Color TV Game systems did not have interchangeable cartridges, so each console could only play a single title. (1977-1979)",
    "year": "1977-1979"
  },
  {
    "name": "Nintendo Entertainment System/Famicom",
    "imageUrl": "img/Nintendo_Entertainment_System_Model.png",
    "description": "The Nintendo Entertainment System, an 8-bit system, was one of Nintendo's greatest successes. It sold around 61 Million units. Unlike the Color TV Games, the NES could play different titles, on interchangeable cartridges, that could be purchased in stores. A Redesign was made in 1993 called AV Famicom in Japan and New-Style NES in other regions such as America (1985)",
    "year": "1985"
  },
  {
    "name": "Super Nintendo Entertainment System/Super Famicom",
    "imageUrl": "img/Super_Nintendo_North_America_Model.png",
    "description": "The Super Nintendo Entertainment System featured enhanced graphics, a brand new controller, and more. It was the first 16-bit console by Nintendo. Though it sold fairy well, (around 49 million units) the Sega Genesis was a major competitor to the SNES with both Nintendo and Sega giving an extensive ad campaign calling out both sides. Like the NES, it had a redesign, this time being the Super Famicom Jr. in Japan and New-Style SNES in other regions. (1991)",
    "year": "1991"
  },
  {
    "name": "Nintendo 64",
    "imageUrl": "img/Nintendo64.jpg",
    "description": "The Nintendo 64 featured greatly improved 3D graphics and a new controller that introduced the modern joystick. It was also the first home console to have four controller ports built into the system. It sold around 32 million units. With its lack of a disc format, the lack of strong third-party support, and it being released after its competitors' consoles, it could not sell as well. (1996)",
    "year": "1996"
  },
  {
    "name": "Nintendo GameCube",
    "imageUrl": "img/Nintendo_GameCube_Purple_Model.png",
    "description": "The GameCube featured enhanced graphics and a new controller. As the games came on mini-disc it was the first Nintendo home console to solely use a disc format for games. It was also the first (and only) Nintendo system to require additional memory cards in order to save progress. Though not Nintendo's worst selling home console, it sold around 22 million units, being no match for the PlayStation 2, which was very popular, even to this day, being the best selling console. (2001)",
    "year": "2001"
  },
  {
    "name": "Panasonic Q",
    "imageUrl": "img/PanasonicQ.jpg",
    "description": "The Panasonic Q is a hybrid version of the Nintendo GameCube with the ability to play DVDs, Audio CDs, MP3s and CDs as well as several other new features. It was only released in Japan. Being such a low-demand system, it had sold only around 100 thousand units, though it is not certain if that is the exact number. (2001)",
    "year": "2001"
  },
  {
    "name": "Wii",
    "imageUrl": "img/The_Nintendo_Wii.png",
    "description": "The Wii (also called the (RVL-001) featured motion controls, a new online system, various multimedia 'channels' and slightly improved graphics. The graphical change wasn't nearly as dramatic as previous console transitions. It fully supports GameCube games and controllers, making it the first Nintendo home console to be backwards compatible. Its main selling point was its motion controls. This made the casual audience lean towards buying it. It sold 101 million units making its Nintendo's best-selling home console. (2006)",
    "year": "2006"
  },
  {
    "name": "Wii Family Edition",
    "imageUrl": "img/Wii-redesign-610x264.jpg",
    "description": "The Wii Family Edition (also called the (RVL-101) is a revision of the Wii that could only sit horizontally and removed GameCube support. It came bundled with New Super Mario Bros. Wii and the original Super Mario Galaxy soundtrack. (2011)",
    "year": "2011"
  },
  {
    "name": "Wii U",
    "imageUrl": "img/Wii_U_-_Console_and_Gamepad_(White)_01_(no_shadow).png",
    "description": "The Wii U features a new controller known as the Wii U GamePad, which has a 6.2\" touch screen built into it. It also boasts new 1080p HD graphics (only on the TV screen). It was released in two models: white (8GB) and black (32GB). It has a NFC chip used to scan in amiibo. It fully supports Wii games and controllers. With bad marketing, and no one wanting the gimmick, which was the gamepad, it sold very poorly. It has sold around 13 million units making it Nintendo's worst-selling home console. (2012)",
    "year": "2012"
  },
  {
    "name": "Wii Mini",
    "imageUrl": "img/Wii_Mini.png",
    "description": "The Wii Mini (also called the (RVL-201) is a smaller version of the Wii console that, like the Game Boy Micro, was released after its successor, the Wii U. Like the Wii Family Edition, it removes GameCube backwards capability. In addition, it also lacks many of the other Wii's features, such as internet connectivity, an SD Slot, Wii LAN Adapter, and only one USB port. It was first released in Canada in 2012, then North America and Europe in 2013, a year after the Wii U's release, and was bundled with Mario Kart Wii. The sales of the console have never been confirmed (2012)",
    "year": "2012"
  },
  {
    "name": "NES Classic Edition",
    "imageUrl": "img/Nintendo_Entertainment_System_NES_Classic_Edition_(Nintendo_Classic_Mini_Nintendo_Entertainment_System)_%26_Controller.png",
    "description": "The NES Classic Edition is a mini console that emulates the experience of the Nintendo Entertainment System. It includes 30 classic NES games and is compatible with the Wii Classic Controller and NES Classic Edition controller. Though not a huge success, it was not planned to be. With that in mind, it sold around 2 million units, making it a success. (2016)",
    "year": "2016"
  },
  {
    "name": "Nintendo Switch",
    "imageUrl": "img/Nintendo_Switch_hardware_-_02.jpg",
    "description": "The Nintendo Switch is a new hybrid of home and portable gaming systems. It features a portable console with a screen that can be docked to display on larger displays. It features modular controllers that can attach to the device itself, a grip or in each of the user's hands. With the Wii U's fail, Nintendo made sure that the Switch did not make the same mistakes. It has sold around 68 million units at a rapid rate, making it the second-best selling home console, which will most likely keep going strong. (2017)",
    "year": "2017"
  },
  {
    "name": "Super Nintendo Entertainment System Classic Edition",
    "imageUrl": "img/Nintendo_Classic_Mini_Super_Nintendo_Entertainment_System_box_art.jpg",
    "description": "A follow-up to the NES Classic Edition, also known as the SNES Mini, this system emulates the SNES console. It features 20 built in games plus Star Fox 2, which was previously unreleased and can be unlocked after playing the first mission of the original game. The Units sold is around 5 million. Making it an even bigger success than the NES Classic (2017)",
    "year": "2017"
  },
  {
    "name": "Game & Watch",
    "imageUrl": "img/Ball.jpg",
    "description": "Small, portable LCD games starring who is known today as Mr. Game and Watch. There have been 60 different variations of the Game & Watch system. (1980)",
    "year": "1980"
  },
  {
    "name": "Game Boy",
    "imageUrl": "img/Game_Boy_(Grey_Model).png",
    "description": "The Game Boy was the first portable, interchangeable cartridge handheld by Nintendo. Games were 8-bit black-and-white, played on a green-tinted screen. The system had a red LED which showed the remaining power. It could last for over 30 hours on its required 4 AA batteries. (1989)",
    "year": "1989"
  },
  {
    "name": "Virtual Boy",
    "imageUrl": "img/Virtualboy3.jpg",
    "description": "The first Nintendo console with 3D graphics, the concept was to create a virtual reality experience. The system featured a pair of goggles to look into which sent a slightly different image to each eye, creating the 3D effect. The graphics could only be displayed in red and black. The system reportedly caused headaches and nausea, leading to low sales. It was discontinued less than a year after it was released. (1995)",
    "year": "1995"
  },
  {
    "name": "Game Boy Pocket",
    "imageUrl": "img/Game_Boy_Pocket_(Model).png",
    "description": "Similar to the Game Boy but slimmer with a monochrome screen rather than the original pea soup screen. It takes 2 AAA batteries and lasts for a little less time. The first releases of the Game Boy Pocket did not come with the red LED, as shown in the photo. Due to high demand, Nintendo added the LED to the system. (1996)",
    "year": "1996"
  },
  {
    "name": "Game Boy Light",
    "imageUrl": "img/Game_Boy_Light_(Model).png",
    "description": "The Game Boy Light was only released in Japan. It was similar to the Game Boy Pocket, except it featured a backlit screen for playing in the dark. It ran on two AA batteries. (1997)",
    "year": "1997"
  },
  {
    "name": "Pokémon Pikachu",
    "imageUrl": "img/PocketPikachu.gif",
    "description": "The Pokémon Pikachu is a virtual pet toy and pedometer similar to a Tamagotchi. The player takes care of a virtual pet Pikachu. (1998)",
    "year": "1998"
  },
  {
    "name": "Game Boy Color",
    "imageUrl": "img/Game_Boy_Color_-_Purple_Model.png",
    "description": "Similar to the Game Boy, but with color graphics. It also had many technical enhancements, including a more powerful processor and an infrared wireless link-up port. This system was technically compared to the NES, except that the Game Boy Color has a larger color palette. There is no backlight on the screen. It was also backwards compatible with Game Boy games. (1998)",
    "year": "1998"
  },
  {
    "name": "Pokémon Pikachu 2 GS",
    "imageUrl": "img/PokemonPikachu2.jpg",
    "description": "The Pokémon Pikachu 2 GS is a virtual pet toy and pedometer. Unlike the original Pokémon Pikachu, the player doesn't have to take care of Pikachu. (1999)",
    "year": "1999"
  },
  {
    "name": "Game Boy Advance",
    "imageUrl": "img/Game_Boy_Advance_Purple_Model.png",
    "description": "The Game Boy Advance was a major improvement over the Game Boy Color with a new handheld shape, shoulder buttons and better graphics. It was technically compared to the Super Nintendo console, except that the Game Boy Advance's 16-bit sound is not as powerful as the console's. Some games remade from the Super Nintendo for the Game Boy Advance had to remix their soundtracks so they would work on the handheld system. This is clearly evident in the Donkey Kong Country series. It was also backwards compatible Game Boy and Game Boy Color games, making it the first Nintendo handheld to be backwards compatible with more than one console. (2001)",
    "year": "2001"
  },
  {
    "name": "Pokémon Mini",
    "imageUrl": "img/Pmini.jpg",
    "description": "The Pokémon Mini is a Nintendo handheld themed around Pokémon. Only 10 games were made for it. The Nintendo GameCube game, Pokémon Channel, features a Pokémon Mini emulator and six games. (2001)",
    "year": "2001"
  },
  {
    "name": "Game Boy Advance SP",
    "imageUrl": "img/Game_Boy_Advance_SP_Red_Model.png",
    "description": "The Game Boy Advance SP was the first Game Boy to have a clamshell design much like the Nintendo DS. The Game Boy Advance SP featured much better graphics and a front-lit screen which could be turned on or off (the model AGS-001). The newer model, AGS-101 features a backlit screen with adjustable brightness. The system's game compatibility is identical to the Game Boy Advance's. Backwards compatibility with the Game Boy and Game Boy Color continued with the SP. (2003)",
    "year": "2003"
  },
  {
    "name": "Nintendo DS",
    "imageUrl": "img/Nintendo_DS_-_Original_Grey_Model.png",
    "description": "The Nintendo DS featured two screens, the bottom one being a touch screen. The system also had enhanced graphics. It featured backwards compatibility with Game Boy Advance games (except it doesn't have multiplayer), but not original Game Boy and Game Boy Color, and was often criticized for its chunky design. Often referred to as the 'DS Phat' by fans. The DS sold 154 million, making it the second best-selling console behind the PlayStation 2 (2004)",
    "year": "2004"
  },
  {
    "name": "Game Boy Micro",
    "imageUrl": "img/Game_Boy_Micro_-_Grey_Model.png",
    "description": "This was the last model in the Game Boy line and was the smallest handheld ever released and was also released after the DS hit stores. It featured a lack of backwards compatibility to play original Game Boy and Game Boy Color games due to design changes, only able to play Game Boy Advance games. The screen was about 2/3 the size of the original Game Boy Advance's. (2005)",
    "year": "2005"
  },
  {
    "name": "Nintendo DS Lite",
    "imageUrl": "img/Nintendo_DS_Lite_White.png",
    "description": "This was the first redesign of the Nintendo DS line. It was much slimmer and smaller than the original Nintendo DS and featured a brighter screen. Backwards compatibility for Game Boy Advance games continued with the DS Lite. (2006)",
    "year": "2006"
  },
  {
    "name": "Nintendo DSi",
    "imageUrl": "img/Nintendo_DSis.png",
    "description": "The second redesign of the Nintendo DS line. It is slightly bigger, thinner, and brighter than the DS Lite. It was the first Nintendo handheld to feature multimedia. It featured a 0.3 megapixel camera that you could have fun with by editing pictures etc. It also featured a music app where you could record your voice and then play around with it. You could also listen to actual music. Lastly it featured the shop app where you could download games etc. The backwards compatibility for Game Boy Advance games disappeared in this version of the DS, which caused alot of disappointment when it came out. On the other hand, it also had a few exclusive games that can't be played on the original DS and DS Lite. (2008)",
    "year": "2008"
  },
  {
    "name": "Nintendo DSi XL",
    "imageUrl": "img/Nintendo_DSi_XLs.png",
    "description": "This was the third and last redesign of the Nintendo DS line and the first in the XL family. It was the same as the Nintendo DSi, except it featured a much bigger and heavier design with new 4.3\" dual-screens, making it the size of the PlayStation Portable. It is also the biggest, brightest, and heaviest of the four models. Like its predecessor, it is not backwards compatible with GBA games. (2009)",
    "year": "2009"
  },
  {
    "name": "Nintendo 3DS",
    "imageUrl": "img/Nintendo_3DS_(Blue_Model).png",
    "description": "The successor to the Nintendo DS line, the Nintendo 3DS can produce 3D graphics on the top screen without the need for glasses and is backwards compatible with most DS and DSi games. It also includes a portable Mii Maker and StreetPass. It was also the first Nintendo handheld to feature a joystick. (2011)",
    "year": "2011"
  },
  {
    "name": "Nintendo 3DS XL",
    "imageUrl": "img/Nintendo_3DS_XL_Black.png",
    "description": "An extra-large sized version of the 3DS system, following the same concept as the DSi XL. The screens are 90% larger than the 3DS, with the system also offering an extended battery life. (2012)",
    "year": "2012"
  },
  {
    "name": "Nintendo 2DS",
    "imageUrl": "img/Nintendo_2DS.png",
    "description": "The Nintendo 2DS is a redesign of the Nintendo 3DS, which uses mostly the same software, but differs in physical design. It features a more solid, tablet-like design as opposed to the Nintendo 3DS' clamshell design. And as its name suggests, it also lacks the 3D feature, with the top screen graphics only being rendered in the familiar 2D. (2013)",
    "year": "2013"
  },
  {
    "name": "New Nintendo 3DS",
    "imageUrl": "img/NewNintendo3DS.png",
    "description": "The New Nintendo 3DS is a revision of the original Nintendo 3DS, with new features like amiibo and the Face Plates and added exclusive games and a Virtual Console of Super Nintendo Entertainment System which are incompatible with any of the older models. The console also has a 3D screen which can be viewed in different angles and two new buttons and an additional control nub. (2014)",
    "year": "2014"
  },
  {
    "name": "New Nintendo 3DS XL",
    "imageUrl": "img/NewNintendo3DSXL.png",
    "description": "The New Nintendo 3DS XL is a bigger version of the original Nintendo 3DS XL and the New Nintendo 3DS. (2014)",
    "year": "2014"
  },
  {
    "name": "Nintendo Switch",
    "imageUrl": "img/Nintendo_Switch_hardware_-_Console_09-2.png",
    "description": "The Nintendo Switch is a new hybrid of home and portable gaming systems. It features a portable console with a screen that can be docked to display on larger displays. It features modular controllers that can attach to the device itself, a grip or in each of the user's hands. (2017)",
    "year": "2017"
  },
  {
    "name": "New Nintendo 2DS XL",
    "imageUrl": "img/New_Nintendo_2DS_XL_-_Hardware_020.png",
    "description": "The New Nintendo 2DS XL is a technologically-improved remodel of the 2DS handheld. The console is much larger than the original 2DS model and adds all the features of the updated 'New 3DS' line of systems, minus the ability to play games in 3D on the top screen. (2017)",
    "year": "2017"
  },
  {
    "name": "Nintendo Switch Lite",
    "imageUrl": "img/Switch_Lite_grey.png",
    "description": "The Nintendo Switch Lite is a version of the Nintendo Switch that cannot dock into a TV and cannot have joy-cons removed. This console is built for handheld-play only. (2019)",
    "year": "2019"
  },
  {
    "name": "Game & Watch: Super Mario Bros.",
    "imageUrl": "img/G&W_Mario.png",
    "description": "To celebrate the 35th anniversary of Super Mario, Nintendo released a retro handheld system modelled after their original Game & Watch line of systems. It includes the original Super Mario Bros., Super Mario Bros.: The Lost Levels, and the first Game & Watch game, Ball. It also features a clock with 35 Mario related Easter eggs to discover. (2020)",
    "year": "2020"
  }
]

module.exports = data