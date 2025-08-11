import type { ReactNode } from 'react'
import Divider from './ui/divider'

interface IDeviderProps {
    deviderText: ReactNode
}

const SectionDevider = ({ deviderText }: IDeviderProps) => {
    return (
        <div className='px-4 flex items-center gap-5 mb-10'>
            <Divider
                variant="dashed"
                thickness={2}
                color="black"
                className="my-8"
            />
            <span className='text-center text-3xl font-bold'>{deviderText}</span>
            <Divider
                variant="dashed"
                thickness={2}
                color="black"
                className="my-8"
            />
        </div>
    )
}

export default SectionDevider
