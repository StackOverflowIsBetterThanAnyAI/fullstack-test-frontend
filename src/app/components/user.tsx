'use client'

import { UserProps } from '@/types/types'
import { handleDeleteUser } from '@/app/api/handleDeleteUser'

type UserDeleteProps = { onDelete: (id: number) => void }

const User = ({ id, name, surname, onDelete }: UserProps & UserDeleteProps) => {
    const handleDelete = async (id: number) => {
        const isDeleteSuccess = await handleDeleteUser({ id })
        if (isDeleteSuccess) {
            onDelete(id)
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-1">
                <p className="w-fit">{name}</p>
                <p className="w-fit">{surname}</p>
            </div>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}

export default User
