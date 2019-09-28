# Moment 2, gulp

### Vad är automatiseringens syfte?

    Syftet med automatisering är att man kan jobba i ett avancerat filsystem med flera filer,tex olika css-filer för olika skärmstorlekar, man kan sedan slå ihop dessa och trycka ihop all text i dem för att få ner dem i storlek. Det finns också möjlighet att komprimera grafiska filer, det går också att konvertera till exempel SASS-filer till vanliga css-filer. 

### Vilka paket och verktyg har jag använt?

    Del använde jag för att ta bort min pub mapp det första som hände när gulp kör igång, valde denna för att du tipsade om den i föreläsningen. 

    Gulp-concat användes för att slå ihop både javascript-filer och css-filer. Detta var den första jag hittade och den fungerade väldigt bra för det jag ville göra.

    Pipeline-minify-css använde jag för att minifiera css-filer, testade något annat paket också men fick inte det att fungera men denna fungerade bra.

    Gulp-terser använde jag för att minifiera javascript-filer, testade även andra här så som gulp-uglify-es och gulp-uglify men även dessa krånglade. Googlade runt och hittade terser och den fungerade fint.

    Browser-sync användes för att lösa live-reload, testade först live-reload men den verkade vara riktad mot något chrome extension. 

### Beskrivning av systemet jag skapat.

    Det första som händer då man drar igång gulp i mitt projekt är att pub-mappen tas bort, detta för att säkerställa att det inte ligger filer och skräper där.

    Efter att detta gjorts kollas alla filsökvägar igenom och filer kopieras till en mapp som heter pub, denna har en struktur som separat map för bilder, js och css. Javascript och CSS-filer blir här ihopslagna och minifierade. 

    Efter att allt blivit kopierat dras watchtask igång, denna sätter igån live-reload i projektet och sedan ligger den och lyssnar på förändringar i systemet, när en förändring händer körs respektive funktion för att kopiera över förändringarna till pub-mappen.

### Har något extra lagts till?

    Har inte lagt till något extra för tillfället, det var lite som krånglade för mig så försökte bara bli klar. Hittade paket som minifierar bilder och grejer som jag funderar på att använda senare i projektet dock.

