// src/data/projects.js
// Updated project data with Cloudinary integration
import { getCloudinaryUrl, getThumbnailUrl } from '../utils/cloudinary';

// ========================================
// CLOUDINARY IMAGE PATHS
// ========================================
// Format: 'folder/subfolder/filename.jpg'
// Match exactly what you uploaded to Cloudinary

const PROJECT_IMAGES = {
  // Project 1: Abdul Bhai Apartment (Already uploaded!)
  abdulbhai: {
    hero: 'bedroom-hero_ftolsu',
    livingroom: 'living-room_lc0wkm',
    bedroom: 'bedroom-2_waeqcy',
    bedroom2:'bedroom-3_lnhyzl',
    kitchen: 'kitchen1_rbeae0',
    gazzebo:'gazzebo_gbv1uy'
  },
  
  // Project 2: Luxury Villa - Surat
  // WHEN YOU UPLOAD: Create folder 'Projects/residentials/LuxuryVilla-Surat/'
  luxuryVillaSurat: {
    hero: 'Projects/residentials/LuxuryVilla-Surat/hero.jpg',
    living: 'Projects/residentials/LuxuryVilla-Surat/living-room.jpg',
    dining: 'Projects/residentials/LuxuryVilla-Surat/dining-area.jpg',
    master: 'Projects/residentials/LuxuryVilla-Surat/master-suite.jpg',
    theater: 'Projects/residentials/LuxuryVilla-Surat/home-theater.jpg',
  },
  
  // Project 3: Contemporary 2BHK - Vadodara
  contemporary2bhkVadodara: {
    hero: 'Projects/residentials/Contemporary2BHK-Vadodara/hero.jpg',
    living: 'Projects/residentials/Contemporary2BHK-Vadodara/living-room.jpg',
    kitchen: 'Projects/residentials/Contemporary2BHK-Vadodara/kitchen.jpg',
    bedroom: 'Projects/residentials/Contemporary2BHK-Vadodara/bedroom.jpg',
  },
  
  // Project 4: Traditional Home - Rajkot
  traditionalHomeRajkot: {
    hero: 'Projects/residentials/TraditionalHome-Rajkot/hero.jpg',
    living: 'Projects/residentials/TraditionalHome-Rajkot/living-room.jpg',
    kitchen: 'Projects/residentials/TraditionalHome-Rajkot/kitchen.jpg',
    bedroom: 'Projects/residentials/TraditionalHome-Rajkot/bedroom.jpg',
  },
  
  // Project 5: Corporate Office - Ahmedabad
  corporateOfficeAhmedabad: {
    hero: 'Projects/commercial/CorporateOffice-Ahmedabad/hero.jpg',
    workspace: 'Projects/commercial/CorporateOffice-Ahmedabad/open-workspace.jpg',
    conference: 'Projects/commercial/CorporateOffice-Ahmedabad/conference-room.jpg',
    reception: 'Projects/commercial/CorporateOffice-Ahmedabad/reception.jpg',
  },
  
  // Project 6: Boutique Store - Surat
  boutiqueStoreSurat: {
    hero: 'Projects/commercial/BoutiqueStore-Surat/hero.jpg',
    entrance: 'Projects/commercial/BoutiqueStore-Surat/store-entrance.jpg',
    display: 'Projects/commercial/BoutiqueStore-Surat/display-area.jpg',
    fitting: 'Projects/commercial/BoutiqueStore-Surat/fitting-rooms.jpg',
  },
  
  // Project 7: Restaurant - Gandhinagar
  restaurantGandhinagar: {
    hero: 'Projects/commercial/Restaurant-Gandhinagar/hero.jpg',
    dining: 'Projects/commercial/Restaurant-Gandhinagar/main-dining.jpg',
    bar: 'Projects/commercial/Restaurant-Gandhinagar/bar-section.jpg',
    private: 'Projects/commercial/Restaurant-Gandhinagar/private-dining.jpg',
  },
  
  // Project 8: Medical Clinic - Vadodara
  medicalClinicVadodara: {
    hero: 'Projects/commercial/MedicalClinic-Vadodara/hero.jpg',
    waiting: 'Projects/commercial/MedicalClinic-Vadodara/waiting-area.jpg',
    consultation: 'Projects/commercial/MedicalClinic-Vadodara/consultation-room.jpg',
    reception: 'Projects/commercial/MedicalClinic-Vadodara/reception-desk.jpg',
  },
  
  // Project 9: 3D Render - Villa Ahmedabad
  render3dVillaAhmedabad: {
    hero: 'Projects/3d-renders/Villa-Ahmedabad/hero.jpg',
    exterior: 'Projects/3d-renders/Villa-Ahmedabad/exterior-render.jpg',
    living: 'Projects/3d-renders/Villa-Ahmedabad/living-room-render.jpg',
    bedroom: 'Projects/3d-renders/Villa-Ahmedabad/bedroom-render.jpg',
  },
  
  // Project 10: 3D Render - Office Surat
  render3dOfficeSurat: {
    hero: 'Projects/3d-renders/Office-Surat/hero.jpg',
    layout: 'Projects/3d-renders/Office-Surat/office-layout.jpg',
    workstation: 'Projects/3d-renders/Office-Surat/workstation-design.jpg',
    meeting: 'Projects/3d-renders/Office-Surat/meeting-room.jpg',
  },
  
  // Project 11: 3D Render - Apartment Vadodara
  render3dApartmentVadodara: {
    hero: 'Projects/3d-renders/Apartment-Vadodara/hero.jpg',
    before: 'Projects/3d-renders/Apartment-Vadodara/before-render.jpg',
    after: 'Projects/3d-renders/Apartment-Vadodara/after-concept.jpg',
    room: 'Projects/3d-renders/Apartment-Vadodara/room-redesign.jpg',
  }
};

