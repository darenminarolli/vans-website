import { redirect } from "react-router-dom"

export async function requireAuth() {
    throw redirect('/login')
}