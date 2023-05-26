function ChangeBg()
/*Slumpar fram siffra baserad på längd av lista. Använder siffra för att ta ut str från lista och sätter backgrund till det.*/
{
   const colorList = ["pink", "violet", "purple", "salmon", "green", "yellow"]
   let randomIndex = Math.floor(Math.random() * colorList.length)
   document.body.style.backgroundColor = colorList[randomIndex]
}

function GoodVibes() 
/*Visar "GoodVibes"-h1 som tidigare varit döljd.*/
{
    let text = document.getElementById("good-vibes-text");
    text.style.display = "block";
}

function TimeStamp()
/*Ändrar döljd text till tid och dag. */
{
    let text = document.getElementById("time-stamp-text");
    text.style.display = "block";
    document.getElementById("time-stamp-text").innerHTML = Date();
}

function ChangePicture()
/*Byter bild. */
{
    let picture = document.getElementById("picture");
    picture.src = "dice2.png";
}

function HidePicture()
/*Gömmer bild. */
{
    let image = document.getElementById("picture-div");
    image.style.display = "none";
}

function ShowPicture()
/*Visar bild. */
{
    let image = document.getElementById("picture-div");
    image.style.display = "block";
}

function Header()
/*Skapar header med och centrerar element. */
{
    let header = document.getElementById("header-div"); 
    let picture = document.getElementById("picture");
    header.style.display = "block";
    header.style.backgroundColor = "yellowgreen";
    header.style.color = "rebeccapurple";
    header.style.textAlign = "center";
    picture.style.borderStyle = "solid";
    picture.style.borderWidth = "10px";
    picture.style.borderColor = "aqua";
}

function RemoveHeader()
/*Gömmer header. */
{
    let header = document.getElementById("header-div"); 
    header.style.display = "none";
}

function ShowHeader()
/*Visar header och döljd tack-text. */
{
    let header = document.getElementById("header-div");
    let text = document.getElementById("thanks-text");
    header.style.display = "block";
    text.style.display = "block";
}