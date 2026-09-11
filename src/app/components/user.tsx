'use client'

import { UserProps } from '@/types/types'
import { useState } from 'react'
import { handleDeleteUser } from '../api/handleDeleteUser'

const User = ({ id, name, surname }: UserProps) => {
    const [isDeleted, setIsDeleted] = useState(false)

    const handleDelete = (id: number) => {
        handleDeleteUser({ id, setIsDeleted })
    }

    return isDeleted ? null : (
        <div key={id} className="flex flex-col gap-2">
            <div className="flex gap-2">
                <p className="w-fit">{name}</p>
                <p className="w-fit">{surname}</p>
            </div>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}

export default User
