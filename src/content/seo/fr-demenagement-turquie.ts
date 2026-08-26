import type { SeoPageData } from "./seoData";
import { priceRangeFr as priceRange } from "./seoData";

const frDemenagementTurquie: SeoPageData = {
  slug: "fr/demenagement-turquie",
  lang: "fr",
  hreflangGroup: "relocation",
  title: "Déménagement France-Turquie | Porte-à-porte en 28-48 h",
  description:
    "Déménagement France-Turquie en camionnette dédiée : enlèvement à domicile, sans rupture de charge, livraison en 28 à 48 h, assurance et suivi GPS.",
  h1: "Déménagement France-Turquie : vos affaires de porte à porte",
  intro: [
    "Quitter la France pour s'installer en Turquie, c'est presque toujours se heurter au même mur : les devis des déménageurs internationaux dépassent largement le budget prévu, et le groupage annonce des délais qui se comptent en semaines, sans date ferme. RouteEU Express propose une troisième voie : une camionnette dédiée de classe Sprinter qui charge chez vous, en France, et décharge à votre nouvelle adresse en Turquie. Un seul chargement, un seul déchargement, aucun entrepôt entre les deux.",
    "Nos véhicules ne sont pas concernés par les restrictions de circulation du week-end qui immobilisent les poids lourds, et le double équipage permet au véhicule de continuer à rouler pendant que l'un des deux chauffeurs se repose. Concrètement, comptez 28 à 48 heures selon la ville de départ — Strasbourg étant la plus proche et Paris ou Marseille les plus éloignées sur cet axe — là où un déménagement en groupage classique demande trois à six semaines.",
    "Une camionnette complète représente environ 1 300 kg, 5 palettes Europe et 13,5 m³ : de quoi loger le mobilier et les effets personnels d'un studio ou d'un petit deux-pièces, armoires démontées. Le poids peut limiter avant le volume — livres, électroménager et outillage remplissent vite la charge utile — alors décrivez-nous le contenu et nous vous dirons franchement si un seul véhicule suffit. Si votre volume est plus modeste — quelques cartons, un bureau, un lit — le groupage reste possible et vous ne payez que la place réellement occupée. Chaque envoi part couvert par une assurance transport et suivi en direct par GPS, 24 h/24.",
  ],
  transitTable: {
    caption: "Délais d'acheminement indicatifs France → Turquie",
    rows: [
      { destination: "Paris → Istanbul", time: "34-48 heures" },
      { destination: "Strasbourg → Istanbul", time: "28-40 heures" },
      { destination: "Lyon → Istanbul", time: "32-46 heures" },
      { destination: "Marseille → Istanbul", time: "34-48 heures" },
    ],
  },
  priceTable: {
    caption: "Tarifs indicatifs — camionnette complète vers la Turquie",
    rows: [
      { route: "Paris → Istanbul", price: priceRange("Paris") },
      { route: "Strasbourg → Istanbul", price: priceRange("Strazburg") },
      { route: "Lyon → Istanbul", price: priceRange("Lyon") },
      { route: "Marseille → Istanbul", price: priceRange("Marsilya") },
    ],
    disclaimer:
      "Fourchettes indicatives pour une camionnette complète (environ 1 300 kg, 5 palettes Europe, 13,5 m³), enlèvement et livraison à domicile compris. Le tarif définitif dépend de la saison, du volume réel, de l'étage et de la nature des formalités. L'estimation personnalisée s'obtient en quelques secondes depuis l'application.",
  },
  sections: [
    {
      heading: "À qui s'adresse ce service ?",
      paragraphs: [
        "Nous déménageons chaque semaine des particuliers qui changent de pays. Les situations reviennent souvent :",
      ],
      list: [
        "Familles franco-turques qui rentrent s'installer à Istanbul, Izmir, Ankara, Antalya ou Bursa après plusieurs années passées en France.",
        "Retraités qui s'établissent sur la côte égéenne ou méditerranéenne et préfèrent retrouver leur propre mobilier plutôt que de tout racheter sur place.",
        "Français propriétaires d'un bien en Turquie qui souhaitent équiper l'appartement en une seule expédition.",
        "Salariés en mobilité internationale, expatriés et enseignants dont la mutation impose une date d'arrivée précise.",
        "Étudiants et jeunes actifs qui partent avec quelques cartons, un bureau et du matériel informatique.",
        "Successions et partages familiaux : meubles hérités à rapatrier vers la Turquie ou vers la France.",
      ],
    },
    {
      heading: "Pourquoi le porte-à-porte en camionnette plutôt que le groupage classique",
      paragraphs: [
        "Dans un déménagement international traditionnel, vos affaires quittent votre domicile pour l'entrepôt du transporteur, y attendent d'être regroupées avec d'autres envois, sont parfois transbordées une seconde fois à l'arrivée, puis patientent en garde-meuble avant la livraison finale. Chaque manipulation ajoute un risque de casse et un jour au compteur. La date de livraison reste une fourchette large, rarement un engagement.",
        "Avec un véhicule dédié, il n'y a qu'un chargement et qu'un déchargement. Les chauffeurs qui prennent vos cartons à Lyon sont ceux qui les posent dans votre salon à Izmir. Pas d'entrepôt, pas de transbordement, pas d'attente de remplissage. Cette différence structurelle explique l'écart de délai entre quelques dizaines d'heures et plusieurs semaines.",
      ],
      list: [
        "Un seul véhicule du départ à l'arrivée : vos affaires ne changent jamais de camion.",
        "Départ calé sur votre date, et non sur le remplissage d'une remorque.",
        "Circulation maintenue le week-end : les interdictions applicables aux poids lourds ne visent pas nos véhicules.",
        "Double équipage : le véhicule progresse pendant les temps de repos réglementaires.",
        "Passage aux postes-frontières plus fluide que celui d'un ensemble routier de 40 tonnes.",
        "Moins de manutention, donc nettement moins de risques pour la vaisselle, les miroirs et le mobilier démonté.",
      ],
    },
    {
      heading: "Dédouanement et effets personnels : le cadre à connaître",
      paragraphs: [
        "Un déménagement n'entre pas en Turquie comme une marchandise commerciale : il relève du régime des effets personnels usagés, qui obéit à ses propres règles. L'administration turque examine pour l'essentiel trois éléments : votre situation de résidence, l'ancienneté et l'usage réel des biens, et la cohérence de l'inventaire avec un foyer normal.",
        "Les biens neufs, encore emballés ou achetés juste avant le départ, sortent de ce cadre et sont traités comme des marchandises, avec la fiscalité correspondante. Même logique pour les quantités manifestement excessives : cinq téléviseurs identiques dans un inventaire déclenchent une requalification. Un déménagement crédible ressemble à un intérieur, pas à un stock.",
        "Le dossier type comprend les pièces suivantes, que nous vous aidons à réunir avant l'enlèvement :",
      ],
      list: [
        "Un inventaire détaillé et valorisé, carton par carton, daté et signé.",
        "Copie du passeport et, selon votre cas, du titre de séjour turc (ikamet) ou du document attestant le transfert de résidence.",
        "Justificatif de l'adresse quittée en France et de la nouvelle adresse en Turquie.",
        "Le cas échéant, le mandat donné au commissionnaire en douane qui présente la déclaration.",
        "La lettre de voiture CMR établie au départ, qui accompagne l'envoi jusqu'à la livraison.",
      ],
    },
    {
      heading: "Une précision importante sur la réglementation",
      paragraphs: [
        "La réglementation douanière évolue : les seuils, les délais et les pièces exigées sont révisés d'une année à l'autre, et votre situation personnelle — date d'obtention du titre de séjour, durée de résidence en France, composition du foyer — change la réponse. Confirmez votre cas auprès d'un commissionnaire en douane ou du service douanier compétent avant l'expédition. Ce texte présente un cadre général à titre d'information et ne remplace pas un conseil officiel.",
      ],
    },
    {
      heading: "Que transportons-nous, et que laissons-nous de côté ?",
      paragraphs: [
        "Commençons par les exclusions, car elles se règlent en amont et jamais le jour du chargement. Restent en dehors de notre périmètre, pour des raisons réglementaires ou d'assurance : les espèces, bijoux, métaux précieux et documents originaux irremplaçables ; les produits dangereux tels que bouteilles de gaz, carburants, solvants, peintures, aérosols sous pression ou articles pyrotechniques ; les médicaments et produits pharmaceutiques ; les produits d'origine animale — viande, charcuterie, produits laitiers, miel — y compris sous vide ou en conserve ; les denrées périssables, plantes vivantes et animaux ; enfin les armes, munitions et tout bien dont l'importation est prohibée ou subordonnée à une autorisation spéciale. Lors de la préparation du devis, nous passons l'inventaire en revue avec vous : la bouteille de gaz du barbecue et les bidons du garage se repèrent à ce moment-là.",
        "Pour le reste, le contenu habituel d'un logement voyage sans difficulté particulière, à condition d'être correctement emballé et calé :",
      ],
      list: [
        "Mobilier démontable : lits, armoires, tables, chaises, bureaux, bibliothèques.",
        "Électroménager : réfrigérateur, lave-linge, four, lave-vaisselle, petit électroménager.",
        "Cartons d'effets personnels : vaisselle, linge de maison, vêtements, livres, jouets.",
        "Matériel informatique, hi-fi, téléviseurs et écrans protégés par une caisse ou un calage adapté.",
        "Vélos, matériel de sport, poussettes, outillage domestique.",
        "Objets fragiles — miroirs, tableaux, verrerie, instruments de musique — signalés à l'avance pour un emballage renforcé.",
      ],
    },
    {
      heading: "Comment ça marche : quatre étapes",
      paragraphs: [
        "Le déroulement est identique quel que soit le point de départ en France, et vous suivez chaque étape depuis l'application :",
      ],
      list: [
        "Devis. Indiquez la ville de départ, la ville d'arrivée et le volume approximatif : l'estimation s'affiche en quelques secondes, avant tout engagement.",
        "Enlèvement à domicile. Le véhicule se présente à votre adresse à la date convenue ; le chargement est réalisé par notre équipe et l'inventaire validé avec vous.",
        "Acheminement. Formalités douanières, puis route directe vers la Turquie, sans transbordement ni passage en entrepôt. La position du véhicule reste visible en continu.",
        "Livraison. Déchargement à votre nouvelle adresse, effectué avec vous et pointé sur l'inventaire. Le portage jusque dans le logement ou au-dessus du rez-de-chaussée se convient à l'avance et figure en poste distinct sur le devis. Aucun retrait en agence, aucun passage par un garde-meuble.",
      ],
    },
    {
      heading: "Assurance, contrat de transport et suivi GPS",
      paragraphs: [
        "Tout transport routier international est encadré par la convention CMR : la lettre de voiture émise au départ constitue le contrat entre vous et le transporteur, et fixe le cadre de responsabilité. Vous en recevez un exemplaire au chargement, avec l'inventaire signé.",
        "Chaque envoi part couvert par une assurance transport. Pour les biens de valeur — instruments de musique, œuvres, matériel professionnel, mobilier ancien — le montant déclaré se fixe au moment du devis : signalez donc ces pièces avant le chargement, jamais après. C'est le seul moyen d'ajuster la couverture à leur valeur réelle.",
        "Le suivi GPS fonctionne 24 h/24 : depuis la page de suivi, vous voyez où se trouve le véhicule, qu'il soit encore en France, en train de traverser les Balkans ou déjà sur la route d'Istanbul. Vous savez donc la veille — et non le matin même — s'il faut réserver l'ascenseur, prévenir le gardien ou demander une autorisation de stationnement.",
      ],
    },
    {
      heading: "Départs depuis la Belgique et la Suisse romande",
      paragraphs: [
        "Nos tournées desservent l'ensemble de l'espace francophone. Un enlèvement à Bruxelles, Liège, Namur, Charleroi, Mons, Genève, Lausanne, Neuchâtel ou Fribourg s'organise dans les mêmes conditions qu'un départ français, avec des délais comparables : la Belgique est à peine plus loin que Strasbourg et légèrement plus près que Paris sur l'axe emprunté.",
        "Une nuance mérite d'être connue pour la Suisse : le pays ne fait pas partie de l'union douanière, ce qui ajoute des formalités d'exportation à l'enlèvement. Elles n'allongent pas le trajet, mais elles se préparent en amont — nous en tenons compte dans le planning et vous indiquons les documents à réunir dès la prise de commande.",
      ],
    },
  ],
  faq: [
    {
      question: "Combien de temps dure un déménagement France-Turquie ?",
      answer:
        "En camionnette dédiée, comptez 28 à 40 heures depuis Strasbourg, 32 à 46 heures depuis Lyon et 34 à 48 heures depuis Paris ou Marseille jusqu'à Istanbul. Pour une destination plus lointaine comme Antalya ou Adana, ajoutez une journée de route. En groupage traditionnel, le même déménagement demande généralement trois à six semaines.",
    },
    {
      question: "Quel est le prix d'un déménagement France-Turquie ?",
      answer:
        "Pour une camionnette complète, la fourchette indicative sur l'axe Paris-Istanbul s'établit autour de " +
        priceRange("Paris") +
        ", enlèvement et livraison à domicile compris. Le montant exact dépend du volume réel, de la ville d'arrivée, de la saison et de l'étage. L'application affiche une estimation personnalisée en quelques secondes.",
    },
    {
      question: "Quels documents dois-je préparer ?",
      answer:
        "Un inventaire détaillé et valorisé de vos affaires, une copie de votre passeport, votre titre de séjour turc ou le justificatif de transfert de résidence, ainsi que les adresses de départ et d'arrivée. Selon le dossier, un mandat au commissionnaire en douane s'y ajoute. Nous vous transmettons la liste précise avant l'enlèvement et vous accompagnons dans la préparation.",
    },
    {
      question: "Dois-je payer des droits de douane sur mes effets personnels ?",
      answer:
        "Les effets personnels usagés relèvent d'un régime distinct de celui des marchandises commerciales et peuvent bénéficier d'un traitement particulier lorsque les conditions de résidence et d'ancienneté des biens sont réunies. Les articles neufs ou présents en quantité inhabituelle sont en revanche traités comme des marchandises. La réglementation évoluant régulièrement, confirmez votre cas auprès d'un commissionnaire en douane ou du service douanier compétent : ce texte est informatif et ne remplace pas un conseil officiel.",
    },
    {
      question: "Puis-je envoyer seulement quelques cartons ?",
      answer:
        "Oui. Vous n'êtes pas obligé de réserver le véhicule entier : en groupage, vos affaires voyagent avec d'autres envois circulant sur le même axe et vous ne payez que le volume occupé. Le principe reste le même — pas de transbordement, livraison à domicile, assurance et suivi GPS inclus.",
    },
    {
      question: "Le transport est-il assuré ?",
      answer:
        "Chaque envoi circule sous la responsabilité du transporteur définie par la convention CMR, plafonnée par la loi à 8,33 DTS par kilogramme de poids brut. Pour un mobilier, une œuvre ou du matériel de valeur, ce plafond correspond rarement à la valeur réelle : nous souscrivons donc, sur demande, une assurance complémentaire sur la base des valeurs déclarées dans votre inventaire. Signalez-nous ces pièces avant le départ, afin que la couverture soit fixée par écrit et non discutée après un sinistre.",
    },
    {
      question: "Puis-je suivre l'envoi en temps réel ?",
      answer:
        "Oui. Un suivi GPS est associé à chaque déménagement : la page de suivi affiche la position du véhicule sur la carte, 24 h/24, du chargement en France jusqu'à la livraison en Turquie. Vous pouvez ainsi organiser votre arrivée sans attendre un appel la veille.",
    },
  ],
  related: [{ slug: "fr/transport-express-turquie", label: "Transport express France-Turquie" }],
};

export default frDemenagementTurquie;
