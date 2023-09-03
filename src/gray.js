let Image=document.getElementById('ogImage');
let can=document.getElementById('canvas'); 
let c=canvas.getContext('2d');
can.width=Image.width;
can.height=Image.height;
c.drawImage(Image, 0, 0);
let imData=c.getImageData(0, 0, can.width, can.height);
let data =imData.data;

for (let i=0;i<data.length;i+=4) 
{
    let red=data[i];
    let green=data[i+1];
    let blue=data[i+2];
    let avg=(red + green + blue)/3;
    data[i]=avg;         
    data[i+1]=avg;     
    data[i+2]=avg;     
}
c.putImageData(imData, 0, 0);