#!/usr/bin/env bash

installDependencies() {
    echo "🕐 Installing dependencies...";
    pnpm build:dev || npm run build:dev;
    echo -e "\n✅ Dependencies successfully installed.";
}

schemaGeneration() {
    echo -e "\n🕐 Database schema generation...";
    pnpm db:generate || npm run db:generate;
    echo "✅ Database schema successfully generated.";
}

dataMigration() {
    echo -e "\n🕐 Initial migration to the database...";
    pnpm db:migrate:init || npm run db:migrate:init;
    echo "✅ The data was successfully migrated.";
}

startServer() {
    echo -e "\n🕐 Starting the server...";
    open "http://localhost:3000/hello?name=you";
    pnpm start:dev || npm run start:dev;
}

installDependencies && schemaGeneration && dataMigration && startServer