const Object = require('../models/object');
async function infiniteReqs(){
    let rndCoordsX;
    let rndCoordsY;
    let objects = await Object.find();
    for(let i = 0; i < objects.length; i++){
    rndCoordsX = Math.round(Math.random() * 2000 * 10000) / 10000;
    rndCoordsY = Math.round(Math.random() * 2000 * 10000) / 10000;
    await Object.updateOne({ id: i }, {$set: { coordsX: rndCoordsX, coordsY: rndCoordsY} });
    }
    console.log("changes complited");
}
module.exports = { infiniteReqs };