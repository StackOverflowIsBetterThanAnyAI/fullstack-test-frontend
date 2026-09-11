'use client'

import { useRouter } from 'next/navigation'

import { UserProps } from '@/types/types'
import { handleDeleteUser } from '@/app/api/handleDeleteUser'

const User = ({ id, name, surname }: UserProps) => {
    const router = useRouter()

    const handleDelete = (id: number) => {
        handleDeleteUser({ id, router })
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
