# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.


## Jij

### Ontwerper:
Luuk van den Bor

#### Je startniveau:
Mijn startniveau is: Blauw


# Je plan

<details open>
  <summary>De eerste versie/schets van je ontwerp & je persoonlijke uitdaging</summary>

  ### De eerste versie/schets:
  <img src="readme-images/schets.png" width="375px" alt="eerste versie/schets">

  ### Je ambitie:
  Aan deze technieken/punten wil ik werken:
  - Animatie
  - Grid gebruik
  - Misschien klein stukje javascript (als het mogelijk is)

</details>


## Voortgang/Feedback 1

<details>
  <summary>Mijn bevindingen + wijzigingen (minimaal 5)</summary>

  ### Bevindingen:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

  <img src="readme-images/feedback.png" width="375px" alt="miro feedback">

  Feedback punten:

  Je zou kunnen kiezen voor een play/mute button zodat er continue muziek loopt van de desbetreffende serie

  De detailpagina's in de stijl aanpassen per game.

  Als je wilt animeren kan je de karakters misschien uit beeld naar recht sliden en weer in beeld sliden met de gekozen animatie

  Je kunt nadenken over easter eggs vanuit de game

  Progressive Disclosure met karakter misschien

  Delays toevoegen voor weergave info

  #### Oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).

  <img src="readme-images/vervolgschets.png" width="375px" alt="nieuwe schets met interacties">

  Op het eerste scherm heb ik de overview weergegeven met de hover animatie om de aparte games te tonen.

  Op het tweede scherm zie je per game het overzicht waarbij de elementen inschuiven op het moment dat je op de background klikt.

  Op het derde scherm heb ik een animatie uitgelicht van het karakter waarbij je met een dubbelklik (of misschien 1 klik) het element een sprong laat maken of misschien een woosh (even kijken wat haalbaar is).

  Op het laatste scherm heb ik uitgelicht dat met een button je de muziek van de game kan afspelen.

  Als ik nog tijd over heb wil ik nog een easter egg toevoegen. Eerst maar focussen op bovenstaande punten.

</details>


## Voortgang/Feedback 2

<details>
  <summary>Mijn bevindingen + wijzigingen (minimaal 5)</summary>

  <img src="readme-images/feedback2_1.png" width="375px" alt="miro feedback">

  <img src="readme-images/feedback2_2.png" width="375px" alt="miro feedback">

  ### Bevindingen:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

  Verzorging:
  - Als je het scherm niet te veel verkleint is het goed responsive. Bij meer dan 50% vallen delen buiten het veld en zijn de characters te groot.

Semantische code
  - Alt text ontbreekt nog.

Nette code
  - In  CSS root staat een kleur.
  - Je zou meer witruimte kunnen gebruiken.
  - Uitleg ontbreekt nog.
  - Veel gebruik van PX, geen relatieve units.
  - Als je 1 x de keyframe van opacity hebt aangemaakt, moet je hem dan nog herhalen?
  - Afmetingen foto's en text grootte wordt steeds herhaald, deze kan in 1x worden geschreven.
  - Nog geen bronnen opgenomen, maar misschien NVT.

  #### Oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).

  - Alt text toegevoegd
  - Custom properties toegevoegd voor de kleuren settings
  - Alle elementen met px veranderd naar em
  - Alle algemene styling per 1 element toegepast en herhaling eruit gehaald
  - Afbeelding groottes aangepast
  - Bronnen in styling notities gezet

</details>


## Voortgang/Feedback 3

<details>
  <summary>Mijn bevindingen + wijzigingen (minimaal 5)</summary>

  <img src="readme-images/feedback3.png" width="375px" alt="miro feedback">

  ### Bevindingen:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

  - Concept en details passen nog niet goed bij elkaar
  - Styling kan strakker
  - Code bij elkaar positioneren
  - Technische problemen: Witruimte ontstaat aan zijkant
  - Meer animaties toevoegen

  #### Oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).

  - Concept strakker uitgewerkt. Nu een quest game ervan gemaakt dat je per game een verstopt element moet zoeken en daar op moet klikken zodat er een animatie activeert.
  - Schaduwen toegevoegd, overgangen smoother laten lopen (Sanne), tekst styling van de quest passend gemaakt. Concept voelt nu als een geheel
  - Alle code semantisch correct neergezet (volgens mij geheel kloppend), code bij elkaar gepositioneerd en duidelijk titels gegeven
  - Witruimte probleem opgelost door Sanne. Het probleem was dat de afbeeldingen in de div uit de div staken als die opx breed was.
  - Animaties per game toegevoegd met elementen (krokodil, vogel, kat, octopus en pepsiflesje (easter egg)) die te maken hebben met de game.

</details>


## Reflectie

<details>
  <summary>Mijn eindresultaat & persoonlijke ontwikkeling</summary>

  ### Je uitkomst - karakteristiek screenshot(s):
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="final ontwerp">


  ### Dit ging goed/Heb ik geleerd:
  Korte omschrijving met plaatje(s)

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatje(s)

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>




## Bronnenlijst

<details open>
<summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

1. Bron voor box shadow: https://stackoverflow.com/questions/9182978/semi-transparent-color-layer-over-background-image
2. Bron voor transform - translate3d (smoother verloop animatie vogel): https://www.kirupa.com/html5/animating_movement_smoothly_using_css.htm
3. Bron voor de laatste links, dus click + toggle: Tom van den Berg (Student)
4. Bron voor het witruimte probleem: Sanne 't Hooft

</details>
