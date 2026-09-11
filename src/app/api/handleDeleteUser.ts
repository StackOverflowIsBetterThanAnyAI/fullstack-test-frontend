import { SERVER_ADDRESS } from '@/constants/constants'
import { handleDeleteUserProps } from '@/types/types'

export const handleDeleteUser = async ({
    id,
    router,
}: handleDeleteUserProps) => {
    try {
        const response = await fetch(`${SERVER_ADDRESS}/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            console.log('error', response.status)
            throw new Error('an error occurred during the api call')
        }
        router.refresh()
    } catch {
        console.log('an error occurred during the api call')
    }
}
