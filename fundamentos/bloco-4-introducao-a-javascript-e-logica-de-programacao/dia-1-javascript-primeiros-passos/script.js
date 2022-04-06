const piece = "queEn"
const result = piece.toLowerCase()

if(result==="bishop"||result==="pawn"){
    console.log("diagonals")
} else if (result==="rook"){
    console.log("horizontally and vertically")
}else if (result==="king"){
        console.log("horizontally, vertically and diagonals")
}else if (result==="horse"){
    console.log("l-shape")
}else if (result==="queen"){
    console.log("square shape")
}else{
    console.log("this piece either don't exist or i haven't added it to the code")
}