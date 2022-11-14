function fun(){

    var a = prompt("Enter number to seperate with commas");

    var sumArray =a.split(",");

    let result =0;
    for(let i = 0; i < sumArray.length;i++){

      result+= parseInt(sumArray[i]);

    }
    alert("result is  "+ result)

  }