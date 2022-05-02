# ds-figma-tokens

Dette repoet inneholder design tokens generert via Figma ved hjelp av pluginen [Figma Tokens](https://github.com/six7/figma-tokens).

Filen `tokens.json` synkroniseres med Figma via pluginen, og behøver ikke oppdateres manuelt.

## Figma prosjekt

https://www.figma.com/file/aBaP6WuuQvgQP365gM0WCD/Design-System-Course?node-id=0%3A1


## Ønsket læringsutbytte

* Hva Figma Tokens er
* Hvorfor det kan være nyttig
* Fordeler / ulemper med bruk av Figma Tokens
* Alternative løsninger

## Hva er egentlig 'Figma Tokens'?

Figma Tokens er en plugin til Figma som lar oss organisere, importere, eksportere design tokens i Figma. Med pluginen kan vi også sykronisere design tokens med et repo på GitHub, slik at vi kan forenkle jobben med å holde tokens oppdatert mellom Figma og eks. et designsystem som konsumerer tokens. 

På samme måte kan vi også synkronisere endringer i repoet med Figma, dersom vi eksempelvis gjør en oppdatering rett i `.json` filen.

Selv om synkroniseringen går begge veier kan det lønne seg å bestemme hva som skal være "source of truth" for tokens, for å sørge for en forutsigbar arbeidsflyt mellom design og utvikling. Dette vil typisk være Figma-prosjektet, der design hovedsakelig vil operere.

## Bør vi bruke Figma Tokens?

Selv og Figma Tokens er et aktivt open source prosjekt som foreløpig vedlikeholdes og videreutvikles hyppig, er det verdt å nevne at dette er en uoffisiell utvidelse til Figma, og at det ikke finnes noen garantier for at utvikling og vedlikehold vil fortsette i all fremtid.

Samtidig er det en stor fordel at tokens kan eksporteres til `.json`, slik at våre data aldri blir helt låst til pluginen.
