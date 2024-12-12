//let tasks = ["go to gym", "do homework", "make dinner"];
//console.log(tasks[0]);
//
//tasks[0] = "make dinner";
//console.log(tasks);
//
//tasks.push("take a shower");
//console.log(tasks);
//
////tasks.pop();
////console.log(tasks);
//
//
//let groceries = ["milk", "fruit", "bread", "eggs"];
//groceries.splice(1, 1, "ice cream");
//grocies.splice(0, 1);
////alert(groceries);
//
//let items = ["phone", "shoes", "toothbrush"];
//console.log(items);
//items.push("computer", "basketball");
//console.log(items);
//items.pop("basketball");
//console.log(items);
//items.splice(1, "sink");
//console.log(items);
//items.splice(2, 1);
//console.log(items);
//
//let numbers = ["1", "2", "3"];
//numbers.splice(0, "4");
//numbers.splice(2, 1, "5");


let animals = ["orca", "shark", "lion", "tiger", "velociraptor" ];
let animals1 = [];
for (let i = 0; i < animals.length; i++){
	console.log(animals[i]);
}
for (let i = 0; i < animals.length; i++){
	animals[i] = animals[i].toUpperCase();
	animals1.push(animals[i]);
}
	console.log(animals1);


	
for (let i = 0; i < animals1.length; i++){
	console.log(animals1[i]);
}


for (let i = 2; i < animals1.length; i++){
	animals1.pop();
}






let score = [33, 37, 46, 53, 67, 72, 79, 83, 92, 99];
let scoreBonus = [];
for (let i = 0; i < score.length; i++){
	scoreBonus.push(score[i]+5);
	
}
for (let i = 0; i < score.length; i++){
	if (score[i] < 50) {
	score.splice(i,1,"retake");
}}


console.log(scoreBonus);
console.log(score);




