# 🏎 Chippr.dev SSR Optimization
Verbeter de performance van de Chippr.dev website uit sprint 9.

## 🖥 Serverside Performance Optimalisatie
Ik heb de Chippr.dev website uit sprint 9 geoptimaliseerd, deze website bevat een homepagina waarop alle projecten van Chippr worden getoond en bevat een detailpagina waarop het desbetreffende project beter kan worden bekeken met meer informatie en afbeeldingen.

<hr>

### ✋ Pre optimization

<img width="900" src="https://github.com/boudewijnbout/performance-matters-serverside-optimization/blob/main/public/images/Schermafbeelding%202022-04-29%20om%2012.28.27.png" />

In bovenstaande foto is te zien hoeveel bestanden er in totaal worden ingeladen bij het laden van de pagina, en hoe groot deze zijn qua bytes.
- Grootte in totaal: `627kb`
- Afgerond in: `201ms`

<hr>

<img width="900" src="https://github.com/boudewijnbout/performance-matters-serverside-optimization/blob/main/public/images/Schermafbeelding%202022-05-11%20om%2010.38.24.png" />

In bovenstaande foto is een lighthouse check te zien van de overzichtspagina. Over het algemeen is dit een goed resultaat, alleen zijn er nog een aantal verbeteringen te halen op het gebied van afbeeldingen. Deze verbeteringen staan als aanbevelingen gedocumenteerd in onderstaande link.

- [Aanbevelingen](https://github.com/boudewijnbout/performance-matters-serverside-optimization/edit/main/README.md#%EF%B8%8F-aanbevelingen)

<hr>

### 📦 Minifying
Ik heb ervoor gekozen om al mijn CSS bestanden te minifyen, omdat ik zag dat deze beide uit 266 bytes bestonden dit leek mij een getal wat ik makkelijk naar beneden kon brengen door mijn bestanden kleiner te maken. Daarnaast krijg je hier natuurlijk ook betere performance van.

Ik heb mijn CSS geminified door gebruik te maken van PostCSS. Ik heb eerst mijn CSS bestand ingeladen en hier vervolgens een node commando bij geschreven wat er voor zorgt dat er een nieuw `.min.css` bestand word aangemaakt. Deze kon ik dan in mijn `head` van de view linken en dit scheelde immens veel in de grootte van het bestand.

<hr>

### 🛣 Code splitting
Ik heb helaas in dit project geen gebruik kunnen maken van code-splitting, omdat ik geen gebruik heb gemaakt van client-side JavaScript.

<hr>

### 📬 Caching
Ik heb op alle requests een cache tijd van één dag gezet. Ik heb voor één dag gekozen, omdat het enige dynamische van de Chippr website de projecten zijn. Ik kan mij daarnaast niet voorstellen dat Chippr heel vaak een nieuw project op de website wil zetten. Misschien is één dag teveel, maar dat zou getest moeten worden als use-case.

<hr>

### 🤏 Compressie
Ik heb voor de compressie van mijn project gebruik gemaakt van de express compression package. Ik heb voor deze package gekozen, omdat deze eenvoudig te gebruiken was en een naadloze integratie heeft met ExpressJS.

<hr>

### 🕵🏻‍♂️ Aanbevelingen

Bij de lighthouse check werden een aantal verbeteringen op het gebied van afbeeldingen terug gegeven als resultaat, deze verbeteringen waren als volgt:

- `"Lever afbeeldingen in moderne indelingen".` Dit kan worden verbeterd door onze foto's van png in modernere bestandtypes over te zetten, zoals jpeg en jpg.

- `"Afbeeldingen hebben geen expliciete width en height".` Dit kan worden verbeterd door in de HTML een vaste begin waarde voor de width en height in te stellen, dit voorkomt `lay-out shifts`.

<hr>

### 🚀 Post optimization

<img width="900" src="https://github.com/boudewijnbout/performance-matters-serverside-optimization/blob/main/public/images/Schermafbeelding%202022-05-04%20om%2013.28.31.png" />


Zoals op bovenstaande foto te zien is, hebben de door mij genomen stappen enorm geholpen in het optimalizeren van de website. Het aantal resources is zelfs  2 keer zo klein geworden.

- Grootte in totaal: `246kb`
- Afgerond in: `147ms`

<hr>

<img width="900" src="https://github.com/boudewijnbout/performance-matters-serverside-optimization/blob/main/public/images/Schermafbeelding%202022-05-11%20om%2010.38.24.png" />

In lighthouse zijn er nog geen verbeteringen te zien, dit komt omdat ik de verbeteringen die lighthouse aangeeft nog niet heb doorgevoerd. Het is daarentegen wel al een groot verschil in performance als je kijkt naar de totale grootte van de pagina en de laadtijd. Deze getallen zijn beide enorm naar beneden gegaan.

<hr>

## Bronnen
[Post CSS](https://postcss.org/)
<br>
[Cache headers](https://regbrain.com/article/cache-headers-express-js)
<br>
[Express compression](http://expressjs.com/en/resources/middleware/compression.html)

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
