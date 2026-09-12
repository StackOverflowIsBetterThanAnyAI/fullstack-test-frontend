'use client'

import { useEffect, useState } from 'react'

import User from '@/app/components/user'
import { UserProps } from '@/types/types'
import { handleFetchUsers } from '@/app/api/handleFetchUsers'

const Users = async () => {
    const [apiData, setApiData] = useState<UserProps[]>([])

    useEffect(() => {
        const loadData = async () => {
            const data = await handleFetchUsers()
            setApiData(data)
        }
        loadData()
    }, [])

    return (
        <main className="flex flex-col gap-4 items-center justify-center">
            <h1>Users</h1>
            {apiData?.length ? (
                <ul className="flex flex-col gap-6 outline outline-zinc-50 p-4 rounded-md w-full max-w-3xs">
                    {apiData.map((user: UserProps) => (
                        <li key={user.id}>
                            <User {...user} />
                        </li>
                    ))}
                </ul>
            ) : (
                <div>Keine User gefunden</div>
            )}
        </main>
    )
}

export default Users
