import Pocketbase from 'pocketbase'
import type { TypedPocketBase } from './pocketbase-typegen'

export const pb = new Pocketbase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase;