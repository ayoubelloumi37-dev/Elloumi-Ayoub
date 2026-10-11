import { Category, ProductItem, ServiceItem } from '../types';

import heroImg from '../assets/images/hero_moka_grocery_1791684776695.jpg';
import nutsImg from '../assets/images/nuts_and_dryfruits_1791684787446.jpg';
import shopShelvesImg from '../assets/images/shop_shelves_groceries_1791684798383.jpg';
import boxImg from '../assets/images/delivery_fresh_box_1791684808822.jpg';

export { heroImg, nutsImg, shopShelvesImg, boxImg };

export const STORE_CONTACT = {
  name: 'MOKA SHOP',
  tagline: 'Votre boutique, tout simplement',
  secondaryTagline: 'Le quotidien a meilleur goût',
  phone: '51308083',
  phoneFormatted: '+216 51 308 083',
  email: 'ayoubelloumi90@gmail.com',
  city: 'Sfax',
  country: 'Tunisie',
  address: 'Sfax, Tunisie (Livraison disponible sur le Grand Sfax & Tunisie)',
  workingHours: 'Du Lundi au Samedi : 08h30 - 20h00 | Dimanche : 09h00 - 15h00',
  whatsappUrl: 'https://wa.me/21651308083?text=Bonjour%20MOKA%20Shop,%20je%20souhaite%20avoir%20des%20informations%20sur%20vos%20produits',
  phoneCallUrl: 'tel:+21651308083',
};

export const CATEGORIES: Category[] = [
  {
    id: 'fruits-secs',
    name: 'Fruits Secs & Graines',
    shortDesc: 'Amandes de Sfax, noisettes, pistaches torréfiées et dattes royales',
    iconName: 'Nut',
    badge: 'Spécialité Terroir',
    itemCount: 'Plus de 35 références',
  },
  {
    id: 'epicerie',
    name: 'Alimentation & Épicerie',
    shortDesc: 'Huiles d’olive extra-vierge, pâtes, sauces, épices et conserves de choix',
    iconName: 'ShoppingBag',
    badge: 'Essentiels Quotidien',
    itemCount: 'Plus de 80 références',
  },
  {
    id: 'boissons',
    name: 'Boissons & Gazouz',
    shortDesc: 'Jus purs, eaux minérales, gazouz tunisiens réputés et sirops fruités',
    iconName: 'Coffee',
    itemCount: 'Plus de 40 références',
  },
  {
    id: 'biscuits',
    name: 'Snacks & Biscuits',
    shortDesc: 'Biscuits croustillants, sablés artisanaux, chocolats et douceurs pour le goûter',
    iconName: 'Cookie',
    badge: 'Gourmandise',
    itemCount: 'Plus de 50 références',
  },
  {
    id: 'hygiene',
    name: 'Hygiène & Maison',
    shortDesc: 'Produits d’entretien, soins du corps, articles ménagers et essentiels famille',
    iconName: 'Sparkles',
    itemCount: 'Plus de 45 références',
  },
];

