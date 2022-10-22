import React, { useState } from 'react'
import { atom, useAtom } from 'jotai'
import { useRouter } from 'next/router'

export const formAtom = atom({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
    sport: "",
})

export const MultiPageForm = props => {
    const [currentPage, setCurrentPage] = useState(0)
    const [formData] = useAtom(formAtom)

    const pages = props.children
    const router = useRouter()

    const next = () => {
        if (currentPage + 1 > pages.length - 1) {
            setCurrentPage(currentPage)
        }
        else {
            setCurrentPage(currentPage + 1)
        }
    }

    const prev = () => {
        if (currentPage - 1 < 0) {
            setCurrentPage(currentPage)
        }
        else {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleSubmit = e => {
        e.preventDefault()

        console.log({ "formData": formData })
    }

    return (
        <form
            className='lg:w-[800px]
             mx-auto
             text-neutral-50
             bg-black
             bg-opacity-20
             p-5
             h-[800px]
             flex
             flex-col
             justify-between
             gap-4
             relative'
            onSubmit={handleSubmit}
        >
            <p className='absolute right-5 top-5'>{currentPage + 1} / {pages.length}</p>
            {
                pages.length > 0 &&
                pages[currentPage]
            }
            <div className='flex items-center justify-between gap-5'>
                {
                    currentPage !== 0 &&
                    <button className='flex-1 bg-red-600 p-5' type='button' onClick={prev}>Previous</button>
                }
                {
                    currentPage !== pages.length - 1 &&
                    <button className='flex-1 bg-purple-600 p-5' type='button' onClick={next}>Next</button>
                }
                {
                    currentPage === pages.length - 1 &&
                    <button className='flex-1 bg-green-600 p-5' type='submit'>Submit</button>
                }
            </div>
        </form>
    )
}