import type { SeoPageData } from "./seoData";
import { priceRangeNl as priceRange } from "./seoData";

const nlTransportNaarTurkije: SeoPageData = {
  slug: "nl/transport-naar-turkije",
  lang: "nl",
  hreflangGroup: "express-b2b",
  title: "Transport naar Turkije | Expresslevering zonder overslag",
  description:
    "Expresstransport naar Turkije: tot 1.300 kg en 5 europallets in 28 tot 46 uur, zonder overslag, twee chauffeurs en hulp bij de douanepapieren.",
  h1: "Transport naar Turkije: expresslevering zonder overslag",
  intro: [
    "Als een productielijn stilstaat of een order de leverdatum dreigt te missen, is de vraag niet wat een zending kost, maar wanneer hij er is. RouteEU Express rijdt spoedtransporten tussen Nederland en Turkije met eigen bestelbussen: wij halen uw goederen op bij uw magazijn, laden ze één keer in en leveren ze 28 tot 46 uur later af bij de ontvanger. Geen hubs, geen overslag, geen wachten tot een trailer vol is.",
    "Eén bus neemt tot ongeveer 1.300 kg, vijf europallets of circa 13,5 m³ mee. Twee chauffeurs wisselen elkaar af, zodat het voertuig doorrijdt op momenten waarop zwaar vrachtverkeer verplicht stilstaat, en het weekendrijverbod voor vrachtwagens raakt deze voertuigklasse niet. Elke zending rijdt onder de aansprakelijkheid van de vervoerder volgens het CMR-verdrag, met op verzoek een aanvullende goederentransportverzekering, en met uw zendingnummer ziet u in welke fase uw zending is; een prijsindicatie haalt u in seconden uit de app.",
  ],
  transitTable: {
    caption: "Levertijden Nederland - Turkije, van deur tot deur",
    rows: [
      { destination: "Rotterdam → Istanbul", time: "30-46 uur" },
      { destination: "Amsterdam → Istanbul", time: "30-46 uur" },
      { destination: "Eindhoven → Istanbul", time: "28-44 uur" },
      { destination: "Istanbul → Rotterdam", time: "30-46 uur" },
    ],
  },
  priceTable: {
    caption: "Indicatie: volledige bestelbus naar Turkije",
    rows: [
      { route: "Rotterdam → Istanbul", price: priceRange("Rotterdam") },
      { route: "Amsterdam → Istanbul", price: priceRange("Amsterdam") },
      { route: "Eindhoven → Istanbul", price: priceRange("Eindhoven") },
    ],
    disclaimer:
      "Indicatieve bandbreedtes voor een volledige bestelbus van circa 1.300 kg, vijf europallets of ongeveer 13,5 m³. Tarieven bewegen mee met brandstofprijzen, seizoensdrukte en beschikbaarheid. Voor een prijs op basis van uw eigen lading en laaddatum vraagt u in de app direct een offerte aan.",
  },
  sections: [
    {
      heading: "Spoedtransport wanneer stilstand geld kost",
      paragraphs: [
        "De rekensom bij een spoedzending is zelden de vrachtprijs zelf. Een lijn die een dag stilligt, een monteur die op een onderdeel wacht, een beursstand die zaterdag klaar moet zijn, een klant die een boete op te late levering heeft bedongen: dat zijn de bedragen waar het om draait. Tegen die achtergrond is het verschil tussen twee dagen en twee weken doorlooptijd geen logistiek detail maar een commerciële beslissing.",
        "Reguliere groupage naar Turkije werkt met verzamelloodsen. Uw pallet wacht tot er genoeg vracht is voor een trailer, gaat mee in een rit langs meerdere losadressen en wordt onderweg vaak overgeladen. Zeven tot vijftien dagen is dan een normale levertijd, en de aankomstdatum blijft een schatting die tijdens de rit nog kan verschuiven.",
        "Bij een directe bestelbus rijdt uw zending in één keer door: één laadmoment, één rit, één losmoment. Daarmee wordt de levertijd niet alleen korter, maar vooral voorspelbaarder, en dat is voor een planner meestal het belangrijkste.",
      ],
    },
    {
      heading: "Capaciteit: 1.300 kg, vijf europallets, 13,5 m³",
      paragraphs: [
        "Onze voertuigen zitten in de klasse Sprinter en Transporter: ruimte voor vijf europallets, ongeveer 13,5 m³ laadvolume en circa 1.300 kg laadvermogen. Voor de meeste industriële spoedzendingen is dat ruim voldoende.",
      ],
      list: [
        "Volle lading: u huurt de bus volledig en bepaalt zelf laad- en losmoment. De rit gaat rechtstreeks, zonder tussenstops bij andere klanten.",
        "Deellading: hebt u één of twee pallets, dan deelt u de bus met zendingen op dezelfde route en betaalt u naar laadmeters en gewicht. Ook dan wordt er onderweg niet overgeladen.",
        "Afmetingen: langere colli gaan mee mits ze binnen de laadruimte gestuwd kunnen worden. Stuur de maten per collo vooraf door, dan bevestigen wij of het past voordat u boekt.",
        "Te groot of te zwaar: past uw lading er niet in, dan zeggen wij dat en verwijzen wij u naar een geschikter vervoerstype in plaats van twee bussen te verkopen.",
      ],
    },
    {
      heading: "Twee chauffeurs, geen overslag",
      paragraphs: [
        "Het snelheidsvoordeel op deze corridor komt niet van harder rijden, maar van minder stilstaan. Met twee chauffeurs aan boord neemt de één het stuur over terwijl de ander rust, zodat de bus blijft rijden in plaats van een nacht langs de snelweg te staan. Over een afstand van circa 2.800 kilometer scheelt dat een volledige dag.",
        "Daar komen de rijverboden bij. Zware vrachtwagens mogen in verschillende landen op zondagen en feestdagen niet rijden; voor bestelbussen van deze klasse geldt dat niet. Een zending die vrijdagmiddag wordt geladen, blijft dus in beweging in plaats van tot maandagochtend geparkeerd te staan.",
        "Het derde voordeel is de afwezigheid van overslag. Uw colli worden ingeladen bij het ophaaladres en er pas weer uitgehaald bij de ontvanger. Elke verplaatsing in een crossdock brengt kans op gescheurde folie, ingedeukte hoeken, verkeerde labels of een collo dat een rit mist. Die kansen bestaan hier eenvoudigweg niet.",
      ],
    },
    {
      heading: "Douaneafhandeling: A.TR, factuur en CMR",
      paragraphs: [
        "Tussen de Europese Unie en Turkije bestaat een douane-unie voor industriële producten. In de praktijk wordt het merendeel van de handelszendingen op deze route daardoor afgehandeld met een A.TR-certificaat, naast een handelsfactuur, een paklijst en de CMR-vrachtbrief. Voor goederen die buiten de reikwijdte van de douane-unie vallen, zoals bepaalde landbouwproducten, gelden andere oorsprongsdocumenten.",
        "Aan Nederlandse zijde hoort daar een uitvoeraangifte bij, die u of uw douane-expediteur indient; uw onderneming heeft daarvoor een EORI-nummer nodig. Aan Turkse zijde verzorgt een lokale expediteur de invoeraangifte. Wij zorgen dat de vervoersdocumenten kloppen, dat de chauffeur de juiste set papieren bij zich heeft en dat de aankomst wordt aangekondigd, zodat de bus niet onnodig staat te wachten.",
        "Welke documenten en tarieven exact op uw zending van toepassing zijn, hangt af van de goederencode, de oorsprong en de bestemming, en die regels worden regelmatig herzien. Daarom noemen wij hier bewust geen percentages of drempelbedragen: laat de behandeling van uw specifieke goederen bevestigen door uw douane-expediteur of door de bevoegde douaneautoriteiten. Deze tekst is algemene informatie en geen officieel douaneadvies.",
      ],
    },
    {
      heading: "Voor welke sectoren rijden wij?",
      paragraphs: [
        "De typische zending op deze route is compact, waardevol en tijdkritisch. In die omschrijving herkennen zich onder meer:",
      ],
      list: [
        "Machinebouw en onderhoud: reserveonderdelen, aandrijvingen, matrijzen en gereedschap voor een stilstaande lijn.",
        "Textiel en confectie: stalen, collecties, rollen stof en orders die op een showroomdatum moeten aansluiten.",
        "Automotive en toelevering: componenten en halffabricaten die op afroep binnen moeten komen.",
        "Elektronica en technische handel: printplaten, meetapparatuur, kasten en modules die niet weken in een loods mogen staan.",
        "Beurs en events: standmateriaal, demomodellen, displays en drukwerk met een harde opbouwdatum.",
        "E-commerce en retail: spoedaanvullingen voor een lopende campagne of een uitverkocht artikel.",
      ],
    },
    {
      heading: "Beide richtingen: ook van Turkije naar Nederland",
      paragraphs: [
        "De route werkt in twee richtingen en met dezelfde levertijden. Importeert u uit Turkije, dan halen wij de goederen op bij de producent in Istanbul, Bursa, Izmir of Ankara en leveren wij ze af bij uw magazijn in Nederland of België. Voor bedrijven die in Turkije laten produceren is dat vaak de snelste manier om een productiemonster of een vertraagde deelorder alsnog op tijd bij de klant te krijgen.",
        "Omdat wij beide richtingen structureel rijden, kan retourvracht op een al geplande terugrit scherper geprijsd worden dan een losse rit. Geef bij de aanvraag door of er ook vracht terugkomt, dan kijken wij of die combinatie te maken is.",
        "Wat wij niet doen, vermelden wij er eerlijk bij: onze bussen zijn niet geconditioneerd, dus temperatuurgevoelig transport voor bloemen, verse levensmiddelen of farmacie hoort niet bij ons aanbod. Gevaarlijke stoffen vervoeren wij evenmin.",
      ],
    },
    {
      heading: "Track and trace en communicatie",
      paragraphs: [
        "Aan elke zending is een zendingnummer gekoppeld. U opent de trackingpagina en ziet in welke fase uw zending is - aangenomen, offerte, onderweg, bezorgd - met de route tussen Istanbul en de bestemmingsstad op de kaart. Wilt u weten waar de bus op dat moment precies rijdt, dan vraagt u de actuele locatie op via WhatsApp; zo informeert u uw eigen klant proactief over de verwachte aankomst.",
        "Bij het laden wordt de zending afgetekend en gedocumenteerd, bij aankomst gebeurt hetzelfde, en u krijgt de getekende CMR terug voor uw administratie. Verandert er onderweg iets, bijvoorbeeld door drukte bij een grensovergang, dan hoort u dat van ons en passen wij de verwachte aankomsttijd voor u aan.",
        "Een offerte begint in de app: vul laad- en losadres in, geef gewicht en aantal pallets op en u ziet direct een indicatie. Voor terugkerende zendingen of vaste routes maken wij afspraken op maat, zodat u niet elke keer opnieuw hoeft te calculeren.",
      ],
    },
  ],
  faq: [
    {
      question: "Hoe snel is transport naar Turkije?",
      answer:
        "Vanaf Rotterdam of Amsterdam is de rijtijd naar Istanbul doorgaans 30 tot 46 uur; vanaf Eindhoven 28 tot 44 uur. In de omgekeerde richting geldt hetzelfde. Bestemmingen verder landinwaarts, zoals Ankara of Izmir, vragen enkele uren extra. Groupage over dezelfde route doet er in de regel zeven tot vijftien dagen over.",
    },
    {
      question: "Wat kost een expreszending naar Turkije?",
      answer:
        "Voor een volledige bestelbus vanaf Rotterdam ligt de indicatie op " +
        priceRange("Rotterdam") +
        ". De uiteindelijke prijs hangt af van gewicht, aantal laadmeters, de exacte adressen, de gewenste laaddatum en of u de bus volledig gebruikt of deelt. In de app vult u de gegevens van uw zending in en ziet u meteen een offerte.",
    },
    {
      question: "Hoeveel pallets passen er in een bus?",
      answer:
        "Vijf europallets, bij ongeveer 13,5 m³ laadvolume en circa 1.300 kg laadvermogen. Hebt u minder pallets, dan is een deellading mogelijk en betaalt u naar de ruimte en het gewicht dat u werkelijk gebruikt. Stuur de afmetingen en gewichten per collo mee bij de aanvraag, dan bevestigen wij vooraf of het past.",
    },
    {
      question: "Rijdt u ook in het weekend?",
      answer:
        "Ja. Het weekendrijverbod dat in verschillende landen voor zwaar vrachtverkeer geldt, is niet van toepassing op bestelbussen van deze klasse. Een zending die vrijdag geladen wordt, rijdt dus door in plaats van tot maandag stil te staan. Laden en lossen in het weekend stemmen wij af met u en met de ontvanger.",
    },
    {
      question: "Welke douanedocumenten heb ik nodig?",
      answer:
        "Voor handelszendingen tussen de EU en Turkije gaat het meestal om een handelsfactuur, een paklijst, de CMR-vrachtbrief en een A.TR-certificaat voor goederen die onder de douane-unie vallen; daarnaast zijn een uitvoeraangifte en een EORI-nummer nodig. Voor goederen buiten die reikwijdte gelden andere oorsprongsdocumenten. Wat in uw geval precies vereist is, hangt af van de goederencode en de oorsprong: laat dat bevestigen door uw douane-expediteur of de bevoegde autoriteiten. Deze uitleg is algemene informatie en geen officieel advies.",
    },
    {
      question: "Is de zending verzekerd?",
      answer:
        "Standaard geldt de aansprakelijkheid van de vervoerder onder het CMR-verdrag, wettelijk begrensd op 8,33 SDR per kilo brutogewicht. Bij hoogwaardige ladingen dekt dat bedrag zelden de werkelijke waarde, dus sluiten wij op verzoek een aanvullende goederentransportverzekering af op basis van de opgegeven factuurwaarde. Geef die waarde bij de aanvraag door, dan staat de dekking vast voordat er geladen wordt.",
    },
    {
      question: "Verzorgt u ook retourvracht vanuit Turkije?",
      answer:
        "Ja. Wij rijden de route structureel in beide richtingen en halen goederen op bij producenten in Istanbul, Bursa, Izmir of Ankara voor levering aan uw magazijn in Nederland of België. Geeft u bij de aanvraag aan dat er vracht terugkomt, dan kijken wij of wij die op een geplande terugrit kunnen combineren, wat vrijwel altijd gunstiger uitpakt dan twee losse ritten.",
    },
  ],
  related: [
    { slug: "nl/verhuizen-naar-turkije", label: "Verhuizen naar Turkije" },
  ],
};

export default nlTransportNaarTurkije;
