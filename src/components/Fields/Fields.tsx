import React from 'react'

interface Props {
    Name: string
    Label: string
    Type: string
    setFormValues: any
    formValues: any
}

function Fields({ Name, Label, Type, setFormValues, formValues }: Props) {
    
    function handleChange(e: any){
        let newValues = {...formValues, [e.target.name]: e.target.value}
        setFormValues(newValues)
    }
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={Name}>{Label}</label>
            {
                Type != "textarea"
                    ? <input
                        name={Name}
                        className='py-2 px-4 rounded-lg  ring-backgroundPink ring-2 bg-slate-200'
                        type={Type}
                        id={Name}
                        maxLength={50}
                        onChange={(e) => handleChange(e)}
                    />
                    : <textarea
                        className='py-2 px-4 rounded-lg resize-none h-40 ring-backgroundPink ring-2 bg-slate-200'
                        id={Name}
                        maxLength={200}
                        name={Name}
                        onChange={(e) => handleChange(e)}
                    />
            }
            <span></span>
        </div>
    )
}

export default Fields