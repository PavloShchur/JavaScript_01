let box = {};

box.material = "cardboard";

let writeToVariable = box.material;

box.material = "newValue";

box["material"] = "secondValue";
let func = function () {
    return "material";
};

box["size"] = {height : 20, width : 50};

// area is a method
box.area = function () {
    return box.size.height * box.size.width;
}

for(var key in box){
    // no gerentee order
    // console.log(key);
    // console.log(box[key]);
}

let animal = [];

animal.username = 'Mittens';

animal['tagline'] = 'Pet me!';

let noises = [];
animal.noises = noises;
console.log(animal);

























