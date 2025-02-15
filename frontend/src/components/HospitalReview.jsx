import React from 'react'

const HospitalReview = () => {

    
const reviews = [
    {
        "name": "Rajesh Kumar",
        "review": "Excellent service! The doctors were very professional and caring.",
        "rating": 5,
        "image": "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        "name": "Priya Sharma",
        "review": "Great experience! Booking an appointment was quick and easy.",
        "rating": 4,
        "image": "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        "name": "Amit Verma",
        "review": "The staff was very friendly and helpful. Highly recommended!",
        "rating": 5,
        "image": "https://randomuser.me/api/portraits/men/50.jpg"
    }
];
  return (
    <div className='flex flex-col  rounded-lg px-6 md:px-10 lg:px-10 py-10 text-white'>
            <h2 className='text-2xl md:text-4xl font-semibold text-center mb-6 text-black'>Patient Reviews</h2>
            <div className='flex flex-col md:flex-row gap-6 justify-center'>
                {reviews.map((review, index) => (
                    <div key={index} className=' text-white p-10 py-14 rounded-lg shadow-md flex flex-col items-center w-full md:w-1/3  bg-[#6BBF8A]'>
                        
                        <p className='text-lg font-semibold'>{review.name}</p>
                        <div className='flex gap-1 my-2'>
                            {[...Array(review.rating)].map((_, i) => (
                                <span key={i} className='text-yellow-500'>&#9733;</span>
                            ))}
                        </div>
                        <p className='text-sm text-center'>{review.review}</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default HospitalReview