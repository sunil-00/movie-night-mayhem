/**
 * Calculates the properties for a circular progress bar based on the movie's rating.
 * 
 * @param {number} voteAverage - The movie's average vote (from 0 to 10).
 * @param {number} [radius=20] - The radius of the circular progress bar. Defaults to 20.
 * @returns {Object} An object containing the calculated properties for the circular progress bar:
 * @returns {number} rating - The movie's rating converted to a percentage (0 to 100).
 * @returns {number} radius - The original radius used for calculations.
 * @returns {number} normalizedRadius - The radius adjusted for stroke width.
 * @returns {number} circumference - The circumference of the circle based on the normalized radius.
 * @returns {number} offset - The calculated stroke dash offset for rendering the progress.
 */

export const calculateCircularProgress = (voteAverage: number, radius: number = 20): {
    rating: number;
    radius: number;
    normalizedRadius: number;
    circumference: number;
    offset: number;
} => {
    const rating = voteAverage * 10;
    const normalizedRadius = radius - 5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const offset = circumference - (rating / 100) * circumference;

    return {
        rating,
        radius,
        normalizedRadius,
        circumference,
        offset,
    };
};
