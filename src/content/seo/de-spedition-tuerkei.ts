import type { SeoPageData } from "./seoData";
import { priceRangeDe as priceRange } from "./seoData";

const deSpeditionTuerkei: SeoPageData = {
  slug: "de/spedition-tuerkei",
  lang: "de",
  hreflangGroup: "express-b2b",
  title: "Spedition Türkei | Express-Direktfahrt ohne Umladen",
  description:
    "Spedition für zeitkritische Sendungen in die Türkei: Sonderfahrt im Express-Sprinter, ohne Umladen, Laufzeit 24-40 Stunden, mit Sendungsstatus.",
  h1: "Spedition Türkei: Express-Transporte ohne Umladen",
  intro: [
    "Wenn eine Sendung in die Türkei termingebunden ist, hilft der günstigste Frachtsatz wenig. Entscheidend ist, ob die Ware am zugesagten Tag am Werkstor steht. RouteEU fährt zeitkritische Sendungen zwischen Deutschland und der Türkei als Direktfahrt: ein Fahrzeug, eine Ladung, kein Hub, kein Umschlag, kein Zwischenlager. Was in Stuttgart geladen wird, wird in Bursa entladen – von denselben zwei Fahrern.",
    "Der Express-Sprinter fasst rund 1.300 kg, fünf Europaletten oder etwa 13,5 m³ und ist damit die passende Größe für das, was in der Industrie tatsächlich eilt: ein Ersatzteil, eine Werkzeugform, eine nachgearbeitete Charge, Messegut oder eine Vorserie. Mit zwei Fahrern im Wechsel und ohne Wochenendfahrverbot liegt die Laufzeit typischerweise bei 24 bis 40 Stunden ab Ladestelle. Sie erhalten ein verbindliches Zeitfenster, ein Festpreisangebot und eine Sendungsnummer, mit der Sie den Status Ihrer Sendung jederzeit abrufen.",
  ],
  transitTable: {
    caption: "Laufzeiten Direktfahrt Deutschland – Türkei (zwei Fahrer, ohne Umladen)",
    rows: [
      { destination: "Stuttgart → Istanbul", time: "28-40 Stunden" },
      { destination: "München → Istanbul", time: "24-36 Stunden" },
      { destination: "Frankfurt → Istanbul", time: "28-40 Stunden" },
      { destination: "Istanbul → Berlin", time: "24-36 Stunden" },
    ],
  },
  priceTable: {
    caption: "Richtpreise Sonderfahrt: kompletter Express-Sprinter in die Türkei",
    rows: [
      { route: "Stuttgart → Istanbul", price: priceRange("Stuttgart") },
      { route: "München → Istanbul", price: priceRange("Münih") },
      { route: "Frankfurt → Istanbul", price: priceRange("Frankfurt") },
      { route: "Berlin → Istanbul", price: priceRange("Berlin") },
    ],
    disclaimer:
      "Richtwerte für einen exklusiv gebuchten Sprinter mit rund 1.300 kg Nutzlast, 5 Europaletten und etwa 13,5 m³. Der Preis hängt von Ladestelle, Entladestelle, Gewicht, Abholzeitpunkt und Saison ab; Zölle und Einfuhrabgaben sind nicht enthalten. Für Teilladungen bieten wir eine Beiladung an, bei der nur der genutzte Laderaum berechnet wird. Verbindliche Preise erhalten Sie über die App oder auf Anfrage.",
  },
  sections: [
    {
      heading: "Wenn die Produktion stillsteht",
      paragraphs: [
        "Eine Presse, die stillsteht, kostet pro Stunde mehr als jede Sonderfahrt. Genau in diese Lücke fahren wir. Der typische Anruf kommt am Nachmittag: Ein Werkzeug ist gebrochen, eine Lieferung aus der Türkei fehlt, oder die Qualitätssicherung hat eine Charge gesperrt und der Ersatz muss vor der Frühschicht am Band sein. In solchen Fällen zählt nicht der Kilometerpreis, sondern die Frage, ob ein Fahrzeug innerhalb weniger Stunden an der Rampe steht.",
        "Der Unterschied zum Sammelgutverkehr ist strukturell. Sammelgut ist auf Auslastung optimiert: Die Sendung wartet, bis der Lkw voll ist, wird umgeschlagen, wartet erneut. Eine Direktfahrt ist auf Zeit optimiert. Sobald der Auftrag bestätigt ist, ist das Fahrzeug ausschließlich für Ihre Sendung unterwegs, und die Ankunftszeit ergibt sich aus Strecke und Lenkzeiten, nicht aus einem Abfahrtsplan. Deshalb können wir ein Zeitfenster zusagen, statt eine Laufzeitspanne zu schätzen.",
        "Wir sagen aber auch ab, wenn eine Sonderfahrt wirtschaftlich keinen Sinn ergibt. Wenn Ihre Sendung zehn Tage Zeit hat und aus drei Paletten Standardware besteht, ist reguläres Sammelgut die richtige Wahl. Die Sonderfahrt lohnt sich dort, wo Stillstandskosten, Konventionalstrafen oder ein Liefertermin gegenüber dem Kunden auf dem Spiel stehen.",
      ],
    },
    {
      heading: "Sonderfahrt und Express-Sprinter: So läuft eine Direktfahrt ab",
      paragraphs: [
        "Der Ablauf ist auf Geschwindigkeit ausgelegt und kommt mit wenigen Schritten aus:",
      ],
      list: [
        "Anfrage und Festpreis: Sie nennen Ladestelle, Entladestelle, Gewicht, Maße und Ladebereitschaft. Sie erhalten den Preis sofort – ohne Rückfrageschleife und ohne Tagespreisvorbehalt.",
        "Disposition: Wir setzen ein Fahrzeug auf die Ladestelle. Bei Aufträgen, die vormittags bestätigt werden, ist eine Beladung noch am selben Tag in der Regel machbar; bei späteren Bestätigungen wird am Folgemorgen geladen.",
        "Verladung und Papiere: Rechnung, Packliste, Präferenz- oder Ursprungsdokumente und CMR werden bei der Beladung geprüft, damit die Grenzabfertigung nicht an einem fehlenden Blatt Papier hängt.",
        "Durchlauf: Das Fahrzeug fährt ohne Umschlag durch. Mit Ihrer Sendungsnummer sehen Sie den Status Ihrer Sendung (angenommen, Angebot, unterwegs, zugestellt); den aktuellen Standort erfragen Sie jederzeit per WhatsApp.",
        "Entladung: Zugestellt wird direkt an Werk, Lager oder Messestand – nicht an ein Terminal, aus dem Sie die Ware selbst abholen müssten.",
      ],
    },
    {
      heading: "Zwei Fahrer, keine Zwangspause",
      paragraphs: [
        "Der wichtigste Zeitgewinn entsteht nicht durch schnelleres Fahren, sondern dadurch, dass das Fahrzeug nicht steht. Ein Fahrzeug mit einem Fahrer muss nach der Tageslenkzeit eine zusammenhängende Ruhezeit einlegen – auf der Strecke Deutschland–Türkei summiert sich das über mehrere Nächte zu einem erheblichen Teil der Gesamtlaufzeit. Im Zwei-Fahrer-Betrieb wechseln sich die Fahrer ab, während der Kollege ruht: Das Fahrzeug bleibt in Bewegung, und die Ruhezeiten werden trotzdem eingehalten.",
        "Dazu kommt das Wochenende. Schwere Lkw unterliegen in Deutschland, Österreich und mehreren Transitländern einem Sonn- und Feiertagsfahrverbot. Ein Transporter bis 3,5 Tonnen fällt nicht darunter. Eine Sendung, die freitags am späten Nachmittag geladen wird, verliert dadurch keine zwei Tage: Sie ist am Samstag auf der Route und kann montags früh bereits zugestellt werden – ein Vorteil, der bei Wochenendaufträgen häufig über den Produktionsstart am Montag entscheidet.",
        "Ein dritter, oft unterschätzter Punkt ist die Grenzabfertigung. Auch ein Transporter mit Handelsware läuft über die Frachtabfertigung, die Abwicklung geht dort aber je nach Übergang deutlich schneller als bei einem 40-Tonner in der Lkw-Warteschlange, was an stark frequentierten Übergängen zusätzliche Stunden spart. Wie viel es konkret ist, hängt vom Aufkommen am jeweiligen Tag ab – planbar ist der Vorteil, exakt vorhersagbar nicht.",
      ],
    },
    {
      heading: "Kapazität: 1.300 kg, 5 Europaletten, 13,5 m³",
      paragraphs: [
        "Der Laderaum ist die Grenze, an der sich entscheidet, ob eine Sonderfahrt das richtige Mittel ist. Ein Express-Sprinter nimmt rund 1.300 kg Nutzlast, fünf Europaletten in Bodenreihe und etwa 13,5 m³ Volumen auf. Für die Praxis heißt das: Getriebeteile, Elektronikkomponenten, Textilrollen, Messebau-Elemente und Kleinmaschinen passen problemlos, sofern das Einzelgewicht die Nutzlast von rund 1.300 kg nicht überschreitet – bei Werkzeugen und Spritzgussformen ist das die eigentliche Grenze, nicht das Volumen. Ein kompletter Maschinensatz auf Sonderrahmen passt nicht.",
        "Wenn Ihre Sendung kleiner ist als eine Komplettladung, muss trotzdem nicht der ganze Laderaum bezahlt werden. Für ein bis zwei Paletten bieten wir die Beiladung an: Die Sendung teilt sich das Fahrzeug mit weiterer Ladung derselben Route, bleibt aber auf demselben Fahrzeug bis zur Entladestelle – es gibt also auch hier keinen Umschlag. Berechnet wird nur der genutzte Laderaum, die Laufzeit bleibt weitgehend die der Direktfahrt.",
        "Bei der Anfrage helfen drei Angaben am meisten: Gewicht in Kilogramm, Außenmaße der größten Einheit und die Anzahl der Packstücke. Damit lässt sich sofort sagen, ob eine Komplettbuchung nötig ist oder eine Beiladung ausreicht, und der Preis steht ohne weitere Rückfragen.",
        "Was wir nicht fahren, sagen wir vorab: Gefahrgut nach ADR – dazu zählen auch Lithiumbatterien außerhalb von Geräten, pyrotechnische Bauteile wie Airbaggeneratoren, Lacke, Lösungsmittel und Druckgasbehälter – transportieren wir nicht. Unsere Fahrzeuge sind nicht temperaturgeführt, deshalb sind Arzneimittel, Frischware und Lebensmittel tierischen Ursprungs ebenfalls ausgeschlossen. Fällt Ihre Sendung in eine dieser Gruppen, sagen wir das bei der Anfrage und nennen Ihnen einen passenden Anbieter, statt den Auftrag anzunehmen und an der Rampe abzubrechen.",
      ],
    },
    {
      heading: "Zollabwicklung für Handelsware: ATR, Rechnung, CMR",
      paragraphs: [
        "Für Handelsware gilt ein anderer Rahmen als für private Sendungen. Zwischen der EU und der Türkei besteht eine Zollunion für Industriewaren. Die Warenverkehrsbescheinigung A.TR weist nach, dass sich die Ware im zollrechtlich freien Verkehr eines der beiden Gebiete befindet – über den Ursprung der Ware sagt sie nichts aus. Nicht unter die Zollunion fallen landwirtschaftliche Erzeugnisse sowie bestimmte Eisen- und Stahlwaren (EGKS-Waren); dort ist statt der A.TR ein Präferenznachweis wie die EUR.1 erforderlich.",
        "Welche Papiere Ihre Sendung konkret benötigt, hängt von der Zolltarifnummer, dem Ursprung der Ware und dem vereinbarten Incoterm ab; die Vorschriften werden zudem regelmäßig angepasst. Wir stellen den Frachtbrief aus und koordinieren die Abwicklung mit den Zollagenten auf beiden Seiten, ersetzen damit aber keine Zollberatung: Lassen Sie die für Ihre Ware geltenden Anforderungen vor der Buchung von Ihrem Zollberater oder der zuständigen Zollstelle bestätigen.",
        "Das Dokumentenpaket, das in der Praxis mitläuft, sieht meist so aus:",
      ],
      list: [
        "Handelsrechnung mit vollständiger Warenbeschreibung, Zolltarifnummer, Wert und Lieferbedingung nach Incoterms",
        "Packliste mit Anzahl, Gewicht und Maßen der Packstücke",
        "A.TR als Nachweis des freien Verkehrs – bei Agrar- oder EGKS-Waren stattdessen ein Präferenznachweis wie die EUR.1",
        "CMR-Frachtbrief, der von uns ausgestellt wird",
        "Ausfuhranmeldung auf deutscher Seite sowie Vollmacht für den Zollagenten auf türkischer Seite",
        "Bei bestimmten Warengruppen zusätzliche Nachweise wie Konformitätserklärungen oder Analysezertifikate",
      ],
    },
    {
      heading: "Branchen, für die wir regelmäßig fahren",
      paragraphs: [
        "Die Türkei ist als Fertigungsstandort eng mit der deutschen Industrie verzahnt, und die Sendungsstruktur ist entsprechend wiederkehrend:",
      ],
      list: [
        "Automotive und Zulieferindustrie: Ersatzteile für stehende Linien, Prototypen, Prüfmuster, nachgearbeitete Chargen sowie Werkzeuge zwischen Werk und Lieferant in Bursa, Kocaeli oder Izmir.",
        "Maschinen- und Anlagenbau: Ersatzteile für Anlagen im Feld, Steuerungskomponenten und Baugruppen, wenn ein Servicetechniker bereits vor Ort auf das Teil wartet.",
        "Textil und Bekleidung: Musterkollektionen, Stoffballen, Zubehör und Nachlieferungen, bei denen der Abgabetermin an den Handel feststeht und keine Woche Puffer mehr vorhanden ist.",
        "Messebau und Events: Standelemente, Exponate, Technik und Werbemittel – hier ist der Aufbautermin fix und eine Verzögerung nicht nachholbar.",
        "Elektronik und Medizintechnik: hochwertige, kompakte Sendungen, bei denen wenig Umschlag ein Qualitätsargument ist und der Warenwert eine lückenlose Obhut verlangt.",
      ],
    },
    {
      heading: "Sendungsstatus und feste Zusagen",
      paragraphs: [
        "Transparenz ist bei zeitkritischen Sendungen kein Zusatz, sondern die Voraussetzung dafür, dass Ihre Disposition arbeiten kann. Mit Ihrer Sendungsnummer sehen Sie rund um die Uhr den Status Ihrer Sendung – angenommen, Angebot, unterwegs, zugestellt – und die Route auf der Karte; den aktuellen Standort des Fahrzeugs erfragen Sie jederzeit per WhatsApp und geben die Ankunftszeit an Ihre Produktionsplanung, Ihren Kunden oder den Messeaufbau weiter.",
        "Dazu gehören verbindliche Zusagen. Der Preis, den Sie bei der Buchung sehen, ist der Preis, der in Rechnung gestellt wird; Nachforderungen für Standzeiten oder Umwege entstehen nur, wenn sie von der Ladestelle oder Entladestelle verursacht und vorher abgestimmt wurden. Jede Fahrt läuft unter der Haftung des Frachtführers nach CMR; bei hohen Warenwerten vereinbaren wir vor der Verladung eine zusätzliche Warentransportversicherung mit fester Deckungssumme. Und wenn wir ein Zeitfenster nicht halten können, erfahren Sie es, sobald wir es wissen, nicht erst am Zustelltag.",
        "Die Fahrten laufen in beide Richtungen. Rückladungen aus der Türkei nach Deutschland, Österreich und in die Schweiz sind Teil des Regelbetriebs – häufig als Kombination aus Hinfahrt mit Material und Rückfahrt mit Fertigware, was die Kosten pro Richtung spürbar senkt.",
      ],
    },
  ],
  faq: [
    {
      question: "Wie schnell ist eine Direktfahrt in die Türkei?",
      answer:
        "Ab München sind 24 bis 36 Stunden realistisch, ab Stuttgart und Frankfurt 28 bis 40 Stunden, in der Gegenrichtung von Istanbul nach Berlin 24 bis 36 Stunden. Diese Zeiten gelten für den Zwei-Fahrer-Betrieb ohne Umladen; hinzu kommt die Grenzabfertigung, deren Dauer vom Aufkommen am jeweiligen Übergang abhängt.",
    },
    {
      question: "Was kostet ein Sondertransport in die Türkei?",
      answer:
        "Für einen exklusiv gebuchten Express-Sprinter liegt der Preis ab Stuttgart typischerweise bei " +
        priceRange("Stuttgart") +
        ". Maßgeblich sind Strecke, Gewicht, Ladezeitpunkt und Saison. Zoll und Einfuhrabgaben sind darin nicht enthalten. Für Teilladungen ist die Beiladung deutlich günstiger, weil nur der genutzte Laderaum berechnet wird.",
    },
    {
      question: "Wie viele Paletten passen in ein Fahrzeug?",
      answer:
        "Fünf Europaletten in Bodenreihe, bei rund 1.300 kg Nutzlast und etwa 13,5 m³ Volumen. Nicht stapelbare Ware bindet mehr Laderaum, als das reine Volumen vermuten lässt – nennen Sie deshalb bei der Anfrage bitte Gewicht, Maße der größten Einheit und Anzahl der Packstücke, dann steht der Preis ohne Rückfrage.",
    },
    {
      question: "Fahren Sie auch am Wochenende?",
      answer:
        "Ja. Fahrzeuge bis 3,5 Tonnen unterliegen nicht dem Sonn- und Feiertagsfahrverbot für schwere Lkw. Eine Sendung, die freitags geladen wird, bleibt das Wochenende über auf der Route und kann zum Wochenstart zugestellt werden – bei stehender Produktion ist das häufig der entscheidende Unterschied.",
    },
    {
      question: "Transportieren Sie Gefahrgut (ADR)?",
      answer:
        "Nein. Wir führen keine ADR-Transporte durch und fahren auch keine temperaturgeführten Sendungen, keine Arzneimittel und keine Lebensmittel tierischen Ursprungs. Dazu zählen auch Lithiumbatterien außerhalb von Geräten, pyrotechnische Bauteile wie Airbaggeneratoren, Lacke, Lösungsmittel und Druckgasbehälter. Prüfen Sie bitte vor der Anfrage das Sicherheitsdatenblatt Ihrer Ware – im Zweifel klären wir das in wenigen Minuten am Telefon, statt den Auftrag anzunehmen und an der Rampe abzubrechen.",
    },
    {
      question: "Welche Zolldokumente werden für Handelsware benötigt?",
      answer:
        "In der Regel Handelsrechnung mit Zolltarifnummer und Incoterm, Packliste, bei Industriewaren die Warenverkehrsbescheinigung A.TR und bei Agrar- und EGKS-Waren ein Präferenznachweis wie die EUR.1, sowie der CMR-Frachtbrief und die Ausfuhranmeldung. Je nach Warengruppe kommen weitere Nachweise hinzu. Da sich die Vorschriften ändern und die Einstufung vom Einzelfall abhängt, stimmen Sie das bitte vor der Verladung mit Ihrem Zollagenten oder der zuständigen Behörde ab; diese Angaben sind eine Orientierung und ersetzen keine offizielle Zollberatung.",
    },
    {
      question: "Ist die Sendung transportversichert?",
      answer:
        "Grundlage jeder Fahrt ist die Haftung des Frachtführers nach CMR, gesetzlich begrenzt auf 8,33 SZR je Kilogramm Rohgewicht. Bei Werkzeugen, Elektronik oder Medizintechnik entspricht dieser Betrag selten dem tatsächlichen Warenwert; deshalb schließen wir auf Wunsch eine zusätzliche Warentransportversicherung über den von Ihnen angegebenen Wert ab. Nennen Sie den Warenwert bitte bei der Anfrage, dann steht die Deckungssumme vor der Verladung schriftlich fest. Grundlage sind Rechnung und Packliste.",
    },
    {
      question: "Fahren Sie auch in die Gegenrichtung, von der Türkei nach Deutschland?",
      answer:
        "Ja, Rückladungen sind Teil des Regelbetriebs. Aus Istanbul, Bursa, Izmir, Kocaeli und Ankara fahren wir nach Deutschland, Österreich und in die Schweiz mit denselben Laufzeiten und derselben Sendungsverfolgung per Trackingnummer. Wenn Sie Material hinschicken und Fertigware zurückholen, lässt sich das als Rundlauf disponieren, was die Kosten pro Richtung senkt.",
    },
  ],
  related: [
    { slug: "de/tuerkei-transport-kosten", label: "Transportkosten Türkei: Wie der Preis entsteht" },
    { slug: "de/umzug-in-die-tuerkei", label: "Umzug in die Türkei: Hausrat von Tür zu Tür" },
  ],
};

export default deSpeditionTuerkei;
