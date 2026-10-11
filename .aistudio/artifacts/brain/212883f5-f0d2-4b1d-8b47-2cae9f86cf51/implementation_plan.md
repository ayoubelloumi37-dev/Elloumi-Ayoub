# MOKA SHOP — Vitrine & Plateforme de Contact (Tunisie, Sfax)

Un site web vitrine complet, moderne et optimisé pour la conversion pour **MOKA Shop** (« Votre boutique, tout simplement »), combinant le design éditorial chaleureux et haut de gamme inspiré de la maquette Bistey avec l'identité visuelle de marque MOKA (rouge gourmand, crème lin, bois et typographie soignée).

---

## Décisions Clés & Alignement Utilisateur

> [!IMPORTANT]
> **Périmètre fonctionnel strict** : Conformément à la consigne « Ne pas ajouter de fonctionnalités ou formulaire autres qu'un formulaire de contact », le site ne comporte aucun système de paiement bancaire complexe ou panier d'achat e-commerce lourd. Il s'agit d'une vitrine moderne axée sur la génération de contacts qualifiés, les demandes d'informations et la mise en relation directe avec MOKA à Sfax (téléphone, WhatsApp, email et formulaire de contact).

- **Direction Esthétique** : Fusion harmonieuse entre l'ambiance éditoriale gourmande *Bistey* (teintes crème, bordeaux profond, typographie display affirmée, cartes produits élégantes) et la charte *MOKA* (rouge signature, authenticité des produits tunisiens et du terroir, accents bois chaleureux).
- **Structure des 4 Pages** :
  1. **Accueil** : Hero à fort impact, présentation des rayons vedettes (Fruits secs premium, Épicerie & Huile d'olive, Boissons & Gazouz, Biscuits & Snacks, Hygiène), proposition de valeur claire, réassurance locale (Sfax, Tunisie) et appel à l'action vers le formulaire.
  2. **À Propos** : L'histoire de MOKA Shop, notre engagement pour la qualité, la proximité avec les familles tunisiennes, la fraîcheur et la sélection rigoureuse.
  3. **Services** : Détail des 5 piliers de service (Large choix quotidien, Prix compétitifs & offres, Catalogue clair, Livraison en Tunisie / Sfax, Expérience d'achat fluide).
  4. **Contact** : Formulaire de contact complet et interactif (nom, téléphone, email, objet/rayon concerné, message), coordonnées officielles (51 308 083, ayoubelloumi90@gmail.com, Sfax, Tunisie), carte stylisée interactive et bouton direct WhatsApp.

---

## 1. Vue d'Ensemble & Proposition de Valeur

- **Nom de la marque** : MOKA
- **Slogan / Promesse** : *« Votre boutique, tout simplement »* · *« Le quotidien a meilleur goût »*
- **Secteur** : Alimentation générale, épicerie fine, fruits secs tunisiens d'excellence, boissons, biscuits, hygiène et entretien.
- **Localisation** : Sfax, Tunisie
- **Objectif principal** : Capter des demandes de renseignements, commandes par devis et prises de contact via un formulaire fluide et des canaux directs accessibles.
- **Public cible** : Familles, particuliers et professionnels à Sfax et en Tunisie recherchant des produits du quotidien de qualité supérieure avec un service attentionné et réactif.

---

## 2. Expérience Utilisateur & Direction Visuelle

### Parcours Utilisateur
1. **Arrivée (Hero Section)** : Message d'accueil puissant, promesse de fraîcheur et d'authenticité, aperçu des produits emblématiques (fruits secs, huile d'olive, délices du marché) et double CTA (Découvrir nos rayons / Nous contacter).
2. **Exploration des Rayons** : Grille élégante des catégories avec filtres interactifs permettant d'explorer les spécialités (Fruits secs de Sfax, Épicerie gourmande, Boissons fraîches, Goûters & Biscuits) et bouton direct « Se renseigner ».
3. **Piliers de Confiance & Services** : Mise en valeur des engagements (fraîcheur garantie, prix compétitifs, livraison locale rapide).
4. **Prise de Contact fluide** : Formulaire de demande sans friction avec validation en temps réel des champs, confirmation immédiate et coordonnées cliquables.

### Charte Graphique & Typographie
- **Palette 60-30-10** :
  - **60% Toile neutre & chaleureuse** : Crème lin et blanc cassé (`#FAF7F2`, `#F4EFEA`) évitant la froideur stérile tout en restant très lisible.
  - **30% Surfaces structurelles & contrastes** : Rouge MOKA bordeaux profond (`#881326`, `#9E1B32`), bois noble (`#3D251E`) et sable doré doux.
  - **10% Accents & Actions** : Rouge vif MOKA (`#DC2626` / `#E11D48`) pour les points focaux et boutons d'action.
- **Typographie** :
  - *Titres & Display* : **Oswald** & **Plus Jakarta Sans** pour un rendu percutant, éditorial et moderne, inspiré de Bistey.
  - *Corps de texte* : **Plus Jakarta Sans** (élégant, aéré, haute lisibilité).
- **Discipline anti-slop** : Zéro fausses barres de progression, aucune mention technique inutile, boutons d'action en français naturel, respect strict des contrastes WCAG AA.

---

## 3. Décisions Produit & Architecture Fonctionnelle

- **Navigation multi-pages fluide (SPA)** : Navigation instantanée entre Accueil, À propos, Services et Contact sans rechargement lourd, avec conservation de l'état et scrolling fluide vers les ancres.
- **Formulaire de contact enrichi** :
  - Champs : Nom complet, Téléphone (format tunisien +216), Adresse email (`ayoubelloumi90@gmail.com` comme destinataire cible), Rayon / Objet de la demande, Message.
  - Validation client instantanée, retour visuel avec message de succès et récapitulatif.
- **Accès direct WhatsApp & Appel** : Intégration ergonomique d'un lien d'appel téléphonique direct (`tel:+21651308083`) et WhatsApp (`https://wa.me/21651308083`) tout en gardant le formulaire au centre de la conversion.
- **Asset visuel MOKA** : Reproduction fidèle des codes du logo 3D MOKA (panier en bois gourmand, feuille signature, teintes rouges et bois) dans la barre de navigation et le hero.

---

## 4. Architecture Technique

```
┌────────────────────────────────────────────────────────────────────────┐
│                               App.tsx                                  │
│   (Gestion de la navigation active, état global & modal notification) │
└──────────────────┬─────────────────────────────────────────────────────┘
                   │
         ┌─────────┴─────────┐
         │     Header        │ (Logo MOKA, Navigation 4 pages, Bouton Contact)
         └─────────┬─────────┘
                   │
    ┌──────────────┼──────────────┬──────────────┐
    ▼              ▼              ▼              ▼
┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐
│   Accueil  │ │  À Propos  │ │  Services  │ │  Contact   │
│  - Hero    │ │  - Histoire│ │  - 5 Offres│ │  - Form    │
│  - Rayons  │ │  - Valeurs │ │  - Zones   │ │  - Infos   │
│  - Produits│ │  - Équipe  │ │  - Démarche│ │  - Horaires│
│  - Avis    │ │  - Sfax    │ │            │ │  - Direct  │
└────────────┘ └────────────┘ └────────────┘ └────────────┘
                   │
         ┌─────────┴─────────┐
         │     Footer        │ (Coordonnées Sfax, Liens, Mentions légales)
         └───────────────────┘
```

---

## Prochaines Étapes
Dès validation du plan par vos soins, nous lancerons la mise en place complète de l'application avec les 4 pages interactives, le style graphique soigné et le formulaire de contact opérationnel.
