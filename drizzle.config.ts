import {defineConfig} from 'drizzle-kit'

export default defineConfig({
    out: './migrations',
    schema: './src/models/schema/index.ts',
    dialect: 'sqlite',  
})