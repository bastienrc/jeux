#!/usr/bin/env bash
echo "Création des utilisateurs..."

mongo admin --host localhost -u root -p root --eval "
  db.createUser(
    {
      user: 'player',
      pwd: 'mdp',
      roles: [{ role: 'readWrite', db: 'player'}]
    }
  );

  db.createUser(
    {
      user: 'admin',
      pwd: 'mdp',
      roles: [{ role: 'userAdminAnyDatabase', db: 'admin' }]
    }
  );
"

echo "Utilisateurs créés."
