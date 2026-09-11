import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export type UserProps = {
    id: number
    name: string
    surname: string
}

export type handleDeleteUserProps = {
    id: number
    router: AppRouterInstance
}

export type handleSubmitUserProps = {
    e: React.FormEvent<HTMLFormElement>
    name: string
    surname: string
    setName: (name: string) => void
    setSurname: (surname: string) => void
}
