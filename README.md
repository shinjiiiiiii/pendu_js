# :warning: Ne pas pousser sur la branche master

# Le Pendu

![image alt](https://bafybeicf2ors3jkmbpvojxrji3mlo2fj5zrmshah4uoibfmsjdpcbt2twe.ipfs.infura-ipfs.io)
___

## Définition

**Le pendu** est un jeu consistant à trouver un mot en devinant quelles sont les lettres qui le composent. Le jeu se joue traditionnellement à deux, avec un papier et un crayon, selon un déroulement bien particulier.

Il est occasionnellement pratiqué dans les salles de classe où un élève au tableau joue contre l'ensemble de ses camarades, en dessinant à la craie. Les étudiants en Droit le pratiquent aussi pour jouer à se faire deviner des noms d'arrêts importants de la jurisprudence, ce qui permet de réviser d'une manière ludique tout en corsant largement la difficulté du jeu.

Le dessin une fois terminé montre un bonhomme allumette pendu.
___

## Déroulement
Les deux joueurs dans cet exemple s'appellent `Stéphane` et `Julien`:

- Julien pense à un mot et dessine une rangée de tirets, chacun correspondant à une lettre de ce mot
- Stéphane annonce une lettre.
La lettre fait-elle partie du mot ?
- Oui : Julien l'inscrit à sa place autant de fois qu'elle se trouve dans le mot.
- Non : Julien dessine le premier trait du pendu.
Le jeu se poursuit jusqu'à ce que :
- Stéphane gagne la partie en trouvant toutes les lettres du mot et/ou en le devinant correctement.
- Julien gagne la partie en complétant le dessin du pendu..
___
## Requêter API externe


- Dans un premier temps, utiliser une liste de mots static
- ensuite il faudra utiliser l'API ci-jointe

[personne aléatoires](https://randomuser.me/api/?results=10/) (au format `JSON`) à requêter avec [fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch#:~:text=L'utilisation%20la%20plus%20simple,pas%20exactement%20de%20l'image.)
___

## Besoin d'enlever les caractères diacritiques?

```js
const str = "Crème Brulée"
str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
console.log(str) // "Creme Brulee"
```

## Exigences du projet

- JavaScript browser comme langage principal
- Récupérer les images sur github https://github.com/EdenSchoolFrance/pendu-a2-2021
- [Bootstrap](https://getbootstrap.com) pour styliser l'interface et **SCSS**
- Responsive (avec un SEUL breakpoint mobile)
- Pousser l'état final de votre projet sur le [répo github edenschoolfrance](https://github.com/EdenSchoolFrance/pendu-a2-2021) (prévu à cet effet) avec une **branche nommée avec votre nom prénom**

# :warning: Ne pas pousser sur la branche master


