import React from 'react'

const array = [
    {
        "id": 1,
        "service": "Online Advertising"
    },
    {
        "id": 2,
        "service": "Digital Marketing"
    },
    {
        "id": 3,
        "service": "Web Development"
    },
    {
        "id": 4,
        "service": "Design Services"
    },
    {
        "id": 5,
        "service": "Software Development"
    },
    {
        "id": 6,
        "service": "AI Services"
    },
    {
        "id": 7,
        "service": "Outsourcing"
    },
    {
        "id": 8,
        "service": "Who We Are?"
    }
]

const OnlineAdvertising = () => {
    return (
        <div className='border px-10 py-4 hidden md:flex justify-between font-semibold text-[#873e3e]'>

            {array.map((items) => (
                <div className="" key={items.id}>
                    <p>{items.service}</p>
                </div>
            ))}

        </div>
    )
}

export default OnlineAdvertising