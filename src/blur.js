let Image=document.getElementById('ogImage');
let can=document.getElementById('canvas');
let c=canvas.getContext('2d');
can.width=Image.width;
can.height=Image.height;

can.style.filter="blur(3px)";

c.drawImage(Image,0,0);