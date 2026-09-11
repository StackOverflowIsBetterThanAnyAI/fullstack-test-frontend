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
        }

        setName('')
        setSurname('')
    } catch {
        console.error('error')
    }
}
