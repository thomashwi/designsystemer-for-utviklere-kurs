# ds-style-dictionary

Dette repoet inneholder vår style-dictionary konfigurasjon, med tilknyttede custom **matchers** og **transformers**.

## Tilgjengelige scripts

```yml
yarn run transform          # Hent tokens fra `ds-figma-tokens` og konverter de til et format som style-dictionary forstår
yarn run build              # Bygg design tokens til ./build folderen
yarn run build:export       # Bygg design tokens til ./build folderen og kopier output .scss fil til `ds-storybook`
yarn run build:examples     # Bygg eksempel-tokens fra katalogen "/examples"
```

## Ønsket læringsutbytte for gjennomgangen

* Hva style-dictionary er
* Hvordan man bruker style-dictionary
* Hvordan man bygger til flere plattformer
* Hvordan man konfigurerer egne matchers
* Hvordan man konfigurerer egne transformers

---

## Hvordan fungerer style-dictionary?

Når vi kjører style-dictionary så prosesserer den filen vi peker på i `source` feltet på rotnivå i [konfigurasjonsfilen](./config.json). 

I dette prosjektet kjører vi style-dictionary gjennom filen `build.js` som ligger på rotnivå i repoet. Denne importerer style-dictionary modulen, og knytter deretter på vår konfigurasjonsfil som nevnt over. Dermed vil denne konfigurasjonen være aktiv når vi kjører `build.js` filen med node.

I tillegg har vi noen tokens i filen vår som vi ønsker å manipulere litt når de behandles av style-dictionary. Vi har for eksempel noen box-shadow verdier, som vi gjerne vil omgjøre til verdier som kan brukes med css-regelen for box-shadows.

## Registrer en transform!

I `build.js` filen kan vi registrere en *transform* som skal kjøres på en token. La oss se på et eksempel:

```js
StyleDictionary.registerTransform({
  name: "ds-boxShadow",
  type: "value",
  transitive: false,
  matcher: isBoxShadow,
  transformer: transformBoxShadow,
});
```

Her registrerer vi en transform for å konvertere box-shadow verdien vi nevnte i forrige avsnitt. Vi gir den et navn som vi kan referere til i `config.json`, og spesifiserer at den skal kjøres på en *value* token.

De kanskje viktigste feltene i dette objektet er `matcher` og `transformer`.

## Matchers

Matcher-funksjoner brukes for å sjekke at tokenet er av den typen vi ønsker å oprerere på. I dette tilfellet er det en matcher for å sjekke om tokenet er en box-shadow.

Denne matcheren er meget enkel, og ser slik ut:

```js
function isBoxShadow(token) {
  return token.type === "boxShadow";
};
``` 

Ettersom alle boxShadow verdier har type "boxShadow", så trenger den ikke være mer kompleks en dette.
Når transformen kjører og treffer på en boxShadow verdi, vil den kjøre selve transformer funksjonen.

## Transformers

Transformer-funksjoner lar oss manipulere hvordan output verdien av en gitt token skal se ut. Denne tar i mot tokenet som har type lik "boxShadow" slik vi ba om i matcheren, og inneholder dermed alle verdiene fra tokenet.

Vi ser på transformer funksjonen som er brukt i dette eksemplet:

```js
function transformBoxShadow(token) {
  const { x, y, blur, spread, color } = token.value;
  return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
};
```

Her henter vi ut alle verdier fra tokenet og formaterer dem slik at de kan brukes rett i en css-regel.

Dette gir oss til slutt følgende css-verdier som output fra våre tokens:

```css
  --drop-shadow-heavy: 0px 4px 4px 0.5px #0000004d;
  --drop-shadow-medium: 0px 2px 4px 0.5px #0000004d;
  --drop-shadow-light: 0px 1px 4px 0.5px #0000004d;
```

Og dermer ser vi hvordan vi enkelt kan støtte design tokens i alle mulige former og fasonger, og enkelt håndtere et bredt spekter av mulige verdier - også utover det som er innebygget i verktøyet fra starten.

## Hva slags formater kan vi få ut?

Vår konfigurasjon er satt til å konvertere våre design tokens til formater som brukes på web, slik som `.css`, `.scss` og `.less**`. I tillegg bygger vi også til JavaScript (med tilhørende TypeScript definisjoner) for bruk med CSS-in-JS. Førstnevnte formater havner i katalogen "build/web/stylesheet" og sistnevnte havner i kategorien "build/web/code".

Vi kan også enkelt utvide denne konfigurasjonen til å generere output for bruk på andre platformer, som for eksempel Android, iOS og Flutter - støtte for dette er innebygget i verktøyet.

## Angående TypeScript

Det er fullt mulig å bruke TypeScript med style-dictionary, og modulen kommer med ferdige definerte typer klare for bruk. På tross av dette er den offisielle dokumentasjonen samt de offisielle eksemplene skrevet i plain JavaScript. Vi har derfor valgt å også gjøre det her, for ikke å legge til unødvendig kompleksitet utover det vi behøver.
