export type UserProps = {
    id: number
    name: string
    surname: string
}

export type handleDeleteUserProps = {
    id: number
    setIsDeleted: (value: boolean) => void
}

export type handleSubmitUserProps = {
    e: React.FormEvent<HTMLFormElement>
    name: string
    surname: string
    setName: (name: string) => void
    setSurname: (surname: string) => void
}
