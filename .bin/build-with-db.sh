#!/usr/bin/env bash

installDependencies() {
    echo "š Installing dependencies...";
    pnpm i || npm i;
    echo -e "\nā Dependencies successfully installed.";
}

schemaGeneration() {
    echo -e "\nš Database schema generation...";
    pnpm db:generate || npm run db:generate;
    echo "ā Database schema successfully generated.";
}

dataMigration() {
    echo -e "\nš Initial migration to the database...";
    pnpm db:migrate:init || npm run db:migrate:init;
    echo "ā The data was successfully migrated.";
}

startServer() {
    echo -e "\nš Starting the server...";
    pnpm start:dev || npm run start:dev;
}

installDependencies && schemaGeneration && dataMigration && startServer