const fs = require('fs');
const path = require('path');

const parkCodes =
  'anac,appa,arch,badl,bibe,blca,brca,cany,cave,coga,crla,cuva,drto,ever,foth,fofr,gaar,jeff,glba,glac,glec,grba,grsa,gumo,hosp,indu,jeca,jomu,kefj,lavo,lode,maac,maca,mnrr,mora,npnh,jazz,ozar,pefo,redw,romo,seki,thro,viis,whis,whsa,wotr,wrst,yell,yose';

const allParks = JSON.parse(fs.readFileSync(path.resolve(__dirname, './allParks.json')));
const dbParks = JSON.parse(fs.readFileSync(path.resolve(__dirname, './parks.json')));

console.log(allParks.data.length);
console.log(dbParks.length);
console.log(parkCodes.split(',').length);

parks = [];

for (let park of allParks.data) {
  let parkObj = {};
  parkObj.fullName = park.fullName;
  parkObj.parkCode = park.parkCode;
  parkObj.latitude = parseFloat(park.latitude);
  parkObj.longitude = parseFloat(park.longitude);
  parkObj.weatherInfo = park.weatherInfo;
  parkObj.images = park.images;
  parkObj.activities = park.activities;
  parkObj.description = park.description;

  parks.push(parkObj);
}

fs.writeFileSync(path.resolve(__dirname, '../server/json/allParks.json'), JSON.stringify(parks));

console.log('completed');

