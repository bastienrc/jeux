# Flashcards

Jeux de flashcards avec gestion du score.

## Frontend

```
cd frontend
yarn start
```

## Backend

```sh
cd backend
docker-compose up -d
yarn start
```

La base de donnée Mongo est géré avec docker.

Mongo fonctionne sans authentification.

TODO: Ajouter l'authentification à Mongo
TODO: Ajouter le service pour Node au docker-compose

La création des 3 utilisateurs root, admin et flashcard fonctionnent.
