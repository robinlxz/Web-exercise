class People {
    constructor(name="no name", type="normal", attack=5, hp=10,[weapon="empty",armor="empty"]=[]) {
        this.name = name;
        this.type = type;
        this.attack = attack;
        this.hp = hp;
        // this.weapon = weapon;
        this.equipment = {
            "weapon": weapon,
            "armor": armor
        };
    }
    showhp(){
        console.log(`The HP for "${this.name}" is ${this.hp}`);
    }
    speak(words){
        console.log(`"${this.name}" says "${words}"`);
    }
    get color(){
        let allColors = ["red", "blue", "green", "orange"];
        return allColors[Math.floor(Math.random() * allColors.length)]
    }
    
}
  
let guiHua = new People("Gui Hua", "helper", "5", "20");
let suYe = new People("Su Ye", "Magician", "20", "15");
let qingLuan = new People("Qing Luan", "Warrior", "15", "30")

// suYe.speak("I'm invisible.");
// suYe.showhp();
// console.log(guiHua.color);

qingLuan.equipment.weapon = "needle";
// console.log(qingLuan.equipment.weapon);
console.log(qingLuan);







