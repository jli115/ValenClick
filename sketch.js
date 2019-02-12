/*
 * Ubiquitous Computing - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett
 * 
 * Allows you to send data to Adafruit IO + IFTTT
 * 
 */


var AIO_KEY = "a29236a2d8e447119f3e2b3fa05b7e99";//get this from your account
var channelGroup = "ubiComp";
var channel1 = "xPos";
var channel2 = "yPos";

function preload(){
   img1 = loadImage("1.png"); 
}

function setup()
{
createCanvas(windowWidth,windowHeight);




}   


function draw()
{
//background(0,255,0);
//stroke(255);
//11strokeWeight(5);    
//line(0,mouseY,width,mouseY);    // draw horizontal line  at the Y position of the cursor
//line(mouseX,0,mouseX,height);   // draw vertical line  at the X position of the cursor
image(img1,0,0,windowWidth, windowHeight);

}

function mousePressed()
{
	sendData();
	
}



function sendData() 
	{
        
        var url = ("https://io.adafruit.com/api/v1/groups/"+channelGroup+"/send.json?x-aio-key=" + AIO_KEY + "&"+channel1+"=" + mouseX + "&"+channel2+"=" + mouseY);
        var oReq = new XMLHttpRequest()
        oReq.addEventListener("load", reqListener)
        oReq.open("POST", url)
        oReq.send()
      }

function reqListener(inputdata)
{
	console.log(inputdata);
}







