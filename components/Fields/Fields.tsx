import React from 'react'

interface Props {
    Name: string
    Label: string
    Type: string
}

function Fields({ Name, Label, Type }: Props) {

    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={Name}>{Label}</label>
            {
                Type != "textarea"
                    ? <input 
                        className='py-2 px-4 rounded-lg  ring-backgroundPink ring-2 bg-slate-200'
                        type={Type}
                        id={Name}
                        maxLength={50}
                    />
                    : <textarea
                        className='py-2 px-4 rounded-lg resize-none h-40 ring-backgroundPink ring-2 bg-slate-200'
                        id={Name}
                        maxLength={200}
                    />
            }
            <span></span>
        </div>
    )
}

export default Fields