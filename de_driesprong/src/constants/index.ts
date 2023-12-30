import { dagingsmoor, spring_roll } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "menu",
    title: "Menu",
  },
  {
    id: "about_us",
    title: "Over ons",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


export const contact_text = {
  title: "Contact",
  phone: "+0546 658 685",
  facebook: "@De Driesprong",
  location: "Sibculoseweg 5, 7676 PA Westerhaar-Vriezenveensewijk"
}

export const about_us_text = {
  title: "Over ons",
  content: "Wij zijn een klein familie bedrijf die dit prachtige cafetaria hebben mogen overnemen per 2024. " +
    "We hebben besloten om weer de vertrouwde naam de Driesprong te gebruiken! \n" +
    "U kunt bij ons terecht voor al uw favorieten van de hoogste kwaliteit. \n" +
    "Wilt u een keer iets anders? Geen probleem! Ons grote assortiment biedt verschillende nieuwe gerechten. Voor ieder wat wilds. \n" +
    `Kom gezellig een keer langs of bestel telefonisch op ${contact_text.phone}`,
}

export const opening_hours_text = {
  title: "Openingstijden",
  content: "Maandag       gesloten \n" +
    "Dinsdag          11:30-21:00 \n" +
    "Woensdag     11:30-21:00 \n" +
    "Donderdag    11:30-21:00 \n" +
    "Vrijdag            11:30-22:00 \n" +
    "Zaterdag        11:30-22:00 \n" +
    "Zondag           11:30-21:00 \n"
}



export const home_text = {
  title: "Welkom bij Cafetaria de Driesprong",
  content: "Gelegen aan de Sibculoseweg 5 te Westerhaar kunt u dagelijks bij ons terecht voor een groot assortiment maaltijden, frites, snacks, belegde broodjes en salades."
}

export const advertisement_text = {
  title: "Probeert u ook eens",
}

export const images = [
  {
    src: { dagingsmoor }.dagingsmoor,
    title: "Patatje Daging Smoor",
    caption: "Na tientallen jaren ervaring in de Aziatische keuken presenteren wij u onze nieuwe creatie: de patatje daging smoor! " + 
    "Rundvlees gesmoord in een pikant indisch sausje gecombineerd met verse patat. Een speciaal patatje met een twist!",
    alt: "daging_smoor"
  },
  {
    src: { spring_roll}.spring_roll,
    title: "Loempia",
    caption: "Maak kennis met onze krokante loempia's! Altijd met de hand vers gemaakt, geeft " + 
    "ons traditionele recept een mix van authentieke Chinese smaken en moderne twists.",
    alt: "spring_roll"
  }
];

export const menu_text = {
  title: "Ons menu",
  content: "Klik hier voor ons assortiment."
}