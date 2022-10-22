import React from 'react'
import { useAtom } from 'jotai'
import { formAtom } from './MultiPageForm'

export const PageOne = () => {
    const [formData, setFormData] = useAtom(formAtom)

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='flex flex-col gap-2'>
            <h2 className='text-3xl mb-10'>Register</h2>
            <input type="text" name="firstName" placeholder='First name' value={formData.firstName} onChange={handleChange} />
            <input type="text" name="lastName" placeholder='Last name' value={formData.lastName} onChange={handleChange} />
            <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} />
            <input type="password" name="confirm" placeholder='Confirm Password' value={formData.confirm} onChange={handleChange} />
        </div>
    )
}