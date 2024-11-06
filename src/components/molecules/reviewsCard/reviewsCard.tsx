import React from 'react';
import { MovieReviewsSpace } from '@/types';

/**
 * @function ReviewCard
 * @param {MovieReviewsSpace.Result} review
 * @returns React.JSX.Element
 * @author Sunil Dhakal
 */

interface ReviewCardProps {
    review: MovieReviewsSpace.Result;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }): React.JSX.Element => {
    return (
        <div className="m-2 p-4 bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200 flex flex-col">
            <div className="flex items-center mb-2">
                {review.author_details?.avatar_path && (
                    <img
                        src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`}
                        alt={review.author}
                        className="w-12 h-12 rounded-full mr-3"
                    />
                )}
                <div className="flex flex-col">
                    <span className="font-bold font-poppins">A review by {review.author}</span>
                    <p className='font-light text-sm text-gray-500 font-poppins'>Written by <span className='font-semibold text-gray-500 font-poppins'>{review.author}</span> on <span className="text-gray-500 text-sm">{new Date(review.created_at).toLocaleDateString()}</span></p>
                </div>
            </div>
            <p className="text-gray-700">{review.content}</p>
        </div>
    );
};

export default ReviewCard;
