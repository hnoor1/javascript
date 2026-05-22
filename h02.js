// Harjutus 10
// Klassikaline funktsioon
function teremaailm(nimi) {
    console.log("Tere" + nimi)
    console.log(`Tere ${nimi}`)
}
teremaailm("maailm")

//anonüümne funktsioon
const terejalle = function(nimi){
    console.log("Tere" +nimi)
}
terejalle("kosmos")

// noolefunktsioon
tere = (nimi) => {
    console.log("Tere " +nimi)
}

tere("nool")

//Harjutus 9.2

//Argumendiga funktsioon
// Kirjuta funktsioon nimega `kuupaevEesti`, mis kuvab konsoolile praeguse kuupäeva ja kuu eesti keeles. 
// Argumendiks kuupäev kujul 19.07.23

kuupaevEesti =(kp) => {
    let kuud =["", "jaanuar", "veebruar"]
    let kuu = kuud[parseInt(kp.split(".")[1])]
    console.log(kp.split(".")[0] +"." + kuu + " " + kp.split(".")[2])
}
kuupaevEesti("19.02.2023")

//Harjutus 9.4
//Salajane sõnum
//Kirjuta noolefunktsioon nimega salajaneSonum, mis võtab sisendiks sõnumi stringi ning tagastab selle sõnumi põhjal salajase versiooni. 
//Salajase versiooni loomiseks asendatakse kõik täishäälikud (vokaalid) tärniga (*), jättes konsonandid muutumatuks.

salajaneSonum = (sona) => {
    let uussona = ""
    let vokaalid ="aeiouõäöüAEIOUÕÄÖÜ"
    for (let i = 0; i < sona.length; i++) {
        const taht = sona [i];
        if(vokaalid.includes(taht)) {
        uussona += "*"
        } else {
            uussona += taht
        }
    }
    console.log(uussona)
}
salajaneSonum("noolefunktsioon")
