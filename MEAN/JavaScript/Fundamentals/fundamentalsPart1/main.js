x = [3, 5, "Dojo", "rocks", "Michael", "Sensei"];
for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
}
console.log("-------------------------------");
x.push(100);
for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
}
console.log("-------------------------------");
x.push(["hello", "world", "JavaScript is Fun"]);
for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
}
console.log("-------------------------------");
sum = 0;
for (let i = 1; i <= 500; i++) {
    sum += i
}
console.log(sum);
console.log("-------------------------------");
arrmin = [1, 5, 90, 25, -3, 0];
min = arrmin[0];
for (let i = 0; i < arrmin.length; i++) {
    if (arrmin[i] < min) {
        min = arrmin[i];
    }
}
console.log(min);
console.log("-------------------------------");
arravg = [1, 5, 90, 25, -3, 0];
total = 0;
for (let i = 0; i < arravg.length; i++) {
    total += arravg[i];
}
console.log(total / (arravg.length));
console.log("-------------------------------");
var newNinja = {
    name: 'Jessica',
    profession: 'coder',
    favorite_language: 'JavaScript',
    dojo: 'Dallas'
}
for (var keys in newNinja) {
    console.log(keys + ":", newNinja[keys])
}
