class Human {
    constructor(name, gender, weight) {
        this.name = name
        this.gender = gender
        this.weight = weight
    }
    Human(){

    }
    isMale(){
        if (this.gender === 'male'){
            return true
        }
        else{
            return false
        }
    }
    setGender(gender){
        //check ===
       this.gender = gender
    }
    checkApple(apple){
        return apple.weight
    }
    eat(apple){
        if(apple.weight > 0){
            apple.decrease()
            return this.setWeight()
        } else{
            return false
        }

    }
    say(text){
        return text
    }
    getName(){
        return this.name
    }
    setName(name){
        this.name = name
    }
    getWeight(){
        return this.weight
    }
    setWeight(){
        this.weight++
    }
}