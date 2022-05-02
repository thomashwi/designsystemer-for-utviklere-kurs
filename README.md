# Designsystemer for utviklere

Repo for kurset "Designsystemer for Utviklere"

## Kom i gang

Kjør kommandoene under for å installere avhengigheter, bygge design tokens og starte Storybook

```bash
yarn                        # installer alle avhengigheter
yarn build:tokens           # genererer og eksporterer design tokens
yarn run:storybook          # starter storybook på http://localhost:6006
```

## Læringsutbytte

`README.md` filen i hvert repo har en liste som beskriver ønsket læringsutbytte for hvert av verktøyene.

## Struktur og workflow

Dette repoet er satt opp som et monorepo med følgende struktur og workflow:

* [**ds-figma-tokens**](./ds-figma-tokens/): Inneholder design tokens i råformat eksportert fra designsystemet på Figma gjennom verktøyet [Figma Tokens](http://lol). Tokens synkroniseres med Figma gjennom pluginen, og synkronisering kan gjøres begge veier. 

* [**ds-style-dictionary**](./ds-style-dictionary/): Inneholder style-dictionary prosjektet vårt med to konfigurasjoner. Begge disse er konfigurert til å lese og transformere design tokens til `.css`, `.scss`, `.less`, `.js` og `d.ts` filer.

* [**ds-storybook**](./ds-storybook/): Et minimalt komponentbibliotek. Inneholder React-komponenter og [stories](https://storybook.js.org/docs/react/writing-stories/introduction) som demonstrerer komponentene.

## Hvorfor denne strukturen?

Dette er ikke nødvendigvis den beste måten å strukturere et "real world" prosjekt på, men strukturen er valgt med hensikt om å kunne presentere flere ulike repoer på en organisert og strukturert måte. Samtidig kan dette illustrere hvordan vi lett kan knytte ting sammen for å skape en god workflow på tvers av flere verktøy.

## Videre arbeid

Dersom du ønsker å utforske designsystemer videre har vi satt sammen en liten samling ressurser [her](./RESOURCES.md).