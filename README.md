# Horse API Project

Welkom bij het Horse API-project! Deze applicatie biedt een API om paarden, gebruikers en races te beheren. Hieronder vindt u de stappen om het project op te zetten en te laten werken, samen met een overzicht van gebruikte bronnen.

---

## Vereisten

Om dit project lokaal te draaien, hebt u het volgende nodig:

1. **Node.js** (versie 20 of later)
2. **MongoDB** (lokale of cloudgebaseerde database)
3. **npm** (Node Package Manager, meegeleverd met Node.js)
4. **Express.js** (webframework voor Node.js)

---

## Installatiestappen

Volg de onderstaande stappen om het project lokaal te draaien:

### 1. **Clone de Repository**
Clone deze repository naar uw lokale machine:
```bash
git clone <repository-url>
cd <repository-map>
```

### 2. **Maak een .env-bestand**
Maak een bestand genaamd `.env` in de hoofdmap van het project en voeg de volgende variabelen toe:
```env
PORT=3000
MONGO_URI=<jouw-mongodb-verbindingstring>
```
- **PORT**: De poort waarop de server draait (standaard: 3000).
- **MONGO_URI**: De verbindingstring voor uw MongoDB-database.

### 3. **Installeer Afhankelijkheden**
Zorg dat Express.js en andere benodigde pakketten worden geïnstalleerd:
Gebruik `npm` om alle benodigde pakketten te installeren:
```bash
npm install
```

### 4. **Start de Applicatie**
Start de server:
```bash
node app.js
```
De server draait nu op `http://localhost:3000`.

---

## API Testen

Gebruik een API-testtool zoals **Thunder Client** (in Visual Studio Code) of **Postman** om de endpoints te testen.

### Beschikbare Endpoints
Zie de [documentatiepagina](http://localhost:3000) voor een volledig overzicht van beschikbare endpoints, inclusief voorbeeldverzoeken en reacties.

---

## Gebruikte Bronnen

1. [Node.js Documentatie](https://nodejs.org/en/docs/)
2. [Express.js Documentatie](https://expressjs.com/)
3. [Mongoose Documentatie](https://mongoosejs.com/)
4. [MongoDB Documentatie](https://www.mongodb.com/docs/)
5. [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
6. [Stackoverflow](https://stackoverflow.com/)
7. [ChatGPT](https://chatgpt.com/)
---
