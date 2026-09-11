import { SERVER_ADDRESS } from '@/constants/constants'
import { handleSubmitUserProps } from '@/types/types'

export const handleSubmitUser = async ({
    e,
    name,
    setName,
    setSurname,
    surname,
}: handleSubmitUserProps) => {
    e.preventDefault()
    if (!name?.length || !surname?.length) {
        return
    }

    try {
        const response = await fetch(`${SERVER_ADDRESS}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, surname }),
        })

        if (!response.ok) {
            console.log('error', response.status)
            throw new Error('an error occurred during the api call')
        }

        setName('')
        setSurname('')
    } catch {
        console.error('an error occurred during the api call')
    }
}
