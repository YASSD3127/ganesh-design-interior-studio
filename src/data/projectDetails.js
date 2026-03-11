// src/data/projectDetails.js
// Detailed project data with multiple images for each project
import { getCloudinaryUrl } from '../utils/cloudinary';

// ========================================
// CLOUDINARY IMAGE PATHS
// ========================================
const DETAIL_IMAGES = {
  // Project 1: Abdul Bhai Apartment (Your first upload!)
  abdulbhai: {
    img1: 'living-room_lc0wkm.jpg',
    img2: 'living-room-2_uizsfq.jpg',
    img3: 'bedroom-hero_ftolsu.jpg',
    img4: 'bedroom-hero-1_j5gosp.jpg',
    img5: 'bedroom-2_waeqcy.jpg',
    img6: 'bedroom2-1_cytyru.jpg',
    img7: 'bedroom-3_lnhyzl.jpg',
    img8: 'bedroom-3-side_ecuwf6.jpg',
    img9: 'Bedroom-child_nckx4o.jpg',
    img10: 'gazzebo_gbv1uy.jpg',
    img11: 'kitchen1_rbeae0.jpg',
    img12: 'kitchen2_vhi4tk.jpg',
    img13: 'tv-unit_suywpo.jpg',
    img14: 'Main_door_if4cff.jpg',
    img15: 'Outdoor_k51ugt.jpg',
  },
  
  // Project 2: Luxury Villa Surat
  neo_wooden_abode: {
    img1: 'LR-hero_asqu6p.jpg',
    img2: 'LR-hero-2_knlpnz.jpg',
    img3: 'LR-decor_tv01r6.jpg',
    img4: 'LR-decor2_xvgonl.jpg',
    img5: 'LR-swing_fdrsyr.jpg',
    img6: 'LR_m6zwfh.jpg',
    img7: 'LR-2_chbugf.jpg',
    img8: 'Kitchen-hero_upvs17.jpg',
    img9: 'Kitchen1_x4n2ic.jpg',
    img10: 'Kitchen2_seqqpi.jpg',
    img11: 'Kitchen3_c11m6c.jpg',
    img12: 'DR_i3lufc.jpg',
    img13: 'BD1_rgo7zy.jpg',
    img14: 'BD1-1_mxikae.jpg',
    img15: 'BD1-work_fpkugs.jpg',
    img16: 'BD1-Door_ihwfdf.jpg',
    img17: 'BD2-Hero_n9rroz.jpg',
    img18: 'BD2_oj3uzq.jpg',
    img19: 'BD2-1_tzbzsh.jpg',
    img20: 'BD2-2_tgfiex.jpg',
    img21: 'BD2-Decor_lamont.jpg',
    img22: 'BD2-work_qdmzpe.jpg',
    img23: 'BD3-hero_maqohl.jpg',
    img24: 'BD3_atkpxp.jpg',
    img25: 'BD3-decor_tuszvz.jpg',
    img26: 'BD4-hero_wz39jg.jpg',
    img27: 'BD4-work_b2qkuz.jpg',
    img28: 'BD4-decor_ge8xql.jpg',
    img29: 'Staricase_cky31c.jpg',
  },
  
    drashtant_home: {
    img1: 'BD1-hero_jjgqbs.jpg',
    img2: 'BD1-1_hh5jpb.jpg',
    img3: 'BD1-2_qoe2ys.jpg',
    img4: 'BD1-3_idzlrl.jpg',
    img5: 'BD1-4_mv8cu0.jpg',
    img6: 'BD1-5_x2uqvh.jpg',
    img7: 'BD1-6_qqt54w.jpg',
    img8: 'BD1-7_k9ijwq.jpg',
    img9: 'Templ1_dmp6jh.jpg',
    img10: 'Temple2_pgvfjx.jpg',
    img11: 'Temple3_fh7uvp.jpg',
    img12: 'Temple4_aa7opj.jpg',
    img13: 'BD2-hero_i2701m.jpg',
    img14: 'BD2-hero-light_e90xdq.jpg',
    img15: 'BD2-1_yxt85z.jpg',
    img16: 'BD2-light-1_dincne.jpg',
    img17: 'BD2-2_vx1avh.jpg',
    img18: 'BD2-3_c8e6mi.jpg',
    img19: 'BD2-desk_clj7e1.jpg',
    img20: 'BD2-desk1_n4xs0g.jpg',
    img21: 'BD2-desk-light_jwsptk.jpg',
    img22: 'Bath2_untadp.jpg',
    img23: 'Bathroom1_bmhbzv.jpg',
    img24: 'Bathroom2_ah5mi5.jpg'
  }
  // Add more projects as you upload...
};
// ========================================
// PROJECT DETAILS DATA
// ========================================
export const projectDetailsData = {
  // ===== PROJECT 1 =====
  1: {
    id: 1,
    title: 'Modern 3BHK Apartment',
    category: 'residential',
    location: 'Ahmedabad, Gujarat',
    year: '2024',
    description: 'A stunning contemporary apartment featuring clean lines, smart storage solutions, and a neutral color palette. The design emphasizes natural light and creates a spacious, airy atmosphere perfect for modern living.',
    client: 'Private Residence',
    size: '1,800 sq ft',
    duration: '3 months',
    budgetRange: 'Mid-Range',
    style: 'Contemporary Modern',
    
    // Images array - Using Cloudinary
    images: [
      { 
        id: 1, 
        url: getCloudinaryUrl(DETAIL_IMAGES.abdulbhai.img1, { width: 1600 }), 
        caption: 'Living Room' 
      },
      { 
        id: 2, 
        url: getCloudinaryUrl(DETAIL_IMAGES.abdulbhai.img2, { width: 1600 }), 
        caption: 'Living Room' 
      },
      { 
        id: 3, 
        url: getCloudinaryUrl(DETAIL_IMAGES.abdulbhai.img3, { width: 1600 }), 
        caption: 'Bedroom 1' 
      },
      { 
        id: 4, 
        url: getCloudinaryUrl(DETAIL_IMAGES.abdulbhai.img4, { width: 1600 }), 
        caption: 'Bedroom 1' 
      },
      { 
        id: 5, 
        url: getCloudinaryUrl(DETAIL_IMAGES.abdulbhai.img5, { width: 1600 }), 
        caption: '2nd Bedroom Design' 
      },
      { 
        id: 6, 
        url: getCloudinaryUrl(DETAIL_IMAGES.abdulbhai.img6, { width: 1600 }), 
        caption: '2nd Bedroom Design' 
      },
      { 
        id: 7, 
        url: getCloudinaryUrl(DETAIL_IMAGES.abdulbhai.img7, { width: 1600 }), 
        caption: '3rd Bedroom Design' 
      },
      { 
        id: 8, 
        url: getCloudinaryUrl(DETAIL_IMAGES.abdulbhai.img8, { width: 1600 }), 
        caption: '3rd Bedroom Design' 
      },
      { 
        id: 9, 
        url: getCloudinaryUrl(DETAIL_IMAGES.abdulbhai.img9, { width: 1600 }), 
        caption: 'Children Bedroom' 
      },
      { 
        id: 10, 
        url: getCloudinaryUrl(DETAIL_IMAGES.abdulbhai.img10, { width: 1600 }), 
        caption: 'Terrace Gazzebo' 
      },
      { 
        id: 11, 
        url: getCloudinaryUrl(DETAIL_IMAGES.abdulbhai.img11, { width: 1600 }), 
        caption: 'Open kitchen and dining area' 
      },
      { 
        id: 12, 
        url: getCloudinaryUrl(DETAIL_IMAGES.abdulbhai.img12, { width: 1600 }), 
        caption: 'Open kitchen and dining area' 
      },
      { 
        id: 13, 
        url: getCloudinaryUrl(DETAIL_IMAGES.abdulbhai.img13, { width: 1600 }), 
        caption: 'TV Unit Decor' 
      },
      { 
        id: 14, 
        url: getCloudinaryUrl(DETAIL_IMAGES.abdulbhai.img14, { width: 1600 }), 
        caption: 'Main Door' 
      },
      { 
        id: 15, 
        url: getCloudinaryUrl(DETAIL_IMAGES.abdulbhai.img15, { width: 1600 }), 
        caption: 'Out Door Sign' 
      }
    ],
    
    // YouTube video - Replace YOUR_VIDEO_ID with actual ID
    videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
    
    features: [
      'Smart home automation system',
      'Energy-efficient LED lighting',
      'Custom modular kitchen',
      'Italian marble flooring',
      'Designer false ceiling',
      'Built-in wardrobes'
    ]
  },
  
  // ===== PROJECT 2 =====
  2: {
    id: 2,
    title: 'Neo Wooden Abode',
    category: 'residential',
    location: 'Junagadh, Gujarat',
    year: '2024',
    description: 'An opulent villa interior showcasing premium finishes, elegant design elements, and bespoke furniture. Every detail has been carefully curated to create a luxurious yet comfortable living environment.',
    client: 'Private Residence',
    size: '4,500 sq ft',
    duration: '6 months',
    budgetRange: 'Premium - 30L ₹',
    style: 'Luxury Contemporary',
    
    images: [
  
       { id: 1, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img1, { width: 1600 }), caption: '' },
       { id: 2, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img2, { width: 1600 }), caption: '' },
       { id: 3, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img3, { width: 1600 }), caption: '' },
       { id: 4, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img4, { width: 1600 }), caption: '' },
       { id: 5, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img5, { width: 1600 }), caption: '' },
       { id: 6, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img6, { width: 1600 }), caption: '' },
       { id: 7, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img7, { width: 1600 }), caption: '' },
       { id: 8, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img8, { width: 1600 }), caption: '' },
       { id: 9, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img9, { width: 1600 }), caption: '' },
       { id: 10, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img10, { width: 1600 }), caption: '' },
       { id: 11, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img11, { width: 1600 }), caption: '' },
       { id: 12, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img12, { width: 1600 }), caption: '' },
       { id: 13, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img13, { width: 1600 }), caption: '' },
       { id: 14, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img14, { width: 1600 }), caption: '' },
       { id: 15, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img15, { width: 1600 }), caption: '' },
       { id: 16, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img16, { width: 1600 }), caption: '' },
       { id: 17, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img17, { width: 1600 }), caption: '' },
       { id: 18, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img18, { width: 1600 }), caption: '' },
       { id: 19, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img19, { width: 1600 }), caption: '' },
       { id: 20, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img20, { width: 1600 }), caption: '' },
       { id: 21, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img21, { width: 1600 }), caption: '' },
       { id: 22, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img22, { width: 1600 }), caption: '' },
       { id: 23, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img23, { width: 1600 }), caption: '' },
       { id: 24, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img24, { width: 1600 }), caption: '' },
       { id: 25, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img25, { width: 1600 }), caption: '' },
       { id: 26, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img26, { width: 1600 }), caption: '' },
       { id: 27, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img27, { width: 1600 }), caption: '' },
       { id: 28, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img28, { width: 1600 }), caption: '' },
       { id: 29, url: getCloudinaryUrl(DETAIL_IMAGES.neo_wooden_abode.img29, { width: 1600 }), caption: '' },

    ],
    
    videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
    
    features: [
      'Imported Italian fixtures',
      'Custom-made furniture',
      'Designer chandeliers',
      'Home theater system',
      'Wine cellar',
      'Infinity pool design'
    ]
  },
  
  // ===== PROJECT 3 =====
  3: {
    id: 3,
    title: 'Drashtants Home',
    category: 'residential',
    location: 'Vadodara, Gujarat',
    year: '2024',
    description: 'A minimalist design approach with functional spaces that maximize every square foot. Clean lines, neutral tones, and clever storage solutions create a modern yet cozy atmosphere.',
    client: 'Young Professional',
    size: '1,200 sq ft',
    duration: '2 months',
    budgetRange: 'Budget-Friendly',
    style: 'Minimalist Modern',
    images: [
       { id: 1, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img1, { width: 1600 }), caption: '' },
       { id: 2, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img2, { width: 1600 }), caption: '' },
       { id: 3, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img3, { width: 1600 }), caption: '' },
       { id: 4, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img4, { width: 1600 }), caption: '' },
       { id: 5, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img5, { width: 1600 }), caption: '' },
       { id: 6, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img6, { width: 1600 }), caption: '' },
       { id: 7, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img7, { width: 1600 }), caption: '' },
       { id: 8, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img8, { width: 1600 }), caption: '' },
       { id: 9, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img9, { width: 1600 }), caption: '' },
       { id: 10, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img10, { width: 1600 }), caption: '' },
       { id: 11, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img11, { width: 1600 }), caption: '' },
       { id: 12, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img12, { width: 1600 }), caption: '' },
       { id: 13, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img13, { width: 1600 }), caption: '' },
       { id: 14, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img14, { width: 1600 }), caption: '' },
       { id: 15, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img15, { width: 1600 }), caption: '' },
       { id: 16, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img16, { width: 1600 }), caption: '' },
       { id: 17, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img17, { width: 1600 }), caption: '' },
       { id: 18, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img18, { width: 1600 }), caption: '' },
       { id: 19, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img19, { width: 1600 }), caption: '' },
       { id: 20, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img20, { width: 1600 }), caption: '' },
       { id: 21, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img21, { width: 1600 }), caption: '' },
       { id: 22, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img22, { width: 1600 }), caption: '' },
       { id: 23, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img23, { width: 1600 }), caption: '' },
       { id: 24, url: getCloudinaryUrl(DETAIL_IMAGES.drashtant_home.img24, { width: 1600 }), caption: '' },

    ],
    features: [
      'Space optimization',
      'Multi-functional furniture',
      'Hidden storage solutions',
      'Affordable materials',
      'Minimalist décor',
      'Energy-efficient appliances'
    ]
  },
  
  // ===== PROJECT 4 =====
  4: {
    id: 4,
    title: 'Traditional Home Renovation',
    category: 'residential',
    location: 'Rajkot, Gujarat',
    year: '2023',
    description: 'A beautiful blend of traditional architecture with modern amenities. This renovation project preserved the home\'s classic charm while updating it with contemporary comforts.',
    client: 'Family Home',
    size: '3,000 sq ft',
    duration: '4 months',
    budgetRange: 'Mid-Range',
    style: 'Traditional Contemporary',
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200', caption: 'Traditional living room' },
      { id: 2, url: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200', caption: 'Updated kitchen' },
      { id: 3, url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200', caption: 'Classic bedroom' },
      { id: 4, url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200', caption: 'Renovated bathroom' }
    ],
    features: [
      'Heritage preservation',
      'Modern plumbing & electrical',
      'Traditional woodwork',
      'Updated fixtures',
      'Energy-efficient windows',
      'Classic furniture restoration'
    ]
  },
  
  // ===== PROJECT 5 =====
  5: {
    id: 5,
    title: 'Corporate Office',
    category: 'commercial',
    location: 'Ahmedabad, Gujarat',
    year: '2023',
    description: 'A professional workspace designed to enhance productivity and collaboration. Features include open work areas, private meeting rooms, and a modern aesthetic that reflects the company\'s brand.',
    client: 'Tech Company',
    size: '5,000 sq ft',
    duration: '4 months',
    budgetRange: 'Premium',
    style: 'Corporate Modern',
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200', caption: 'Open office space' },
      { id: 2, url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200', caption: 'Conference room' },
      { id: 3, url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200', caption: 'Reception area' },
      { id: 4, url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200', caption: 'Break room' }
    ],
    features: [
      'Ergonomic workstations',
      'Collaborative spaces',
      'Video conferencing setup',
      'Acoustic treatment',
      'Branded elements',
      'Breakout areas'
    ]
  },
  
  // ===== PROJECT 6 =====
  6: {
    id: 6,
    title: 'Boutique Retail Store',
    category: 'commercial',
    location: 'Surat, Gujarat',
    year: '2024',
    description: 'An eye-catching retail space designed to create a memorable shopping experience. Strategic lighting, display zones, and an inviting layout encourage customers to explore.',
    client: 'Fashion Boutique',
    size: '800 sq ft',
    duration: '1.5 months',
    budgetRange: 'Mid-Range',
    style: 'Modern Retail',
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200', caption: 'Store entrance' },
      { id: 2, url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200', caption: 'Display area' },
      { id: 3, url: 'https://images.unsplash.com/photo-1445991842772-097fea258e7b?w=1200', caption: 'Fitting rooms' },
      { id: 4, url: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200', caption: 'Checkout counter' }
    ],
    features: [
      'Strategic lighting design',
      'Flexible display systems',
      'Attractive storefront',
      'Fitting room areas',
      'Point-of-sale setup',
      'Inventory storage'
    ]
  },
  
  // ===== PROJECT 7 =====
  7: {
    id: 7,
    title: 'Restaurant Interior',
    category: 'commercial',
    location: 'Gandhinagar, Gujarat',
    year: '2023',
    description: 'A welcoming dining space that creates the perfect ambiance for guests. Thoughtful layout, comfortable seating, and warm lighting combine to enhance the dining experience.',
    client: 'Fine Dining Restaurant',
    size: '2,500 sq ft',
    duration: '3 months',
    budgetRange: 'Premium',
    style: 'Contemporary Dining',
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200', caption: 'Main dining area' },
      { id: 2, url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200', caption: 'Bar section' },
      { id: 3, url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200', caption: 'Private dining' },
      { id: 4, url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200', caption: 'Kitchen view' }
    ],
    features: [
      'Ambient lighting',
      'Comfortable seating',
      'Acoustic design',
      'Themed décor',
      'Efficient kitchen layout',
      'Bar counter design'
    ]
  },
  
  // ===== PROJECT 8 =====
  8: {
    id: 8,
    title: 'Medical Clinic',
    category: 'commercial',
    location: 'Vadodara, Gujarat',
    year: '2024',
    description: 'A clean, welcoming healthcare space designed with patient comfort in mind. Calming colors, proper lighting, and efficient layouts create a professional yet reassuring environment.',
    client: 'Healthcare Provider',
    size: '1,500 sq ft',
    duration: '2 months',
    budgetRange: 'Mid-Range',
    style: 'Medical Modern',
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200', caption: 'Waiting area' },
      { id: 2, url: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=1200', caption: 'Consultation room' },
      { id: 3, url: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200', caption: 'Reception desk' },
      { id: 4, url: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200', caption: 'Treatment room' }
    ],
    features: [
      'Hygienic materials',
      'Easy-to-clean surfaces',
      'Proper ventilation',
      'Patient privacy',
      'Efficient workflow',
      'Calming color scheme'
    ]
  },
  
  // ===== PROJECT 9 =====
  9: {
    id: 9,
    title: 'Upcoming Villa Project',
    category: '3d-renders',
    location: 'Ahmedabad, Gujarat',
    year: '2024 (In Progress)',
    description: '3D visualization of a luxury villa before construction. This detailed render allows clients to see and approve every aspect of the design before a single brick is laid.',
    client: 'Private Villa',
    size: '3,800 sq ft',
    duration: 'Design Phase',
    budgetRange: 'Premium',
    style: 'Modern Luxury',
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200', caption: '3D exterior render' },
      { id: 2, url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200', caption: '3D living room concept' },
      { id: 3, url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200', caption: '3D bedroom visualization' },
      { id: 4, url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200', caption: '3D kitchen design' }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
    features: [
      'Photorealistic 3D renders',
      'Multiple design options',
      'Virtual walkthrough',
      'Material visualization',
      'Lighting simulation',
      'Before construction approval'
    ]
  },
  
  // ===== PROJECT 10 =====
  10: {
    id: 10,
    title: 'Office Space Concept',
    category: '3d-renders',
    location: 'Surat, Gujarat',
    year: '2024 (In Progress)',
    description: '3D design concept for a modern office workspace. Interactive renders help clients visualize the space and make informed decisions about layout and finishes.',
    client: 'Corporate Client',
    size: '4,200 sq ft',
    duration: 'Design Phase',
    budgetRange: 'Premium',
    style: 'Corporate Contemporary',
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200', caption: '3D office layout' },
      { id: 2, url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200', caption: '3D workstation design' },
      { id: 3, url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200', caption: '3D meeting room' },
      { id: 4, url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200', caption: '3D reception area' }
    ],
    features: [
      '3D space planning',
      'Furniture visualization',
      'Color scheme options',
      'Lighting design',
      'Remote presentation',
      'Client revisions'
    ]
  },
  
  // ===== PROJECT 11 =====
  11: {
    id: 11,
    title: 'Apartment Redesign Plan',
    category: '3d-renders',
    location: 'Vadodara, Gujarat',
    year: '2024 (In Progress)',
    description: 'Complete apartment makeover visualized in 3D. Shows the transformation from existing layout to proposed design with detailed renders of each room.',
    client: 'Renovation Project',
    size: '1,800 sq ft',
    duration: 'Design Phase',
    budgetRange: 'Mid-Range',
    style: 'Modern Makeover',
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200', caption: '3D before state' },
      { id: 2, url: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200', caption: '3D after concept' },
      { id: 3, url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200', caption: '3D room redesign' },
      { id: 4, url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200', caption: '3D final visualization' }
    ],
    features: [
      'Before & after renders',
      '3D floor plan',
      'Budget estimation',
      'Timeline planning',
      'Material selection',
      'Virtual approval'
    ]
  }
};
