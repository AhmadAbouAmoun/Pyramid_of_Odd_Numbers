var number = prompt("Enter x");
var odd = 1;
str = "";
for (var i = 0; i < number; i++) {
    str += odd;
    str += " ";
    odd += 2;
    console.log(str);
}
