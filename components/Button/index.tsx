import Link from 'next/link';

interface Props {
    type?: string;
    href?: string;
    children: string;
}

const Button = (props: Props) => {
    if (props.type === 'LINK') {
        return (
            <Link
                href={`/produtos/${props.href}`}
                className='text-lg p-2  mx-auto radius-5 ring-2 my-[1rem] ring-backgroundPink font-kalam rounded-lg select-none button-default'>
                {props.children}
            </Link>
        )
    }
    return (
        <button className='cursor-pointer text-lg p-2  mx-auto radius-5 ring-2 my-[1rem] ring-fontPurple font-kalam rounded-lg select-none button-secondary'>
            {props.children}
        </button>
    )

}

export default Button