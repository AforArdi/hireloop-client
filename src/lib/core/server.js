'use server'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const serverMutation = async (path, data) => {
    const res = await fetch(`${baseUrl}/api/${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    // handle error
    if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.message || res.statusText)
    }
    return res.json()
}

export const serverFetch = async (path) => {
    const res = await fetch(`${baseUrl}/api/${path}`)
    // handle error
    if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.message || res.statusText)
    }
    return res.json()
}