// ========================================
// PROJECTS DATA ARRAY
// ========================================
export const projectsData = [
  // ===== PROJECT 1 =====
  {
    id: 1,
    title: 'Modern 3BHK Apartment',
    category: 'residential',
    location: 'Ahmedabad',
    size: '1,800 sq ft',
    year: '2024',
    type: 'Residential',
    
    // Card thumbnail (400x300) - Already works with your Cloudinary upload!
    image: getThumbnailUrl(PROJECT_IMAGES.abdulbhai.hero, 400, 300),
    
    description: 'Contemporary interior design with minimalist aesthetics and functional spaces. Features open-concept living, Italian marble flooring, and smart home integration.',
    
    // Gallery images - Add more as you upload them
    images: [
       {
        url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.livingroom, { width: 1600 }),
        caption: 'Living Room - Contemporary Design'
       },
       {
         url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.bedroom, { width: 1600 }),
         caption: 'Master Bedroom'
       },
       {
         url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.bedroom2, { width: 1600 }),
         caption: 'Modern Kitchen'
       },
       {
         url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.kitchen, { width: 1600 }),
         caption: 'Modern Kitchen'
       },
       {
         url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.gazzebo, { width: 1600 }),
         caption: 'Terrace Gazzebo'
       }
    ],
    
    // YouTube video - Replace with your actual video ID
    // videoUrl: 'https://www.youtube.com/watch?v=YOUR_ACTUAL_VIDEO_ID',
    
    features: [
      'Open concept living and dining',
      'Italian marble flooring',
      'Modular kitchen with premium appliances',
      'Smart home automation',
      'Custom-designed furniture',
      'Ambient lighting throughout'
    ],
    
    materials: ['Italian Marble', 'Teak Wood', 'Leather Upholstery']
  },
  
  // ===== PROJECT 2 =====
  {
    id: 2,
    title: 'Luxury Villa Interior',
    category: 'residential',
    location: 'Surat',
    size: '4,500 sq ft',
    year: '2023',
    type: 'Residential',
    
    // PLACEHOLDER: Replace with Cloudinary URL after upload
    // image: getThumbnailUrl(PROJECT_IMAGES.luxuryVillaSurat.hero, 400, 300),
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    
    description: 'Premium finishes with elegant design elements. Opulent villa showcasing luxury materials and bespoke furniture throughout.',
    
    features: [
      'Imported Italian fixtures',
      'Custom-made furniture',
      'Designer chandeliers',
      'Home theater system',
      'Wine cellar',
      'Infinity pool design'
    ],
    
    materials: ['Granite', 'Oak Wood', 'Brass Fixtures']
  },
  
  // ===== PROJECT 3 =====
  {
    id: 3,
    title: 'Contemporary 2BHK',
    category: 'residential',
    location: 'Vadodara',
    size: '1,200 sq ft',
    year: '2024',
    type: 'Residential',
    
    // PLACEHOLDER: Replace with Cloudinary URL after upload
    // image: getThumbnailUrl(PROJECT_IMAGES.contemporary2bhkVadodara.hero, 400, 300),
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    
    description: 'Minimalist design with functional spaces. Clean lines and clever storage solutions maximize every square foot.',
    
    features: [
      'Space optimization',
      'Multi-functional furniture',
      'Hidden storage solutions',
      'Affordable materials',
      'Minimalist décor',
      'Energy-efficient appliances'
    ],
    
    materials: ['Laminate Flooring', 'Modular Furniture', 'LED Lighting']
  },
  
  // ===== PROJECT 4 =====
  {
    id: 4,
    title: 'Traditional Home Renovation',
    category: 'residential',
    location: 'Rajkot',
    size: '3,000 sq ft',
    year: '2023',
    type: 'Residential',
    
    // PLACEHOLDER: Replace with Cloudinary URL after upload
    // image: getThumbnailUrl(PROJECT_IMAGES.traditionalHomeRajkot.hero, 400, 300),
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
    
    description: 'Classic design meets modern comfort. Blend of traditional architecture with contemporary amenities.',
    
    features: [
      'Heritage preservation',
      'Modern plumbing & electrical',
      'Traditional woodwork',
      'Updated fixtures',
      'Energy-efficient windows',
      'Classic furniture restoration'
    ],
    
    materials: ['Teakwood', 'Stone Flooring', 'Traditional Brass']
  },
  
  // ===== PROJECT 5 =====
  {
    id: 5,
    title: 'Corporate Office',
    category: 'commercial',
    location: 'Ahmedabad',
    size: '5,000 sq ft',
    year: '2023',
    type: 'Commercial',
    
    // PLACEHOLDER: Replace with Cloudinary URL after upload
    // image: getThumbnailUrl(PROJECT_IMAGES.corporateOfficeAhmedabad.hero, 400, 300),
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    
    description: 'Professional workspace with collaborative zones. Modern aesthetic designed for productivity.',
    
    features: [
      'Ergonomic workstations',
      'Collaborative spaces',
      'Video conferencing setup',
      'Acoustic treatment',
      'Branded elements',
      'Breakout areas'
    ],
    
    materials: ['Glass Partitions', 'Laminate Flooring', 'Metal Fixtures']
  },
  
  // ===== PROJECT 6 =====
  {
    id: 6,
    title: 'Boutique Retail Store',
    category: 'commercial',
    location: 'Surat',
    size: '800 sq ft',
    year: '2024',
    type: 'Commercial',
    
    // PLACEHOLDER: Replace with Cloudinary URL after upload
    // image: getThumbnailUrl(PROJECT_IMAGES.boutiqueStoreSurat.hero, 400, 300),
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    
    description: 'Eye-catching retail space design. Strategic layout encourages exploration and creates memorable shopping experience.',
    
    features: [
      'Strategic lighting design',
      'Flexible display systems',
      'Attractive storefront',
      'Fitting room areas',
      'Point-of-sale setup',
      'Inventory storage'
    ],
    
    materials: ['LED Track Lighting', 'Display Systems', 'Vinyl Flooring']
  },
  
  // ===== PROJECT 7 =====
  {
    id: 7,
    title: 'Restaurant Interior',
    category: 'commercial',
    location: 'Gandhinagar',
    size: '2,500 sq ft',
    year: '2023',
    type: 'Commercial',
    
    // PLACEHOLDER: Replace with Cloudinary URL after upload
    // image: getThumbnailUrl(PROJECT_IMAGES.restaurantGandhinagar.hero, 400, 300),
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    
    description: 'Inviting ambiance for dining experience. Thoughtful layout and warm lighting enhance the atmosphere.',
    
    features: [
      'Ambient lighting',
      'Comfortable seating',
      'Acoustic design',
      'Themed décor',
      'Efficient kitchen layout',
      'Bar counter design'
    ],
    
    materials: ['Wood Paneling', 'Upholstered Seating', 'Decorative Lighting']
  },
  
  // ===== PROJECT 8 =====
  {
    id: 8,
    title: 'Medical Clinic',
    category: 'commercial',
    location: 'Vadodara',
    size: '1,500 sq ft',
    year: '2024',
    type: 'Commercial',
    
    // PLACEHOLDER: Replace with Cloudinary URL after upload
    // image: getThumbnailUrl(PROJECT_IMAGES.medicalClinicVadodara.hero, 400, 300),
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
    
    description: 'Clean and welcoming healthcare space. Design prioritizes patient comfort and efficient workflow.',
    
    features: [
      'Hygienic materials',
      'Easy-to-clean surfaces',
      'Proper ventilation',
      'Patient privacy',
      'Efficient workflow',
      'Calming color scheme'
    ],
    
    materials: ['Antibacterial Surfaces', 'Vinyl Flooring', 'LED Panels']
  },
  
  // ===== PROJECT 9 =====
  {
    id: 9,
    title: 'Upcoming Villa Project',
    category: '3d-renders',
    location: 'Ahmedabad',
    size: '3,800 sq ft',
    year: '2024',
    type: '3D Render',
    
    // PLACEHOLDER: Replace with Cloudinary URL after upload
    // image: getThumbnailUrl(PROJECT_IMAGES.render3dVillaAhmedabad.hero, 400, 300),
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
    
    description: '3D visualization before execution. Detailed renders allow clients to see design before construction.',
    
    features: [
      'Photorealistic 3D renders',
      'Multiple design options',
      'Virtual walkthrough',
      'Material visualization',
      'Lighting simulation',
      'Before construction approval'
    ],
    
    materials: ['3D Visualized Materials', 'Virtual Textures', 'Render Lighting']
  },
  
  // ===== PROJECT 10 =====
  {
    id: 10,
    title: 'Office Space Concept',
    category: '3d-renders',
    location: 'Surat',
    size: '4,200 sq ft',
    year: '2024',
    type: '3D Render',
    
    // PLACEHOLDER: Replace with Cloudinary URL after upload
    // image: getThumbnailUrl(PROJECT_IMAGES.render3dOfficeSurat.hero, 400, 300),
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    
    description: 'Modern workspace 3D design. Interactive renders help visualize space and layout decisions.',
    
    features: [
      '3D space planning',
      'Furniture visualization',
      'Color scheme options',
      'Lighting design',
      'Remote presentation',
      'Client revisions'
    ],
    
    materials: ['3D Furniture Models', 'Virtual Materials', 'Simulated Finishes']
  },
  
  // ===== PROJECT 11 =====
  {
    id: 11,
    title: 'Apartment Redesign Plan',
    category: '3d-renders',
    location: 'Vadodara',
    size: '1,800 sq ft',
    year: '2024',
    type: '3D Render',
    
    // PLACEHOLDER: Replace with Cloudinary URL after upload
    // image: getThumbnailUrl(PROJECT_IMAGES.render3dApartmentVadodara.hero, 400, 300),
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
    
    description: 'Complete makeover visualization. Shows transformation from existing layout to proposed design.',
    
    features: [
      'Before & after renders',
      '3D floor plan',
      'Budget estimation',
      'Timeline planning',
      'Material selection',
      'Virtual approval'
    ],
    
    materials: ['3D Rendered Materials', 'Virtual Finishes', 'Simulated Textures']
  },
  
  // ===== PROJECT 12 =====
  {
    id: 12,
    title: 'Apartment Plan',
    category: '3d-renders',
    location: 'Vadodara',
    size: '1,800 sq ft',
    year: '2024',
    type: '3D Render',
    
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
    
    description: 'Complete makeover visualization with detailed 3D planning and material selection.',
    
    features: [
      '3D floor planning',
      'Space optimization',
      'Virtual tours',
      'Material previews'
    ]
  },
  
  // ===== PROJECT 13 =====
  {
    id: 13,
    title: 'Redesign Plan',
    category: '3d-renders',
    location: 'Vadodara',
    size: '1,800 sq ft',
    year: '2024',
    type: '3D Render',
    
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
    
    description: 'Complete makeover visualization with modern design elements and smart space usage.',
    
    features: [
      'Modern aesthetics',
      'Smart storage',
      'Virtual previews',
      'Cost planning'
    ]
  }
];

// ========================================
// SERVICES DATA
// ========================================
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
