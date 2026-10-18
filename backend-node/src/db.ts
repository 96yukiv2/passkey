import { DatabaseSync } from 'node:sqlite'

const databaseUrl = new URL('../data/passkey.sqlite', import.meta.url)

export const db = new DatabaseSync(databaseUrl, {
    readOnly: true
})
