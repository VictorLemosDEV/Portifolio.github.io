function setupTypewriter(t) {
    var HTML = t.innerHTML;

    t.innerHTML = "";

    var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 25,
      tempTypeSpeed = 0;

    var type = function() {
      
        if (writingTag === true) {
            tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
            tempTypeSpeed = 0;
            if (tagOpen) {
                tagOpen = false;
                writingTag = true;
            } else {
                tag = "";
                tagOpen = true;
                writingTag = true;
                tag += HTML[cursorPosition];
            }
        }
        if (!writingTag && tagOpen) {
            tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
            if (HTML[cursorPosition] === " ") {
                tempTypeSpeed = 0;
            }
            else {
                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            }
            t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
            setTimeout(type, tempTypeSpeed);
        }

    };

    return {
        type: type
    };
}

//var typer = document.getElementById('typewriter');

//typewriter = setupTypewriter(typewriter);

//typewriter.type();

console.log("Modificando imagens")


var botbadges = document.getElementsByClassName("bot");
var websitebadges = document.getElementsByClassName("website");
var gamebadges = document.getElementsByClassName("game");

for (var i = 0; i < botbadges.length; i++) {
  botbadges[i].src = "./images/discord-bot-badge.png";
}

for (var i = 0; i < websitebadges.length; i++) {
    websitebadges[i].src = "./images/website-badge.png";
  }

  for (var i = 0; i < gamebadges.length; i++) {
    gamebadges[i].src = "./images/game-badge.png";
  }