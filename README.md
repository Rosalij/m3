# repository för REST API
Detta repository innehåller kod för ett enklare REST API byggt med Express. APIet är byggt för att hantera tidigare arbetserfarenheter och det går att lägga till och ta bort erfarenheter.
Grundläggande funktionalitet för CRUD (Create, Read, Update, Delete) är implementerad.

## Länk
En live testversion av APIet finns tillgänglig på följande URL: [https://test-vmk0.onrender.com/]

## Installation, databas
APIet använder en SQLITE3-databas.
Klona ner källkodsfilerna, kör kommando npm install för att installera nödvändiga npm-paket. Kör installations-skriptet install.js. 
Installations-skriptet skapar databastabeller enligt nedanstående:
|Tabell-namn|Fält  |
|--|--|
|experiences| **id**int PK autoincrement, **company** varchar, **jobtitle** varchar, **location** varchar  |


## Användning
Nedan finns beskrivet hur man nå APIet på olika vis:

|Metod  |Ändpunkt     |Beskrivning                                                                           |
|-------|-------------|--------------------------------------------------------------------------------------|
|GET    |/workexperience |Hämtar alla lagrade arbetserfarenheter.                                                      |                                    |
|POST   |/workexperience |Lagrar en ny erfarenhet. Kräver att erfarenhets-input skickas med.                         |
|PUT    |/workexperience/:ID |Uppdaterar en existerande erfarenhet med angivet ID. Kräver att input skickas med. |
|DELETE |/workexperience/:ID |Raderar en erfarenhet med angivet ID.                                                       |

Ett kurs-objekt returneras/skickas som JSON med följande struktur:
```
{  "Id": "47",
   "company": "Glassföretaget",
   "jobtitle": "Glassförsäljare",
   "location": "Köping",
}
```
