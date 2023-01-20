import React from 'react'

interface IProps {
    Name: string
    Label: string
    Type: string
}

function Fields({ Name, Label, Type }: IProps) {


    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={Name}>{Label}</label>
            {
                Type != "textarea"
                    ? <input type={Type} id={Name} className='py-2 px-4 rounded-lg  ring-backgroundPink ring-2 bg-slate-200' />
                    : <textarea id={Name} className='py-2 px-4 rounded-lg resize-none h-40 ring-backgroundPink ring-2 bg-slate-200' />
            }
            <span></span>
        </div>
    )
}

export default Fields