//question 1
function InstagramPost(handle,content,views,likes){
    this.handle = handle
    this.content = content
    this.views = views
    this.likes = likes
    this.updatelikes = function(){
        return ++this.likes
    }
}
//question 2
let person1 = new InstagramPost ('Pastor ebi','Godloves you','5','7')
let person2 = new InstagramPost ('welness doctor','stay fit','7','1')


//question 3a
function createPerson(name,age,location){
    return {
        name,
        age,
        location
    }

}
const person = createPerson('musaDowodu','19','lekki')

//question 3b
function createJambScores(eng,govt,lit,crk,){
    return {
        eng,
        govt,
        lit,
        crk
    }
}
const scores = createJambScores('70','85','82','94')
const total = {...person,...scores}

// question 4
//you can clone an onject by using Object.assign and by using spread operator
const another =Object.assign({course:'Arts',scores})  //object.assign
const total2 = {...person,...scores} //spread operator


//question 5
const presidentialCanditate={
    AAC:'Omoleye Sowore',
    ACCORD:'christopher imulolen',
    APC:'bola ahmed tinubu',
    LP:'peter obi',
    NNPP:'Rabiu Nwankwaso',
    PDP:'Atiku Abubakar'
}
for (key in presidentialCanditate)
console.log(presidentialCanditate[key] +' ' +'is the presidential candidate for'+ ' '+key)