export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: 'p1',
    name: 'Amandes Décortiquées de Sfax (Sélection)',
    category: 'fruits-secs',
    description: 'Amandes fraîches de calibre supérieur, idéales pour la pâtisserie tunisienne et les collations saines au quotidien.',
    priceEstimate: 'Sur devis / Au kilo ou sachet',
    origin: 'Région de Sfax, Tunisie',
    packaging: 'Sachets fraîcheur 250g, 500g, 1kg',
    image: nutsImg,
    isPopular: true,
  },
  {
    id: 'p2',
    name: 'Dattes Deglet Nour Royales',
    category: 'fruits-secs',
    description: 'Dattes moelleuses translucides au goût miellé inimitable, cueillies à maturité dans le Sud tunisien.',
    priceEstimate: 'Format familial & individuel',
    origin: 'Tozeur / Kébili, Tunisie',
    packaging: 'Boîte prestige 500g & 1kg',
    image: nutsImg,
    isPopular: true,
  },
  {
    id: 'p3',
    name: 'Huile d’Olive Extra-Vierge Première Pression',
    category: 'epicerie',
    description: 'Huile pure d’olives chemlali de Sfax, pressée à froid avec des notes aromatiques douces et fruitées.',
    priceEstimate: 'Bouteille en verre & bidon 5L',
    origin: 'Oliveraies de Sfax, Tunisie',
    packaging: 'Bouteille 750ml & Bidons 3L / 5L',
    image: heroImg,
    isPopular: true,
  },
  {
    id: 'p4',
    name: 'Pistaches Torréfiées & Salées d’Exception',
    category: 'fruits-secs',
    description: 'Pistaches croquantes torréfiées artisanalement avec une pointe de sel marin pour sublimer les apéritifs.',
    priceEstimate: 'Au poids ou sachet sous vide',
    origin: 'Terroir tunisien',
    packaging: 'Sachets hermétiques 200g, 500g',
    image: nutsImg,
    isPopular: true,
  },
  {
    id: 'p5',
    name: 'Panier Gourmand Essentiels Famille',
    category: 'epicerie',
    description: 'Assortiment complet prêt à livrer : fruits secs, café moulu de tradition, miel naturel et douceurs biscuitées.',
    priceEstimate: 'Composition personnalisée',
    origin: 'Sélection MOKA Shop',
    packaging: 'Coffret bois ou carton renforcé',
    image: boxImg,
    isPopular: true,
  },
  {
    id: 'p6',
    name: 'Assortiment Boissons & Gazouz Tunisien',
    category: 'boissons',
    description: 'Rafraîchissements traditionnels et modernes, sodas emblématiques et jus de fruits pressés pour toutes les tables.',
    priceEstimate: 'Pack économique disponible',
    origin: 'Tunisie',
    packaging: 'Bouteilles verre & canettes',
    image: shopShelvesImg,
    isPopular: false,
  },
  {
    id: 'p7',
    name: 'Biscuits & Sablés Traditionnels aux Graines',
    category: 'biscuits',
    description: 'Sablés parfumés à la fleur d’oranger, graines de sésame dorées et amandes concassées.',
    priceEstimate: 'Boîte hermétique fraîcheur',
    origin: 'Ateliers partenaires, Sfax',
    packaging: 'Boîtes 350g & 700g',
    image: heroImg,
    isPopular: false,
  },
  {
    id: 'p8',
    name: 'Articles Entretien & Soins Doux Quotidien',
    category: 'hygiene',
    description: 'Produits testés pour l’entretien de la maison, lessives douces, savons traditionnels et soins essentiels.',
    priceEstimate: 'Formats familiaux économiques',
    origin: 'Marques certifiées',
    packaging: 'Flacons & recharges éco',
    image: shopShelvesImg,
    isPopular: false,
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'choix',
    title: 'Un Large Choix du Quotidien',
    subtitle: 'Tout ce dont votre foyer a besoin réuni en un seul lieu',
    description: 'Chez MOKA Shop, nous sélectionnons soigneusement les meilleurs fruits secs, aliments frais et secs, boissons et articles ménagers pour vous éviter de courir entre plusieurs boutiques.',
    points: [
      'Fruits secs frais, dattes et noix de première qualité',
      'Épicerie salée et sucrée pour toutes les envies',
      'Boissons, eaux minérales et gazouz rafraîchissants',
      'Produits d’hygiène et d’entretien pour la maison',
    ],
    icon: 'ShoppingCart',
  },
  {
    id: 'prix',
    title: 'Des Prix Compétitifs & Offres Régulières',
    subtitle: 'La garantie d’un budget maîtrisé sans compromis sur la qualité',
    description: 'Nous croyons que bien manger et bien s’équiper au quotidien doit rester accessible à toutes les familles tunisiennes. Nos tarifs sont étudiés au plus juste.',
    points: [
      'Tarifs transparents et sans frais cachés',
      'Packs économiques pour les commandes groupées ou familiales',
      'Prix dégressifs sur les fruits secs en volume',
      'Offres spéciales annoncées régulièrement',
    ],
    icon: 'BadgePercent',
  },
  {
    id: 'catalogue',
    title: 'Un Catalogue Pratique & Clair',
    subtitle: 'Retrouvez en quelques secondes vos produits favoris',
    description: 'Fini les recherches fastidieuses : notre sélection est organisée par rayons intuitifs. Vous pouvez nous demander n’importe quel produit même s’il n’est pas listé en vitrine !',
    points: [
      'Navigation fluide par rayons thématiques',
      'Fiches détaillées avec origine et conditionnement',
      'Recherche et demande de produits sur mesure',
      'Mise à jour régulière selon les arrivages frais',
    ],
    icon: 'BookOpen',
  },
  {
    id: 'livraison',
    title: 'Solutions de Livraison en Tunisie & Sfax',
    subtitle: 'Votre commande directement chez vous en toute sérénité',
    description: 'Nous assurons des tournées de livraison rapides sur tout le Grand Sfax ainsi que des expéditions fiables vers les différentes régions de Tunisie.',
    points: [
      'Livraison express sur Sfax ville et ses banlieues',
      'Emballage soigné pour préserver la fraîcheur des aliments',
      'Créneaux de livraison convenus à votre convenance',
      'Suivi direct par téléphone ou WhatsApp',
    ],
    icon: 'Truck',
  },
  {
    id: 'contact-simple',
    title: 'Expérience d’Achat Simple & Humaine',
    subtitle: 'Un contact direct avec notre équipe dévouée',
    description: 'Pas de tunnel d’achat compliqué ou de formulaires interminables. Écrivez-nous ou appelez-nous directement : nous préparons votre demande avec le sourire.',
    points: [
      'Formulaire de contact rapide en 1 minute',
      'Ligne directe au 51 308 083',
      'Échanges instantanés par WhatsApp',
      'Conseil sur le choix des fruits secs et denrées',
    ],
    icon: 'HeartHandshake',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Mohamed Ben Salem',
    location: 'Sfax (Route de Téniour)',
    comment: 'Les amandes et les pistaches de MOKA sont d’une fraîcheur exceptionnelle. La commande a été préparée et livrée très rapidement. Un service impeccable à Sfax !',
    rating: 5,
  },
  {
    name: 'Sonia Karray',
    location: 'Sfax (Sakiet Ezzit)',
    comment: 'Super boutique en ligne pour faire ses courses sans stress. On trouve tout : épicerie, boissons, hygiène et surtout des prix très honnêtes. Je recommande à 100%.',
    rating: 5,
  },
  {
    name: 'Anis Chaabane',
    location: 'Sfax Ville',
    comment: 'Un grand merci pour la réactivité sur WhatsApp et la qualité de l’huile d’olive et des dattes. MOKA simplifie vraiment notre quotidien.',
    rating: 5,
  },
];
