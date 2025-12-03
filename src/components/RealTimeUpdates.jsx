// import React, { useState, useEffect } from 'react';
// import { X } from 'lucide-react';

// const RealTimeUpdates = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   const updates = [
//     { icon: '🔨', text: 'Currently working on 5 active projects' },
//     { icon: '✅', text: 'Just completed: Modern 3BHK in Ahmedabad' },
//     { icon: '📐', text: '12 3D designs created this month' },
//     { icon: '⭐', text: '150+ happy clients served' },
//     { icon: '🏠', text: 'New project started in Surat last week' }
//   ];

//   useEffect(() => {
//     if (!isVisible) return;
    
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % updates.length);
//     }, 5000); // Change every 5 seconds

//     return () => clearInterval(interval);
//   }, [isVisible, updates.length]);

//   if (!isVisible) return null;

//   return (
//     <div className="fixed top-0 left-0 right-0 bg-orange-600 text-white py-2 px-4 z-50 shadow-md">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Update Text */}
//         <div className="flex items-center gap-3 flex-1 justify-center">
//           <span className="text-xl animate-bounce">{updates[currentIndex].icon}</span>
//           <span className="font-medium text-sm md:text-base">
//             {updates[currentIndex].text}
//           </span>
//         </div>

//         {/* Close Button */}
//         <button
//           onClick={() => setIsVisible(false)}
//           className="ml-4 hover:bg-orange-700 p-1 rounded transition-colors"
//           aria-label="Close banner"
//         >
//           <X size={18} />
//         </button>
//       </div>

//       <style jsx>{`
//         @keyframes slideDown {
//           from {
//             transform: translateY(-100%);
//           }
//           to {
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default RealTimeUpdates;