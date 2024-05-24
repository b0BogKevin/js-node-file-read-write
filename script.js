const fs = require('fs')
const os = require('os')


if (!fs.existsSync('zene')) {
    fs.mkdir('zene', err => {
      if (err) {
        console.log(err);
      }
      console.log('folder created');
    });
}
let zeneszoveg= `Az ember végül homokos,
szomorú, vizes síkra ér,
szétnéz merengve és okos
fejével biccent, nem remél.
 
Én is így próbálok csalás
nélkül szétnézni könnyedén.
Ezüstös fejszesuhanás
játszik a nyárfa levelén.
 
A semmi ágán ül szivem,
kis teste hangtalan vacog,
köréje gyűlnek szeliden
s nézik, nézik a csillagok.
 
Vas-színű égboltban...
 
Vas-színű égboltban forog
a lakkos, hűvös dinamó.
Óh, zajtalan csillagzatok!
Szikrát vet fogam közt a szó - -
 
Bennem a mult hull, mint a kő
az űrön által hangtalan.
Elleng a néma, kék idő.
Kard éle csillan: a hajam - -
 
Bajszom mint telt hernyó terül
elillant ízű számra szét.
Fáj a szívem, a szó kihül.
Dehát kinek is szólanék - -`;

fs.writeFile("zene/zene.txt",zeneszoveg, err=>{
if (err) {
  console.log(err)
}
console.log("file created")})

fs.readFile('zene/zene.txt', (err, data) => {
  if (err) {
    console.log(err);
  }  
  console.log(data.toString());
});