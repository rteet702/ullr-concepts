import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Dropdown = props => {
    const { title } = props
    const [expanded, setExpanded] = useState(false)

    const toggleDropdown = () => {
        setExpanded(prev => !prev)
    }

    return (
        <div>
            <button
                type='button'
                onClick={toggleDropdown}
                className='
                bg-neutral-900
                hover:bg-neutral-800
                transition-colors
                w-full
                text-left
                p-5
                backdrop:blur-xl'>

                {title}

            </button>
            <AnimatePresence>
                {
                    expanded === true &&
                    // if expanded is true, show the dropdown.
                    <motion.div>
                        {
                            props.children &&
                                props.children.length > 1 ?
                                props.children.map((item, index) =>
                                    <div
                                        key={index}
                                        className='bg-neutral-800 p-5 backdrop:blur-xl'
                                    >
                                        {item}
                                    </div>
                                )
                                :
                                props.children
                        }
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}