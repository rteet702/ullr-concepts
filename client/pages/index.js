import React from 'react'
import { MultiPageForm } from '../components/multi-step-form/MultiPageForm'
import { PageOne } from '../components/multi-step-form/PageOne'
import { PageTwo } from '../components/multi-step-form/PageTwo'

const index = () => {
    return (
        <div className='container h-screen mx-auto'>
            <MultiPageForm>
                <PageOne />
                <PageTwo />
            </MultiPageForm>
        </div>
    )
}

export default index