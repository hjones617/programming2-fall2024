//let age = 20;
//
//if (age >= 18) {
//  alert("you are an adult!!!!!");
////} else {
////  alert("you are not an adult!!!");
////}
//
////let score = 87;
////
////if (score >= 89) {
////  alert("You have an A!");
////if (score >= 79) {
////  alert("You have an B!");
////if (score >= 69) {
////  alert("You have an C!");
////if (score >= 59) {
////  alert("You have an D!");
////} else  {
////  alert("You Failed!!");
//
//let temp = 28;
//let condition = "sunny";
//
//if(temp >= 70 && condition == "sunny") {
//  alert("wear a tshirt");
//}
//else if(temp > 40 && (condition == "rainy" || condition == "stormy")) {
//    alert("wear a raincoat");
//}
//
//else if(temp > 30 || condition == "snowy") {
//    alert("wear a winter coat");
//}
//
//else if(temp > 30 && (temp < 50 )) {
//    alert("wear a coat");
//}
//
//else if(temp > 50 && (temp < 70 )) {
//    alert("wear a hoodie");
//}




function Enter() {
  const username = document.getElementById("usernameInput").value;
  const password = document.getElementById("passwordInput").value;

  if (username == "Hjones" && password == "MNR34") {
    alert("Welcome!");
  }
  else {
      alert("Nah");
  }

}