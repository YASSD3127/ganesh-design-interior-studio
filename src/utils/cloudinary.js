// src/utils/cloudinary.js

/**
 * Your Cloudinary cloud name
 * Find this in: Cloudinary Dashboard → Top Right
 */
const CLOUD_NAME = 'dpoao3wqz'; // ← CHANGE THIS to your cloud name

/**
 * Base URL for all Cloudinary images
 */
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

/**
 * Get optimized Cloudinary image URL
 * @param {string} path - Image path (e.g., 'projects/residential/2024-mumbai-3bhk/hero.jpg')
 * @param {object} options - Transformation options
 * @returns {string} Full Cloudinary URL with optimizations
 */
export const getCloudinaryUrl = (path, options = {}) => {
    const {
        width,
        height,
        crop = 'fill',
        quality = 'auto',
        format = 'auto'
    } = options;

    // Build transformation string
    const transformations = [];

    if (width) transformations.push(`w_${width}`);
    if (height) transformations.push(`h_${height}`);
    if (crop && (width || height)) transformations.push(`c_${crop}`);
    transformations.push(`f_${format}`);
    transformations.push(`q_${quality}`);

    const transformString = transformations.join(',');

    return `${BASE_URL}/${transformString}/${path}`;
};

/**
 * Get responsive image URLs for srcset
 * @param {string} path - Image path
 * @returns {object} Object with different size URLs
 */
export const getResponsiveUrls = (path) => {
    return {
        small: getCloudinaryUrl(path, { width: 400 }),
        medium: getCloudinaryUrl(path, { width: 800 }),
        large: getCloudinaryUrl(path, { width: 1200 }),
        xlarge: getCloudinaryUrl(path, { width: 1600 })
    };
};

/**
 * Get thumbnail URL (for cards, previews)
 * @param {string} path - Image path
 * @param {number} width - Thumbnail width (default: 400)
 * @param {number} height - Thumbnail height (default: 300)
 * @returns {string} Thumbnail URL
 */
export const getThumbnailUrl = (path, width = 400, height = 300) => {
    return getCloudinaryUrl(path, {
        width,
        height,
        crop: 'fill'
    });
};

/**
 * Get hero image URL (large, high quality)
 * @param {string} path - Image path
 * @returns {string} Hero image URL
 */
export const getHeroUrl = (path) => {
    return getCloudinaryUrl(path, { width: 1920 });
};