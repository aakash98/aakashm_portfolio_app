export async function loadContact() {
    const res = await fetch(process.env.NEXT_API_URL + 'api/contact')
    const data = await res.json()

    return data
}