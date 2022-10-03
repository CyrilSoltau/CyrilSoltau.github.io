"use strict";

const $ = selector => document.querySelector(selector);
    
const imageCache = [];
let imageCounter = 0;
let timer = null;
let image = null;

const mainImage = $("#main_image");   // the img element for the show
       // the h2 element for the caption

const runSlideShow = function() {
    imageCounter = (imageCounter + 1) % imageCache.length;
    image = imageCache[imageCounter];
    mainImage.src = image.src;
    mainImage.alt = image.alt;
   
};
         
document.addEventListener("DOMContentLoaded", () => {
    const links = $("#image_list").querySelectorAll("a");
    
    // process image links
    for ( let link of links ) {
        // Preload image and copy title properties
        image = new Image();
        image.src = link.href;
      

        // add image to array 
        imageCache[imageCache.length] = image;
    }
    
    //start and pause event handlers
    $("#start").addEventListener("click", () => {
        runSlideShow();
        timer = setInterval(runSlideShow, 2000);
        $("#start").disabled = true;
        $("#pause").disabled = false;
    });
    $("#pause").addEventListener("click", () => {
        clearInterval(timer)
        $("#start").disabled = false;
        $("#pause").disabled = true;
    });
});