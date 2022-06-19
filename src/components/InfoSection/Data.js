// const svg1 = require('../../images/svg-1.svg');
import svg1 from '../../images/svg-1.svg';
import svg2 from '../../images/svg-2.svg';
import svg3 from '../../images/svg-3.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headline: 'Unlimited Transactions with zero fees',
  description: `Nous sommes une société spécialisée dans la négoce de matériel électrique à l'international, nous sommes actifs dans les industries telles que le pétrole, le gaz, l'exploitation minière, la chimie et la construction et bien d'autres. 
    Nous distribuons aux professionnels à l’International à partir de notre plateforme logistique basée en région Parisienne. 
    Nous accompagnons nos clients au plus près dans la réalisation de leurs projets et cela grâce à notre large gamme de fournisseurs à travers le monde.`,
  imgStart: false,
  img: svg1,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headline: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: svg2,
  alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: 'signUp',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Team',
  headline: 'Creating an account is extremely easy',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and your information and you.'re ready to go",
  buttonLabel: 'Start Now',
  imgStart: false,
  img: svg3,
  alt: 'Paper',
  dark: false,
  primary: false,
  darkText: true,
};
