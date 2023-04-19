var startDatum = new Date('01/26/2004');

var eindDatum = new Date();

var verschil = eindDatum.getTime() - startDatum.getTime();

var aantalDagen = Math.floor(verschil / (1000 * 60 * 60 * 24));

console.log('Het aantal dagen tussen 26/01/2004 en vandaag is: ' + aantalDagen + ' dagen.');