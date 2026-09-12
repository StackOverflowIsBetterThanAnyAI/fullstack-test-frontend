import { handleDeleteUserProps } from '@/types/types'

export const handleDeleteUser = async ({ id }: handleDeleteUserProps) => {
    try {
        const response = await fetch(`/api/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            console.log('error', response.status)
            return false
        }
        return true
    } catch (error) {
        console.log('an error occurred during the api call', error)
        return false
    }
}
