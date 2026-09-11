'use client'

import { useState } from 'react'
import { handleSubmitUser } from '@/app/api/handleSubmitUser'

const Add = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        handleSubmitUser({ e, name, setName, setSurname, surname })
    }

    return (
        <main className="flex flex-col gap-4 items-center justify-center">
            <h1>Add User</h1>
            <form
                className="flex flex-col gap-6 outline outline-zinc-50 p-4 rounded-md w-full max-w-3xs"
                onSubmit={(e) => handleSubmit(e)}
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="outline outline-zinc-50 rounded px-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="surname">Surname:</label>
                    <input
                        type="text"
                        is="surname"
                        name="surname"
                        className="outline outline-zinc-50 rounded px-2"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
                <button type="submit">Add User</button>
            </form>
        </main>
    )
}

export default Add
