import User from '@/app/components/user'

import { UserProps } from '@/types/types'
import { handleFetchUsers } from '../api/handleFetchUsers'

const Users = async () => {
    let apiData: UserProps[] = []

    apiData = await handleFetchUsers()

    return (
        <main className="flex flex-col gap-4 items-center justify-center">
            <h1>Users</h1>
            {apiData?.length ? (
                <ul className="flex flex-col gap-6 outline outline-zinc-50 p-4 rounded-md w-full max-w-3xs">
                    {apiData.map((user: UserProps) => (
                        <li key={user.id}>
                            <User
                                id={user.id}
                                name={user.name}
                                surname={user.surname}
                            />
                        </li>
                    ))}
                </ul>
            ) : null}
        </main>
    )
}

export default Users
