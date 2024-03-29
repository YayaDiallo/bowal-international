import world from '../../images/world.svg';
import contactUs from '../../images/contact_us.svg';
import deliveryAddress from '../../images/delivery_address.svg';
import teamGoals from '../../images/team_goals.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Qui sommes-nous ?',
  headline: 'Une centrale d’achat qui répond à tous vos besoins',
  description: `Bowal international est une société spécialisée dans la négoce de matériels industriels et tertiaires à l'international, 
    nous sommes actifs dans les industries telles que le pétrole, le gaz, l'exploitation minière, la chimie, la construction et bien d'autres.

    Nous distribuons aux professionnels à
    l’International à partir de notre plateforme
    logistique basée en région Parisienne.

    Nous accompagnons nos clients au plus près
    dans la réalisation de leurs projets grâce à
    notre large gamme de fournisseurs en Europe
    et à travers le monde.
  `,
  imgStart: false,
  img: world,
  alt: 'Globe terrestre',
  dark: true,
  primary: false,
  darkText: true,
  listWrapper: false,
};

export const homeObjTwo = {
  id: 'services',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Services',
  headline: 'Nous répondons à toutes vos attentes',
  descriptionLists: [
    'Envoi de factures Proforma',
    'Règlement par virement bancaire, paiement en espèces/chèque possible au Sénégal (à Dakar uniquement) et en Guinée.',
    'Expéditions selon incoterms : Pour le Sénégal et la Guinée, possibilité de livraison sur votre chantier.',
    'Formalités douanières en liaison avec les transitaires : Certificats EUR1, d’origine et attestations diverses.',
    'Emballages spécifiques.',
    'Contrôle chez les emballeurs/transitaires.',
  ],
  buttonLabel: 'Learn More',
  imgStart: true,
  img: contactUs,
  alt: 'Icône de contact',
  dark: false,
  primary: true,
  darkText: false,
  listWrapper: true,
};

export const homeObjThree = {
  id: 'contact',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Contactez-nous',
  headline: 'Pour en savoir plus sur nos services',
  buttonLabel: 'Start Now',
  imgStart: false,
  img: deliveryAddress,
  alt: 'Boîte aux lettres',
  dark: false,
  primary: false,
  darkText: true,
  listWrapper: false,
};

export const homeObjFour = {
  id: 'providers',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Fournisseur',
  headline: 'Pour en savoir plus sur nos fournisseur',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and your information and you.'re ready to go",
  buttonLabel: 'Start Now',
  imgStart: false,
  img: contactUs,
  alt: 'Paper',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjFive = {
  id: 'commitments',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Engagements',
  headline: 'Une équipe professionnelle à votre écoute',
  descriptionLists: [
    'Réactivité commerciale & conseils techniques',
    "Suivi rigoureux de la commande jusqu'à la livraison sur chantier",
    "Qualité des produits & service après-vente à l'écoute.",
    'Respect des délais',
  ],
  buttonLabel: 'Start Now',
  imgStart: false,
  img: teamGoals,
  alt: 'Icône collaborateurs',
  dark: false,
  primary: true,
  darkText: false,
  listWrapper: true,
};
