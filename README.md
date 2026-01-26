# Mathieu Gayvallet - Portfolio

Portfolio web moderne et réactif showcasant des compétences en développement front-end et mobile, ainsi que des projets techniques variés.

## À propos

Ce projet est un portfolio personnel construit avec des technologies modernes et performantes. Il présente une collection de projets, des compétences techniques et facilite le contact direct.

## Caractéristiques

- Interface utilisateur réactive et moderne
- Système de routage dynamique avec React Router
- Design personnalisé avec Tailwind CSS et composants Radix UI
- Animations fluides utilisant GSAP
- Formulaire de contact intégré avec EmailJS et Resend
- Performance optimisée avec Vite
- Support multilingue
- Déploiement via GitHub Pages

## Stack Technologique

### Frontend

- **React** 18.2.0 - Bibliothèque de composants UI
- **React Router DOM** 6.21.2 - Gestion du routage
- **Vite** 6.2.3 - Bundler et serveur de développement
- **Tailwind CSS** 3.4.1 - Framework CSS utilitaire
- **Radix UI** - Composants d'interface accessibles

### Bibliothèques

- **GSAP** 3.13.0 - Animations avancées
- **Lucide React** - Icônes SVG
- **Zustand** 4.4.7 - Gestion d'état
- **SWR** 2.2.4 - Data fetching et caching
- **EmailJS** 3.2.0 - Service d'email client-side
- **Resend** 3.0.0 - API email

### Outils de développement

- PostCSS et Autoprefixer
- Class Variance Authority
- Tailwind Merge

## Installation

Prérequis: Node.js 16.0.0 ou supérieur

```bash
# Cloner le dépôt
git clone https://github.com/mgayvallet/mgayvallet.github.io.git
cd mgayvallet.github.io

# Installer les dépendances
npm install
```

## Scripts disponibles

```bash
# Démarrer le serveur de développement (accessible sur http://localhost:5173)
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production locale
npm run preview
```

## Structure du projet

```
.
├── src/
│   ├── App.jsx                 # Composant racine avec routeur
│   ├── index.jsx               # Point d'entrée React
│   ├── global.css              # Styles globaux
│   ├── lib/
│   │   ├── utils.js            # Utilitaires partageés
│   │   └── hooks/
│   │       └── useRouter.jsx   # Hook personnalisé pour la gestion des routes
│   └── routes/
│       └── Index.jsx           # Page d'index
├── public/                     # Ressources statiques
├── index.html                  # Template HTML
├── vite.config.js              # Configuration Vite
├── tailwind.config.js          # Configuration Tailwind CSS
├── postcss.config.js           # Configuration PostCSS
└── package.json                # Dépendances et scripts
```

## Déploiement

Ce projet est configuré pour être déployé sur GitHub Pages. Le fichier `CNAME` contient le domaine personnalisé.

```bash
npm run build
# Les fichiers de production seront dans le répertoire dist/
```

## Variables d'environnement

Pour utiliser les services d'email, configurez les variables suivantes:

```
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
```

## Compatibilité navigateur

- Chrome (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Edge (dernières versions)

## Licence

Ce projet est la propriété intellectuelle de Mathieu Gayvallet. Tous droits réservés.

## Contact

Pour discuter de collaborations ou d'opportunités professionnelles:

- Portfolio: https://mgayvallet.github.io
- LinkedIn: Consultez le site pour les coordonnées
- Email: Disponible via le formulaire de contact du portfolio

## Contribuer

Les contributions externes ne sont pas acceptées pour ce projet personnel.

---

Construit avec attention au détail et aux meilleures pratiques de développement web moderne.
