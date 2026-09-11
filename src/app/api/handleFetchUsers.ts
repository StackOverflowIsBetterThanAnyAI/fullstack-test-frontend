import { SERVER_ADDRESS } from '@/constants/constants'

export const handleFetchUsers = async () => {
    try {
        const response = await fetch(`${SERVER_ADDRESS}/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            console.log('error', response.status)
            return []
        }

        const data = await response.json()
        return data?.data || []
    } catch (error) {
        console.error('an error occurred during the api call', error)
        return []
    }
}
