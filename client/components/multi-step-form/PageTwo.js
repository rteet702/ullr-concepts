import React from 'react'
import { useAtom } from 'jotai'
import { formAtom } from './MultiPageForm'

export const PageTwo = () => {
    const [formData, setFormData] = useAtom(formAtom)

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='flex flex-col gap-2'>
            <h2 className='text-3xl mb-10'>About you</h2>
            <input
                type="text"
                name="sport"
                placeholder='Sport of Choice?'
                value={formData.sport}
                onChange={handleChange}
            />
        </div>
    )
}