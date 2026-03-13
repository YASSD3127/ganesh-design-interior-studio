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
    ab_livingroom: 'living-room_lc0wkm',
    ab_livingroom2: 'living-room-2_uizsfq',
    ab_hero: 'bedroom-hero_ftolsu',
    ab_hero1: 'bedroom-hero-1_j5gosp',
    ab_bedroom2: 'bedroom-2_waeqcy',
    ab_bedroom2_1: 'bedroom2-1_cytyru',
    ab_bedroom3:'bedroom-3_lnhyzl',
    ab_bedroom3_1: 'bedroom-3-side_ecuwf6',
    ab_cbedroom: 'Bedroom-child_nckx4o',
    ab_gazzebo:'gazzebo_gbv1uy',
    ab_kitchen: 'kitchen1_rbeae0',
    ab_kitchen1: 'kitchen2_vhi4tk',
    ab_tv_unit: 'tv-unit_suywpo',
    ab_main_door: 'Main_door_if4cff',
    ab_out_sign: 'Outdoor_k51ugt',
  },
  
  // Project 2: Neo Wooden Abode - Green City, Junagadh
  neo_wooden_abode: {
    nw_LR_hero: 'LR-hero_asqu6p',
    nw_LR_hero2: 'LR-hero-2_knlpnz',
    nw_LR_decor1: 'LR-decor_tv01r6',
    nw_LR_decor2: 'LR-decor2_xvgonl',
    nw_LR_swing: 'LR-swing_fdrsyr',
    nw_LR_add: 'LR_m6zwfh',
    nw_LR_add2: 'LR-2_chbugf',
    nw_Kitchen_hero: 'Kitchen-hero_upvs17',
    nw_kitchen1: 'Kitchen1_x4n2ic',
    nw_kitchen2: 'Kitchen2_seqqpi',
    nw_kitchen3: 'Kitchen3_c11m6c',
    nw_DR: 'DR_i3lufc',
    nw_BD1: 'BD1_rgo7zy',
    nw_BD1_1: 'BD1-1_mxikae',
    nw_BD1_work: 'BD1-work_fpkugs',
    nw_BD1_door: 'BD1-Door_ihwfdf',
    nw_BD2: 'BD2-Hero_n9rroz',
    nw_BD2_1: 'BD2_oj3uzq',
    nw_BD2_2: 'BD2-1_tzbzsh',
    nw_BD2_3: 'BD2-2_tgfiex',
    nw_BD2_decor: 'BD2-Decor_lamont',
    nw_BD2_work: 'BD2-work_qdmzpe',
    nw_BD3: 'BD3-hero_maqohl',
    nw_BD3_1: 'BD3_atkpxp',
    nw_BD3_decor: 'BD3-decor_tuszvz',
    nw_BD4: 'BD4-hero_wz39jg',
    nw_BD4_work: 'BD4-work_b2qkuz',
    nw_BD4_decor: 'BD4-decor_ge8xql',
    nw_stairs: 'Staricase_cky31c'
  },
  
  // Project 3: Contemporary 2BHK - Vadodara
  drashtant_home: {
    dh_BD1_hero: 'BD1-hero_jjgqbs',
    dh_BD1_1: 'BD1-1_hh5jpb',
    dh_BD1_2: 'BD1-2_qoe2ys',
    dh_BD1_3: 'BD1-3_idzlrl',
    dh_BD1_4: 'BD1-4_mv8cu0',
    dh_BD1_5: 'BD1-5_x2uqvh',
    dh_BD1_6: 'BD1-6_qqt54w',
    dh_BD1_7: 'BD1-7_k9ijwq',
    dh_t1: 'Templ1_dmp6jh',
    dh_t2: 'Temple2_pgvfjx',
    dh_t3: 'Temple3_fh7uvp',
    dh_t4: 'Temple4_aa7opj',
    dh_BD2_hero: 'BD2-hero_i2701m',
    dh_BD2_hero_l: 'BD2-hero-light_e90xdq',
    dh_BD2_1: 'BD2-1_yxt85z',
    dh_BD2_l: 'BD2-light-1_dincne',
    dh_BD2_2: 'BD2-2_vx1avh',
    dh_BD2_3: 'BD2-3_c8e6mi',
    dh_desk1: 'BD2-desk_clj7e1',
    dh_desk2: 'BD2-desk1_n4xs0g',
    dh_desk3: 'BD2-desk-light_jwsptk',
    dh_bath: 'Bath2_untadp',
    dh_bath1: 'Bathroom1_bmhbzv',
    dh_bath2: 'Bathroom2_ah5mi5'
  },
  
  // Project 4: Traditional Home - Rajkot
  bharatbhai_home: {
  bb_LR_hero: 'LR_hero_pgbuox',
  bb_LR_hero1: 'LR_hero1_hyobha',
  bb_LR_swing_hero: 'LR_swing-hero_z33mvl',
  bb_LR_swing_hero1: 'LR_swing-hero1_oh4ei0',
  bb_LR_swing2: 'LR_swing2_daugbs',
  bb_LR_tv_set: 'LR-tv_set_qr2bdz',
  bb_LR_decor: 'LR_decor_xvyef7',
  bb_LR_decor1: 'LR_decor1_dhgh2g',
  bb_LR_decor1_dup: 'LR_decor1_dhgh2g',
  bb_Basin: 'Basin_f7ovb6',
  bb_BD1_hero: 'BD1-hero_rsb8cd',
  bb_BD1_1: 'BD1-1_ox6e0z',
  bb_BD1_2: 'BD1-2_in5hp7',
  bb_BD1_3: 'BD1-3_b5i9pw',
  bb_BD1_4: 'BD1-4_ojutzm',
  bb_BD1_5: 'BD1-5_nxjmik',
  bb_BD2_hero: 'BD2-hero_hof84f',
  bb_BD2_1: 'BD2-1_pnt8n8',
  bb_BD2_2: 'BD2-2_jdxs1k',
  bb_BD2_3: 'BD2-3_doqvzj',
  bb_BD2_4: 'BD2-4_vl4uht',
  bb_BD2_5: 'BD2-5_qowjpy',
  bb_BD3_hero: 'BD3-hero_mtvfin',
  bb_BD3_1: 'BD3-1_evo1wv',
  bb_BD3_2: 'BD3-2_lts96h',
  bb_BD3_3: 'BD3-3_wz8yoi',
  bb_BD3_4: 'BD3-4_zsudbk',
  bb_BD3_5: 'BD3-5_f7fkvg',
  bb_Kitchen_hero: 'Kitchen-hero_tkdo5o',
  bb_Kitchen_2: 'kitchen2_u5c8kz',
  bb_Kitchen_3: 'kitchen3_fbskwa',
  bb_Kitchen_4: 'kitchen4_kjixyi',
  bb_Dining_hero: 'dining_hero_u1kljs',
  bb_Dining_1: 'dining1_xblpq8',
  bb_Dining_2: 'dining2_uwbk1e',
  bb_Elevator: 'Elevator_pqbopz',
  bb_Temple_1: 'Temple1_m9othj',
  bb_Temple_2: 'Temple2_yhjah8',
  bb_Main_door: 'Main_door_lonfno',
  bb_Stairs: 'Stairs_c7vju9'
  },
  
  
 
  hiteshbhai_jnd: {
  hb_LR_hero: 'LR-hero_gcy5kn',
  hb_LR_tv_set: 'LR-tv_set_qvl9bo',
  hb_LR_1: 'LR-1_fxcr8v',
  hb_LR_2: 'LR-2_vszufb',

  hb_BD1_hero: 'BD1-hero_l0qj6z',
  hb_BD1_1: 'BD1-1_rbphmu',
  hb_BD1_2: 'BD1-2_lnlcfu',
  hb_BD1_3: 'BD1-3_jctdz7',

  hb_BD2_hero: 'BD2-hero_qxevkq',
  hb_BD2_1: 'BD2-1_gmaxlf',
  hb_BD2_2: 'BD2-2_sxe0o6',
  hb_BD2_3: 'BD2-3_q9hu55',

  hb_Kitchen_hero: 'Kitchen-hero_kbsy8l',
  hb_Kitchen_2: 'kitchen2_p6bbk6',

  hb_Dining: 'dining_ta0p9f',
  hb_Dining_1: 'dining1_umjngt',
  hb_Dining_decor: 'dining_decor_erilfj',

  hb_P2_6: 'P2-6_nr2ldu',
  hb_out_name: 'out_name_xcbnoa'

  },
  
  // Project 6: Boutique Store - Surat
  boutiqueStoreSurat: {

  },
  
  // Project 7: Restaurant - Gandhinagar
  restaurantGandhinagar: {

  },
  
  // Project 8: Medical Clinic - Vadodara
  medicalClinicVadodara: {

  },
  
  // Project 9: 3D Render - Villa Ahmedabad
  render3dVillaAhmedabad: {
 
  },
  
  // Project 10: 3D Render - Office Surat
  render3dOfficeSurat: {
 
  },
  
  // Project 11: 3D Render - Apartment Vadodara
  render3dApartmentVadodara: {
  
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
    image: getThumbnailUrl(PROJECT_IMAGES.abdulbhai.ab_hero, 400, 300),
    
    description: 'Contemporary interior design with minimalist aesthetics and functional spaces. Features open-concept living, Italian marble flooring, and smart home integration.',
    
    // Gallery images - Add more as you upload them
    images: [
       {url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.ab_livingroom, { width: 1600 }),caption: 'Living Room - Contemporary Design'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.ab_livingroom2, { width: 1600 }),caption: 'Living Room - Contemporary Design'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.ab_hero, { width: 1600 }),caption: 'Master Bedroom'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.ab_hero1, { width: 1600 }),caption: 'Master Bedroom'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.ab_bedroom2, { width: 1600 }),caption: '2nd Bedroom'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.ab_bedroom2_1, { width: 1600 }),caption: '2nd Bedroom'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.ab_bedroom3, { width: 1600 }),caption: '3rd Bedroom'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.ab_bedroom3_1, { width: 1600 }),caption: '3rd Bedroom'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.ab_cbedroom, { width: 1600 }),caption: 'Children Bedroom'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.ab_gazzebo, { width: 1600 }),caption: 'Terrace Gazzebo'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.ab_kitchen, { width: 1600 }),caption: 'Modern Kitchen'},
       { url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.ab_kitchen1, { width: 1600 }),caption: 'Modern Kitchen'},
       { url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.ab_tv_unit, { width: 1600 }), caption: 'TV Unit Decor' },
       { url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.ab_main_door, { width: 1600 }),caption: 'Enterance Door Design'},
       { url: getCloudinaryUrl(PROJECT_IMAGES.abdulbhai.ab_out_sign, { width: 1600 }),caption: 'Entrance Name Sign' }
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
    title: 'Neo Wooden Abode',
    category: 'residential',
    location: 'Junagadh',
    size: '4,500 sq ft',
    year: '2024',
    type: 'Residential',
    
    // PLACEHOLDER: Replace with Cloudinary URL after upload
    image: getThumbnailUrl(PROJECT_IMAGES.neo_wooden_abode.nw_LR_hero, 400, 300),
    images: [
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_LR_hero, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_LR_hero2, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_LR_decor1, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_LR_decor2, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_LR_swing, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_LR_add, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_LR_add2, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_Kitchen_hero, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_kitchen1, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_kitchen2, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_kitchen3, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_DR, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_BD1, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_BD1_1, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_BD1_work, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_BD1_door, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_BD1, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_BD2, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_BD2_1, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_BD2_2, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_BD2_3, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_BD2_decor, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_BD2_work, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_BD3, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_BD3_1, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_BD3_decor, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_BD4, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_BD4_work, { width: 1600 }), caption: 'Entrance Name Sign'},
       {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_BD4_decor, { width: 1600 }), caption: 'Entrance Name Sign'},
        {url: getCloudinaryUrl(PROJECT_IMAGES.neo_wooden_abode.nw_stairs, { width: 1600 }), caption: 'Entrance Name Sign'},
    ],
    
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
    image: getThumbnailUrl(PROJECT_IMAGES.drashtant_home.dh_BD2_hero_l, 400, 300),
    images: [
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_BD1_hero, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_BD1_1, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_BD1_2, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_BD1_3, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_BD1_4, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_BD1_5, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_BD1_6, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_BD1_7, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_t1, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_t2, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_t3, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_t4, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_BD2_hero, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_BD2_hero_l, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_BD2_1, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_BD2_l, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_BD2_2, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_BD2_3, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_desk1, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_desk2, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_desk3, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_bath, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_bath1, { width: 1600 }), caption: ''},
        {url: getCloudinaryUrl(PROJECT_IMAGES.drashtant_home.dh_bath2, { width: 1600 }), caption: ''},

    ],
    
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
    
    
    image: getThumbnailUrl(PROJECT_IMAGES.bharatbhai_home.bb_LR_hero, 400, 300),
    images: [
      {url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_LR_hero, { width: 1600 }), caption: ''},
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_LR_hero1, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_LR_swing_hero, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_LR_swing_hero1, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_LR_swing2, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_LR_tv_set, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_LR_decor, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_LR_decor1, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_LR_decor1_dup, { width: 1600 }), caption: '' },

      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_Basin, { width: 1600 }), caption: '' },

      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_BD1_hero, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_BD1_1, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_BD1_2, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_BD1_3, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_BD1_4, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_BD1_5, { width: 1600 }), caption: '' },

      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_BD2_hero, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_BD2_1, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_BD2_2, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_BD2_3, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_BD2_4, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_BD2_5, { width: 1600 }), caption: '' },

      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_BD3_hero, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_BD3_1, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_BD3_2, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_BD3_3, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_BD3_4, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_BD3_5, { width: 1600 }), caption: '' },

      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_Kitchen_hero, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_Kitchen_2, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_Kitchen_3, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_Kitchen_4, { width: 1600 }), caption: '' },

      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_Dining_hero, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_Dining_1, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_Dining_2, { width: 1600 }), caption: '' },

      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_Elevator, { width: 1600 }), caption: '' },

      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_Temple_1, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_Temple_2, { width: 1600 }), caption: '' },

      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_Main_door, { width: 1600 }), caption: '' },
      { url: getCloudinaryUrl(PROJECT_IMAGES.bharatbhai_home.bb_Stairs, { width: 1600 }), caption: '' }
    ],

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
    title: 'Exquesite 2BHK Flat',
    category: 'residential',
    location: 'Junagadh',
    size: '2,000 sq ft',
    year: '2023',
    type: 'Residential',
    
    image: getThumbnailUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_LR_hero, 400, 300),

    images: [
      {url: getCloudinaryUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_LR_hero, { width: 1600 }), caption: '' },
      {url: getCloudinaryUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_LR_tv_set, { width: 1600 }), caption: '' },
      {url: getCloudinaryUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_LR_1, { width: 1600 }), caption: '' },
      {url: getCloudinaryUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_LR_2, { width: 1600 }), caption: '' },

      {url: getCloudinaryUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_BD1_hero, { width: 1600 }), caption: '' },
      {url: getCloudinaryUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_BD1_1, { width: 1600 }), caption: '' },
      {url: getCloudinaryUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_BD1_2, { width: 1600 }), caption: '' },
      {url: getCloudinaryUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_BD1_3, { width: 1600 }), caption: '' },

      {url: getCloudinaryUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_BD2_hero, { width: 1600 }), caption: '' },
      {url: getCloudinaryUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_BD2_1, { width: 1600 }), caption: '' },
      {url: getCloudinaryUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_BD2_2, { width: 1600 }), caption: '' },
      {url: getCloudinaryUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_BD2_3, { width: 1600 }), caption: '' },

      {url: getCloudinaryUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_Kitchen_hero, { width: 1600 }), caption: '' },
      {url: getCloudinaryUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_Kitchen_2, { width: 1600 }), caption: '' },

      {url: getCloudinaryUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_Dining, { width: 1600 }), caption: '' },
      {url: getCloudinaryUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_Dining_1, { width: 1600 }), caption: '' },
      {url: getCloudinaryUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_Dining_decor, { width: 1600 }), caption: '' },

      {url: getCloudinaryUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_P2_6, { width: 1600 }), caption: '' },
      {url: getCloudinaryUrl(PROJECT_IMAGES.hiteshbhai_jnd.hb_out_name, { width: 1600 }), caption: '' }
    ],
    
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
