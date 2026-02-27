// Updated project data for Ganesh Studio Interior Design
// Detailed project data with multiple images for each project
import { getCloudinaryUrl, getThumbnailUrl } from '../utils/cloudinary';

const PROJECT_IMAGES = {
  AbdulBhai: {
    hero: 'Projects/residentials/AbdulBhai/JAY02769_mlngyo.jpg',
  },
  puneVilla: {
    hero: 'projects/residential/2024-pune-villa-modern/hero.jpg',
    // ... more images
  }
  // ... more projects
};



export const projectsData = [
  {
    id: 1,
    title: 'Modern 3BHK Apartment',
    category: 'residential',
    location: 'Mumbai',
    size: '1,800 sq ft',
    year: '2024',

    // Card thumbnail (400x300)
    image: getThumbnailUrl(PROJECT_IMAGES.AbdulBhai.hero),

    description: 'Contemporary interior design with minimalist aesthetics and functional spaces.',

    // Gallery images
    // images: [
    //   {
    //     url: getCloudinaryUrl(PROJECT_IMAGES.mumbai3bhk.livingRoom1, { width: 1600 }),
    //     caption: 'Living Room - Contemporary Design with Natural Light'
    //   },
    //   {
    //     url: getCloudinaryUrl(PROJECT_IMAGES.mumbai3bhk.livingRoom2, { width: 1600 }),
    //     caption: 'Living Room - Another Angle'
    //   },
    //   {
    //     url: getCloudinaryUrl(PROJECT_IMAGES.mumbai3bhk.bedroomMaster, { width: 1600 }),
    //     caption: 'Master Bedroom - Serene and Spacious'
    //   },
    //   {
    //     url: getCloudinaryUrl(PROJECT_IMAGES.mumbai3bhk.bedroomGuest, { width: 1600 }),
    //     caption: 'Guest Bedroom'
    //   },
    //   {
    //     url: getCloudinaryUrl(PROJECT_IMAGES.mumbai3bhk.kitchen, { width: 1600 }),
    //     caption: 'Modern Kitchen with Island'
    //   },
    //   {
    //     url: getCloudinaryUrl(PROJECT_IMAGES.mumbai3bhk.bathroomMaster, { width: 1600 }),
    //     caption: 'Master Bathroom - Luxury Finishes'
    //   },
    //   {
    //     url: getCloudinaryUrl(PROJECT_IMAGES.mumbai3bhk.balcony, { width: 1600 }),
    //     caption: 'Balcony with City Views'
    //   }
    // ],

    // Video (YouTube)
    // videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID', // ← Add your YouTube video ID

    features: [
      'Open concept living and dining',
      'Italian marble flooring',
      'Modular kitchen with premium appliances',
      'Smart home automation',
      'Custom-designed furniture',
      'Ambient lighting throughout'
    ],

    // materials: ['Italian Marble', 'Teak Wood', 'Leather Upholstery']
  },

  {
    id: 2,
    title: 'Luxury Villa Interior',
    category: 'residential',
    description: 'Premium finishes with elegant design elements',
    location: 'Surat',
    size: '4,500 sq ft',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    type: 'Residential'
  },
  {
    id: 3,
    title: 'Contemporary 2BHK',
    category: 'residential',
    description: 'Minimalist design with functional spaces',
    location: 'Vadodara',
    size: '1,200 sq ft',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    type: 'Residential'
  },
  {
    id: 4,
    title: 'Traditional Home Renovation',
    category: 'residential',
    description: 'Classic design meets modern comfort',
    location: 'Rajkot',
    size: '3,000 sq ft',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
    type: 'Residential'
  },
  {
    id: 5,
    title: 'Corporate Office',
    category: 'commercial',
    description: 'Professional workspace with collaborative zones',
    location: 'Ahmedabad',
    size: '5,000 sq ft',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    type: 'Commercial'
  },
  {
    id: 6,
    title: 'Boutique Retail Store',
    category: 'commercial',
    description: 'Eye-catching retail space design',
    location: 'Surat',
    size: '800 sq ft',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    type: 'Commercial'
  },
  {
    id: 7,
    title: 'Restaurant Interior',
    category: 'commercial',
    description: 'Inviting ambiance for dining experience',
    location: 'Gandhinagar',
    size: '2,500 sq ft',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    type: 'Commercial'
  },
  {
    id: 8,
    title: 'Medical Clinic',
    category: 'commercial',
    description: 'Clean and welcoming healthcare space',
    location: 'Vadodara',
    size: '1,500 sq ft',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
    type: 'Commercial'
  },
  {
    id: 9,
    title: 'Upcoming Villa Project',
    category: '3d-renders',
    description: '3D visualization before execution',
    location: 'Ahmedabad',
    size: '3,800 sq ft',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
    type: '3D Render'
  },
  {
    id: 10,
    title: 'Office Space Concept',
    category: '3d-renders',
    description: 'Modern workspace 3D design',
    location: 'Surat',
    size: '4,200 sq ft',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    type: '3D Render'
  },
  {
    id: 11,
    title: 'Apartment Redesign Plan',
    category: '3d-renders',
    description: 'Complete makeover visualization',
    location: 'Vadodara',
    size: '1,800 sq ft',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
    type: '3D Render'
  },
  {
    id: 12,
    title: 'Apartment Plan',
    category: '3d-renders',
    description: 'Complete makeover visualization',
    location: 'Vadodara',
    size: '1,800 sq ft',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
    type: '3D Render'
  },
  {
    id: 13,
    title: 'Redesign Plan',
    category: '3d-renders',
    description: 'Complete makeover visualization',
    location: 'Vadodara',
    size: '1,800 sq ft',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
    type: '3D Render'
  }
];

export const servicesData = [
  {
    id: 1,
    icon: '🏠',
    title: 'Residential Interiors',
    description: 'Complete interior design solutions for homes, apartments, and villas tailored to your lifestyle and preferences.'
  },
  {
    id: 2,
    icon: '🏢',
    title: 'Commercial Spaces',
    description: 'Professional interior design for offices, retail stores, restaurants, and commercial establishments.'
  },
  {
    id: 3,
    icon: '📐',
    title: '3D Visualization & Planning',
    description: 'Detailed 3D renders and walkthroughs so you can see your space before construction begins. Remote consultations available.'
  },
  {
    id: 4,
    icon: '🔨',
    title: 'Complete Execution & Build',
    description: 'End-to-end project management from design to final handover with quality craftsmanship.'
  },
  {
    id: 5,
    icon: '🛋️',
    title: 'Custom Furniture & Décor',
    description: 'Bespoke furniture design and curation of décor elements to perfectly complement your space.'
  },
  {
    id: 6,
    icon: '🔄',
    title: 'Renovation & Remodeling',
    description: 'Transform existing spaces with expert renovation solutions that breathe new life into your property.'
  }
];