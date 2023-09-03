let Image=document.getElementById('ogImage');
let can=document.getElementById('canvas');
let c=can.getContext('2d');
can.width=Image.width;
can.height=Image.height;
c.drawImage(Image, 0, 0);
let imData=c.getImageData(0, 0, can.width, can.height);
let data =imData.data;

for (let i=0;i<data.length;i+=4)
{
    data[i]= 255-data[i];         
    data[i+1]=255-data[i+1]; 
    data[i+2]=255-data[i+2]; 
}
c.putImageData(imData, 0, 0);