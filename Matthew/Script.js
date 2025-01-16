function Game() {
  const game1 = document.getElementById("game").value;
 
  
const gameDetails = {
    "Rainbow Six Siege": "Matthew has achieved emerald rank in this game. Something only the best can do",
    Fortnite: "Matthew has played a staggering 81 days on this game.",
    "Call of Duty": "Matthew has beaten not just one but every single Call of Duty to exist",
    Minecraft: "Minecraft is one of Matthew's less strong games however he has a fun time playing it",
    Rust: "Something not many people can say, Matthew has played Rust for 16 hours without stopping",
    "Forza Horizons 5": "Matthew has reached level 1000 in Forza",
    "Grand Theft Auto 5": "Matthew has every plane in GTA 5 something not many do",
    Peggle: "Matthew has beaten both Peggle one and Peggle two",
    Cuphead: "Matthew has beaten all of cuphead.(so he says) ",
  };
  
  document.getElementById("print").innerText = gameDetails[game1];
}
