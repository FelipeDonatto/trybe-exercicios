const a = 60
const b = 30
const c = 90


if(a<0||b<0||c<0){
    console.log("error")
} else if(a+b+c>180||a+b+c<180){
    console.log(false+", seus não formam um triangulo")
} else {
    console.log(true+", seus dados formam um triangulo")
}