import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const deTuerkeiTransportKosten: SeoPageData = {
  slug: "de/tuerkei-transport-kosten",
  lang: "de",
  title: "Transportkosten Türkei: Was kostet ein Transport wirklich?",
  description:
    "Was kostet ein Transport in die Türkei? Wie Strecke, Volumen und Saison den Preis bilden, wie Sie Ihre Kubikmeter berechnen und was im Preis enthalten ist.",
  h1: "Transportkosten Türkei-Deutschland: So entsteht der Preis",
  intro: [
    "Wer nach den Kosten für einen Transport in die Türkei sucht, bekommt selten eine Zahl und fast immer den Satz „Das hängt davon ab“. Das stimmt sogar – nur hilft es niemandem weiter. Deshalb erklärt diese Seite offen, woraus sich der Preis zusammensetzt, welche Stellschrauben Sie selbst in der Hand haben und ab wann sich eine Komplettladung gegenüber einer Beiladung rechnet.",
    "Der Grundgedanke ist einfach: Bezahlt wird die Strecke und der Laderaum, den Sie belegen. Alles andere sind Aufschläge oder Nachlässe auf diese zwei Größen. Wenn Sie das Prinzip einmal verstanden haben, können Sie jedes Angebot auf dem Markt einordnen – auch unsere Preise unten in der Tabelle.",
  ],
  priceTable: {
    caption: "Richtpreise: kompletter Transporter (ca. 13,5 m³) in die Türkei",
    rows: [
      { route: "Berlin → Istanbul", price: priceRange("Berlin") },
      { route: "München → Istanbul", price: priceRange("Münih") },
      { route: "Frankfurt → Istanbul", price: priceRange("Frankfurt") },
      { route: "Köln → Istanbul", price: priceRange("Köln") },
      { route: "Hamburg → Istanbul", price: priceRange("Hamburg") },
      { route: "Wien → Istanbul", price: priceRange("Viyana") },
      { route: "Amsterdam → Istanbul", price: priceRange("Amsterdam") },
    ],
    disclaimer:
      "Die Werte gelten für einen exklusiv gebuchten Transporter mit rund 1.300 kg Nutzlast, 5 Europaletten und etwa 13,5 m³ Laderaum, inklusive Transport und Transportversicherung. Zölle, Einfuhrabgaben und Steuern sind nicht enthalten. Bei einer Beiladung zahlen Sie nur den genutzten Laderaum, der Preis liegt dann entsprechend niedriger. Ihren verbindlichen Preis berechnen Sie in der App in wenigen Sekunden.",
  },
  sections: [
    {
      heading: "Zwei Faktoren: Strecke und Volumen",
      paragraphs: [
        "Jeder seriöse Preis für einen Transport in die Türkei entsteht aus zwei Größen. Die erste ist die Strecke. Ein Fahrzeug von Hamburg nach Istanbul legt gut 800 Kilometer mehr zurück als eines aus München – das sind zusätzliche Fahrerstunden, zusätzlicher Diesel und mehr Maut. Deshalb liegen norddeutsche Ladestellen systematisch über süddeutschen und österreichischen, und deshalb ist Wien in der Tabelle oben günstiger als Hamburg, obwohl beides „nach Istanbul“ heißt.",
        "Die zweite Größe ist das Volumen, nicht das Gewicht. Ein Transporter ist fast immer voll, bevor er schwer ist: 13,5 m³ Laderaum sind in der Regel eher ausgeschöpft als 1.300 kg Nutzlast. Ein Umzug mit Sofa, Matratzen und Kartons wiegt selten mehr als 700 kg, füllt aber den kompletten Laderaum. Umgekehrt können drei Paletten Maschinenteile die Nutzlast ausreizen und trotzdem nur die Hälfte des Raums belegen. Berechnet wird immer das, was zuerst voll ist – bei privaten Sendungen praktisch immer das Volumen.",
        "Alles Weitere sind Modifikatoren dieser beiden Werte: Termin, Adresslage, Warenart, Saison. Wenn ein Angebot Ihnen einen Preis nennt, ohne nach Volumen und Zieladresse zu fragen, ist es keine Kalkulation, sondern ein Lockangebot.",
      ],
    },
    {
      heading: "Komplettladung oder Beiladung: Was rechnet sich wann?",
      paragraphs: [
        "Bei einer Komplettladung mieten Sie das Fahrzeug exklusiv. Sie bezahlen die Fahrt, nicht die Kubikmeter – ob Sie 8 oder 13 m³ nutzen, ändert am Preis nichts. Dafür bestimmen Sie den Termin, das Fahrzeug fährt ohne Zwischenstopps zu Ihrer Zieladresse, und die Laufzeit ist die kürzestmögliche.",
        "Bei der Beiladung teilen Sie sich den Laderaum mit anderen Sendungen derselben Route und bezahlen nur den Anteil, den Sie belegen. Dafür richtet sich der Abfahrtstermin nach der Route, und bei der Zustellung kann eine weitere Adresse angefahren werden. Wichtig: Auch bei der Beiladung wird Ihre Ladung nicht umgeschlagen – sie bleibt vom Beladen bis zum Entladen auf demselben Fahrzeug.",
        "Die Faustregel aus der Praxis: Bis etwa fünf bis sechs Kubikmeter ist die Beiladung fast immer günstiger. Ab ungefähr acht bis neun Kubikmetern nähert sich der Beiladungspreis dem Komplettpreis so weit an, dass die Komplettladung mit ihrem festen Termin und der kürzeren Laufzeit meist das bessere Geschäft ist. Dazwischen liegt der Bereich, in dem es sich lohnt, beide Varianten berechnen zu lassen.",
      ],
      list: [
        "Beiladung sinnvoll: einzelne Möbelstücke, 10 bis 30 Kartons, Teilhaushalt, eine bis zwei Paletten, flexibler Termin",
        "Komplettladung sinnvoll: kompletter Haushalt ab zwei Zimmern, fester Ladetag, zeitkritische Ware, empfindliche oder hochwertige Güter",
        "Beides berechnen lassen: alles zwischen 6 und 9 m³ – hier entscheidet der Terminwunsch häufiger als der Preis",
      ],
    },
    {
      heading: "Wie berechne ich mein Volumen in Kubikmetern?",
      paragraphs: [
        "Sie brauchen dafür kein Aufmaß vom Fachmann, ein Zollstock genügt. Messen Sie Länge, Breite und Höhe jedes größeren Stücks in Zentimetern, multiplizieren Sie die drei Werte und teilen Sie das Ergebnis durch 1.000.000. Heraus kommt das Volumen in Kubikmetern.",
        "Ein Beispiel: Eine Kommode mit 120 × 45 × 80 cm ergibt 120 × 45 × 80 = 432.000, geteilt durch 1.000.000 sind das 0,43 m³. Addieren Sie die Einzelwerte aller Möbel und rechnen Sie die Kartons dazu. Für eine schnelle Schätzung reichen diese Erfahrungswerte:",
      ],
      list: [
        "Standard-Umzugskarton (ca. 60 × 33 × 34 cm): rund 0,1 m³ – zehn Kartons ergeben also etwa einen Kubikmeter",
        "Kühlschrank oder Waschmaschine: jeweils rund 1 m³ inklusive Verpackung",
        "Doppelbett mit Matratze, zerlegt: rund 1,5 bis 2 m³",
        "Kleiderschrank, zerlegt: rund 1,5 m³ – nicht zerlegt schnell das Doppelte",
        "Sofa, dreisitzig: rund 2 bis 2,5 m³",
        "Eine Europalette belegt im Fahrzeug rund 2,7 m³; ein Transporter mit 13,5 m³ nimmt genau fünf davon auf",
      ],
    },
    {
      heading: "Was den Preis sonst noch beeinflusst",
      paragraphs: [
        "Neben Strecke und Volumen gibt es vier Faktoren, die ein Angebot spürbar bewegen – nach oben wie nach unten:",
      ],
      list: [
        "Saison: Juni bis September und die Wochen vor den Feiertagen sind die Hauptreisezeit; die Nachfrage nach Fahrzeugen steigt und mit ihr der Preis. Wer im Spätherbst oder im Februar umzieht, fährt oft am unteren Ende der Spanne.",
        "Adresslage: Eine Ladestelle mit Rampe oder Hofzufahrt ist günstiger als ein viertes Obergeschoss ohne Aufzug in einer Straße mit Halteverbot. Enge Altstadtgassen, in die kein Sprinter einfahren darf, bedeuten Tragestrecke – und Tragestrecke ist Arbeitszeit.",
        "Warenart: Für gebrauchten Hausrat, Handelsware und Neuware gelten unterschiedliche Zollverfahren mit unterschiedlichem Aufwand. Empfindliche, sperrige oder besonders wertvolle Güter brauchen mehr Sicherung im Laderaum und eine höhere Deckungssumme.",
        "Eilzuschlag: Ein Fahrzeug, das noch heute an der Ladestelle stehen soll, muss aus einer laufenden Disposition herausgelöst werden. Diese Sonderfahrten liegen über dem Normalpreis. Wer eine Woche Vorlauf mitbringt, zahlt regelmäßig weniger.",
      ],
    },
    {
      heading: "Was im Preis enthalten ist – und was nicht",
      paragraphs: [
        "Damit Sie Angebote vergleichen können, muss klar sein, wo die Leistung endet. In unseren Preisen enthalten sind: die Abholung an der angegebenen Adresse, der Transport ohne Umladen bis zur Zieladresse, die Ladungssicherung, die Transportversicherung, Maut und Kraftstoff auf der gesamten Strecke, die GPS-Ortung sowie die Erstellung der Frachtpapiere.",
        "Nicht enthalten sind Zölle, Einfuhrabgaben und Steuern, die im Bestimmungsland auf die Sendung erhoben werden. Diese Beträge fließen nicht an die Spedition, sondern an den Staat, und ihre Höhe hängt von der Warenart, vom Wert und vom anwendbaren Zollverfahren ab. Ebenfalls separat zu betrachten sind das Verpackungsmaterial, wenn Sie es über uns beziehen, sowie Zusatzleistungen wie Möbeldemontage oder Tragehilfe.",
        "Für gebrauchten Hausrat bei einer Wohnsitzverlegung gilt ein anderer Rahmen als für Handelsware, und für Handelsware zwischen der EU und der Türkei gelten wiederum die Regeln der Zollunion mit den zugehörigen Nachweisdokumenten. Feste Beträge oder Wertgrenzen nennen wir hier bewusst nicht: Die Vorschriften ändern sich, und die Einstufung hängt vom Einzelfall ab. Lassen Sie die aktuell geltenden Regelungen vor der Buchung von einem Zollagenten oder der zuständigen Behörde bestätigen – dieser Text ist eine Orientierungshilfe und ersetzt keine offizielle Zoll- oder Rechtsberatung.",
      ],
    },
    {
      heading: "Warum sehr günstige Angebote riskant sein können",
      paragraphs: [
        "Ein Preis, der deutlich unter allen anderen liegt, hat einen Grund – und der ist selten Effizienz. Häufig fehlt etwas im Angebot, das später separat berechnet wird, oder die Kalkulation geht davon aus, dass Sie am Ladetag nicht mehr aussteigen können. Bevor Sie zusagen, lohnen sich fünf Prüfungen:",
      ],
      list: [
        "Steht der Preis schriftlich mit Abhol- und Zieladresse, Volumen und Termin? Ein Preis per Kurznachricht ohne Auftragsbestätigung ist keine Zusage.",
        "Ist der Preis fest oder ein „ab“-Preis? Fragen Sie ausdrücklich, unter welchen Umständen er sich noch ändern kann, und lassen Sie sich die Antwort schriftlich geben.",
        "Wie ist die Sendung versichert und mit welcher Deckungssumme? „Selbstverständlich versichert“ ist keine Auskunft – die Summe und die Grundlage gehören ins Angebot.",
        "Wird umgeschlagen? Fragen Sie direkt, ob die Ladung unterwegs auf ein anderes Fahrzeug wechselt und wie viele Tage sie in einem Zwischenlager steht. Genau hier entstehen die Wochen, die im Angebot nicht auftauchen.",
        "Wer haftet, und wer ist erreichbar? Firmensitz, Kontaktdaten und ein benannter Ansprechpartner sollten vor der Anzahlung bekannt sein. Hohe Vorkasse ohne Vertrag ist ein Warnsignal.",
      ],
    },
  ],
  faq: [
    {
      question: "Was kostet ein Transport in die Türkei?",
      answer:
        "Für einen exklusiv gebuchten Transporter mit rund 13,5 m³ liegt der Preis ab Berlin typischerweise bei " +
        priceRange("Berlin") +
        ". Ab süddeutschen und österreichischen Ladestellen ist er niedriger, ab Norddeutschland höher, weil die Strecke länger ist. Wenn Sie nur einen Teil des Laderaums brauchen, zahlen Sie bei der Beiladung nur die genutzten Kubikmeter.",
    },
    {
      question: "Wie berechne ich meine Kubikmeter?",
      answer:
        "Länge, Breite und Höhe in Zentimetern messen, miteinander multiplizieren und durch 1.000.000 teilen. Ein Schrank mit 200 × 60 × 220 cm ergibt 2.640.000 geteilt durch 1.000.000, also 2,64 m³. Als Anhaltspunkt: zehn Umzugskartons entsprechen etwa einem Kubikmeter, ein Kühlschrank rund einem Kubikmeter, eine Europalette belegt im Fahrzeug rund 2,7 m³.",
    },
    {
      question: "Ist der genannte Preis verbindlich?",
      answer:
        "Der Preis, den Sie bei der Buchung erhalten, ist ein Festpreis für die angegebenen Daten: Abholadresse, Zieladresse, Volumen und Termin. Er ändert sich nur, wenn sich diese Angaben ändern – etwa wenn am Ladetag deutlich mehr Volumen bereitsteht als angemeldet. Nachforderungen ohne Anlass gibt es nicht.",
    },
    {
      question: "Sind Zoll und Steuern im Preis enthalten?",
      answer:
        "Nein. Der Preis deckt Transport, Ladungssicherung und Transportversicherung ab. Zölle, Einfuhrabgaben und Steuern werden im Bestimmungsland erhoben und richten sich nach Warenart, Wert und Zollverfahren. Da sich diese Regelungen ändern, klären Sie Ihren konkreten Fall bitte vorab mit einem Zollagenten oder der zuständigen Behörde ab; diese Angaben ersetzen keine offizielle Beratung.",
    },
    {
      question: "Beiladung oder Komplettladung – was ist günstiger?",
      answer:
        "Bis etwa fünf bis sechs Kubikmeter ist die Beiladung fast immer die günstigere Lösung, weil Sie nur den genutzten Laderaum bezahlen. Ab ungefähr acht bis neun Kubikmetern liegt der Komplettpreis so nah daran, dass sich die exklusive Buchung mit festem Termin und kürzerer Laufzeit meist mehr lohnt. Dazwischen lassen Sie am besten beide Varianten rechnen.",
    },
    {
      question: "Gibt es Zuschläge, mit denen ich rechnen muss?",
      answer:
        "Möglich sind Aufschläge für sehr kurzfristige Abholung, für schwierige Ladestellen ohne Aufzug oder Zufahrt, für Hochsaison im Sommer und vor Feiertagen sowie für besonders empfindliche oder hochwertige Güter mit erhöhter Deckungssumme. Alle diese Punkte werden im Angebot ausgewiesen, bevor Sie buchen – nicht nachträglich auf der Rechnung.",
    },
  ],
  related: [
    { slug: "de/spedition-tuerkei", label: "Spedition Türkei: Express-Direktfahrten" },
    { slug: "de/umzug-in-die-tuerkei", label: "Umzug in die Türkei: Hausrat von Tür zu Tür" },
  ],
};

export default deTuerkeiTransportKosten;
