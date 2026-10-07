# Liste de tâches

Application d'exemple du module « CI/CD avec Jenkins ».

## Commandes utiles

| Commande | Ce qu'elle fait |
|----------|-----------------|
| `npm ci` | Installe les dépendances |
| `npm test` | Lance les tests |
| `npm run dev` | Affiche le site sur votre poste |
| `npm run build` | Crée le dossier `dist` |

---

Les 6 sections suivantes sont à compléter au jour 4.

## 1. Le site

Adresse du site en ligne : https://hilarious-gingersnap-394e44.netlify.app/

## 2. Démarrer Jenkins

bash : docker run -d --name jenkins -p 8080:8080 -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts
url : http://localhost:8080

## 3. Configuration

Outil Node.js : node22 (version 22.23.3)
Credentials :   netlify-site
                netlify-token

## 4. Le pipeline

Les 6 étapes de la pipeline : 
    - Installer (npm ci)
    - Tester (test:ci raport)
    - Construire (build dans le dossier dist)
    - Prévisualiser (adresse temporaire)
    - Valider (validation humaine)
    - Déployer (Site principal)

## 5. Mettre en ligne

Les différents étapes pour le déploiement en ligne.
bash :  git add .
        git commit -m ""
        git push orign main
        Jenkins > Pipeline > Dernier build > Console Output > Procced / Abord
        Actualiser le site

## 6. Revenir en arrière

git revert HEAD
