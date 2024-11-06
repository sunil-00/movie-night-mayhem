/**
 * @function getColorBasedOnRating
 * @description Returns a color string based on the movie rating.
 * This function categorizes ratings into different ranges and assigns
 * a corresponding color to represent the rating visually.
 * 
 * - Ratings 8 and above: Green (indicates good quality)
 * - Ratings 7 to 7.9: Light Green (above average)
 * - Ratings 6 to 6.9: Yellow (average)
 * - Ratings 5 to 5.9: Orange (below average)
 * - Ratings 4 to 4.9: Light Red (poor)
 * - Ratings below 4: Red (very poor)
 * 
 * @param {number} rating - The movie rating (from 0 to 10).
 * @returns {string} A string representing the color for the rating.
 */
export const getColorBasedOnRating = (rating: number): string => {
    if (rating >= 8) return 'green';          // Good quality
    if (rating >= 7) return 'lightgreen';     // Above average
    if (rating >= 6) return 'yellow';         // Average
    if (rating >= 5) return 'orange';         // Below average
    if (rating >= 4) return 'lightcoral';     // Poor
    return 'red';                              // Very poor
};
