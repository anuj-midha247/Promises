document.getElementById("order").addEventListener("click", orderFood);
document.getElementById("select").addEventListener("click", selectAll);

function orderFood() {
    
    const imgTag=document.createElement("img");
    imgTag.src="https://i.stack.imgur.com/MnyxU.gif"
    var br=document.createElement("br");
    document.getElementById("checkbox").append(br,imgTag)
    
  const success = true;
  const myPromise = new Promise((resolve, reject) => {
    if (success) {
      setTimeout(function () {
        document.getElementById("h1").innerText="YOUR ITEMS ARE READY:"
        var input = document.querySelectorAll(".check");
   document.getElementById("checkbox").innerText = "";
   var res="";
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
        console.log(res=res+i+",");
      var div = document.createElement("div");
      var img = document.createElement("img");
      if (i === 0) {
        img.src =
          "https://b.zmtcdn.com/data/pictures/5/18695725/a1bb80a3bdb9968b0b937458ae6acfa8.jpg?fit=around|300:273&crop=300:273;*,*";
            var h1=document.createElement("h2")
            h1.innerText="BURGER"
          div.append(img,h1);
      }
      if (i === 1) {
        img.src =
          "https://b.zmtcdn.com/data/dish_photos/3d4/815fee5664cd1e8925fb4ffde5dc43d4.jpg?fit=around|130:130&crop=130:130;*,*";
          var h1=document.createElement("h2")
          h1.innerText="NOODLES"
          div.append(img,h1);
      }
      if (i === 2) {
        img.src =
          "https://b.zmtcdn.com/data/dish_photos/ab8/3a0dbc1a36265d80448f2babda0bfab8.jpg?fit=around|130:130&crop=130:130;*,*";
          var h1=document.createElement("h2")
          h1.innerText="MANCHURIAN"
          div.append(img,h1);
      }
      if (i === 3) {
        img.src =
          "https://b.zmtcdn.com/data/dish_photos/2ac/863f6165f88bdb8a601906c588af02ac.jpg?output-format=webp";
          var h1=document.createElement("h2")
          h1.innerText="PASTA"
          div.append(img,h1);
      }

      document.getElementById("checkbox").append(div);
    }
  }
  document.getElementById("orderid").innerText = "ORDER-ID:" + res;
        resolve("Order placed");
      }, 3000);
    } else {
      setTimeout(function () {
        reject("Oops Something went wrong");
      }, 2000);
    }
  });
  
  console.log(myPromise);
}

function selectAll() {
  var input = document.querySelectorAll(".check");
  for (let i = 0; i < input.length; i++) {
    input[i].checked = true;
  }
}
