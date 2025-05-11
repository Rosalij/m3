# repository för REST API
Detta repository innehåller kod för ett enklare REST API byggt med Express. APIet är byggt för att hantera tidigare arbetserfarenheter och det går att lägga till och ta bort erfarenheter.
Grundläggande funktionalitet för CRUD (Create, Read, Update, Delete) är implementerad.

## Länk
En live testversion av APIet finns tillgänglig på följande URL:(https://moment32.netlify.app/)

## Installation, databas
APIet använder en MONGODB atlas-databas.
Klona ner källkodsfilerna, kör kommando npm install för att installera nödvändiga npm-paket. Kör installations-skriptet install.js. 
API:et skapar MongoDB documents i JSON format enligt följande: {
_id (skapas automatiskt), company: string, jobtitle: string, location: string }



## Användning
Nedan finns beskrivet hur man nå APIet på olika vis:

|Metod  |Ändpunkt     |Beskrivning                                                                           |
|-------|-------------|--------------------------------------------------------------------------------------|
|GET    |/experiences |Hämtar alla lagrade arbetserfarenheter.                                                      |                                    |
|POST   |/experiences |Lagrar en ny erfarenhet. Kräver att erfarenhets-input skickas med.                         |
|PUT    |/experiences/:_ID |Uppdaterar en existerande erfarenhet med angivet _ID. Kräver att input skickas med. |
|DELETE |/experiences/:_ID |Raderar en erfarenhet med angivet _ID.                                                       |

Ett kurs-objekt returneras/skickas som JSON med följande struktur:
```
{  "_Id": "68208453048d88233029d9af,
   "company": "Glassföretaget",
   "jobtitle": "Glassförsäljare",
   "location": "Köping",
}
```
