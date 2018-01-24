let box = {};

box.material = "cardboard";

let writeToVariable = box.material;

box.material = "newValue";

box["material"] = "secondValue";
let func = function () {
    return "material";
};

let key = "material";
console.log(box[key]);
console.log(box[func()]);