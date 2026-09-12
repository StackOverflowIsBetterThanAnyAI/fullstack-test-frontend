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
        const response = await fetch('/api/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, surname }),
        })

        if (!response.ok) {
            console.log('error', response.status)
            return
        }

        setName('')
        setSurname('')
    } catch (error) {
        console.error('an error occurred during the api call', error)
    }
}
