import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string;
    icon?: React.ReactNode;
    position?: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
    return (
        <div>
            <button className="p-[3px] relative w-full md:w-60 md:mt-10">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-white-100 rounded-lg" />
                <div className={`px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent ${otherClasses}`}>
                    <div className="flex items-center justify-center">
                        {position === 'left' && icon}
                        <span className="mr-2">{title}</span>
                        {position === 'right' && icon}
                    </div>
                </div>
            </button>
        </div>
    )
}

export default MagicButton