import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Camera, MapPin, Calendar, Download, Maximize2, Heart, Share2 } from 'lucide-react';

const PhotographyPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [columns, setColumns] = useState(4);
  const containerRef = useRef(null);

  // Calculate columns based on screen width
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 640) setColumns(1);
      else if (width < 768) setColumns(2);
      else if (width < 1024) setColumns(3);
      else setColumns(4);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Real photography data from Images folder
  const initialPhotos = [
    { id: 1, src: require('../Images/IMG-20250721-WA0082.jpg'), title: 'Photo 1', category: 'landscape', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 2, src: require('../Images/IMG-20250721-WA0081.jpg'), title: 'Photo 2', category: 'architecture', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 3, src: require('../Images/IMG-20250721-WA0080.jpg'), title: 'Photo 3', category: 'nature', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 4, src: require('../Images/IMG-20250721-WA0079.jpg'), title: 'Photo 4', category: 'street', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 5, src: require('../Images/IMG-20250721-WA0078.jpg'), title: 'Photo 5', category: 'night', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 6, src: require('../Images/IMG-20250721-WA0077.jpg'), title: 'Photo 6', category: 'landscape', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 7, src: require('../Images/IMG-20250721-WA0076.jpg'), title: 'Photo 7', category: 'architecture', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 8, src: require('../Images/IMG-20250721-WA0075.jpg'), title: 'Photo 8', category: 'nature', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 9, src: require('../Images/IMG-20250721-WA0074.jpg'), title: 'Photo 9', category: 'street', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 10, src: require('../Images/IMG-20250721-WA0073.jpg'), title: 'Photo 10', category: 'night', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 11, src: require('../Images/IMG-20250721-WA0072.jpg'), title: 'Photo 11', category: 'landscape', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 12, src: require('../Images/IMG-20250721-WA0071.jpg'), title: 'Photo 12', category: 'architecture', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 13, src: require('../Images/IMG-20250721-WA0070.jpg'), title: 'Photo 13', category: 'nature', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 14, src: require('../Images/IMG-20250721-WA0069.jpg'), title: 'Photo 14', category: 'street', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 15, src: require('../Images/IMG-20250721-WA0068.jpg'), title: 'Photo 15', category: 'night', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 16, src: require('../Images/IMG-20250721-WA0067.jpg'), title: 'Photo 16', category: 'landscape', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 17, src: require('../Images/IMG-20250721-WA0066.jpg'), title: 'Photo 17', category: 'architecture', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 18, src: require('../Images/IMG-20250721-WA0065.jpg'), title: 'Photo 18', category: 'nature', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 19, src: require('../Images/IMG-20250721-WA0064.jpg'), title: 'Photo 19', category: 'street', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 20, src: require('../Images/IMG-20250721-WA0063.jpg'), title: 'Photo 20', category: 'night', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 21, src: require('../Images/IMG-20250721-WA0062.jpg'), title: 'Photo 21', category: 'landscape', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 22, src: require('../Images/IMG-20250721-WA0061.jpg'), title: 'Photo 22', category: 'architecture', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 23, src: require('../Images/IMG-20250721-WA0060.jpg'), title: 'Photo 23', category: 'nature', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 24, src: require('../Images/IMG-20250721-WA0059.jpg'), title: 'Photo 24', category: 'street', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 25, src: require('../Images/IMG-20250721-WA0058.jpg'), title: 'Photo 25', category: 'night', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 26, src: require('../Images/IMG-20250721-WA0057.jpg'), title: 'Photo 26', category: 'landscape', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 27, src: require('../Images/IMG-20250721-WA0056.jpg'), title: 'Photo 27', category: 'architecture', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 28, src: require('../Images/IMG-20250721-WA0055.jpg'), title: 'Photo 28', category: 'nature', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 29, src: require('../Images/IMG-20250721-WA0054.jpg'), title: 'Photo 29', category: 'street', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 30, src: require('../Images/IMG-20250721-WA0053.jpg'), title: 'Photo 30', category: 'night', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 31, src: require('../Images/IMG-20250721-WA0052.jpg'), title: 'Photo 31', category: 'landscape', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 32, src: require('../Images/IMG-20250721-WA0051.jpg'), title: 'Photo 32', category: 'architecture', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 33, src: require('../Images/IMG-20250721-WA0050.jpg'), title: 'Photo 33', category: 'nature', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 34, src: require('../Images/IMG-20250721-WA0049.jpg'), title: 'Photo 34', category: 'street', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 35, src: require('../Images/IMG-20250721-WA0048.jpg'), title: 'Photo 35', category: 'night', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 36, src: require('../Images/IMG-20250721-WA0047.jpg'), title: 'Photo 36', category: 'landscape', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 37, src: require('../Images/IMG-20250721-WA0046.jpg'), title: 'Photo 37', category: 'architecture', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 38, src: require('../Images/IMG-20250721-WA0045.jpg'), title: 'Photo 38', category: 'nature', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 39, src: require('../Images/IMG-20250721-WA0044.jpg'), title: 'Photo 39', category: 'street', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 40, src: require('../Images/IMG-20250721-WA0043.jpg'), title: 'Photo 40', category: 'night', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 41, src: require('../Images/IMG-20250721-WA0042.jpg'), title: 'Photo 41', category: 'landscape', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 42, src: require('../Images/IMG-20250721-WA0041.jpg'), title: 'Photo 42', category: 'architecture', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 43, src: require('../Images/IMG-20250721-WA0040.jpg'), title: 'Photo 43', category: 'nature', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 44, src: require('../Images/IMG-20250721-WA0039.jpg'), title: 'Photo 44', category: 'street', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 45, src: require('../Images/IMG-20250721-WA0038.jpg'), title: 'Photo 45', category: 'night', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 46, src: require('../Images/IMG-20250721-WA0034.jpg'), title: 'Photo 46', category: 'landscape', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 47, src: require('../Images/IMG-20250721-WA0033.jpg'), title: 'Photo 47', category: 'architecture', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 48, src: require('../Images/IMG-20250721-WA0032.jpg'), title: 'Photo 48', category: 'nature', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 49, src: require('../Images/IMG-20250721-WA0031.jpg'), title: 'Photo 49', category: 'street', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 50, src: require('../Images/IMG-20250721-WA0030.jpg'), title: 'Photo 50', category: 'night', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 51, src: require('../Images/WhatsApp Image 2025-07-21 at 12.09.51_41b98755.jpg'), title: 'Photo 51', category: 'landscape', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 52, src: require('../Images/WhatsApp Image 2025-07-21 at 12.09.51_76507b4e.jpg'), title: 'Photo 52', category: 'architecture', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 53, src: require('../Images/WhatsApp Image 2025-07-21 at 12.09.51_7ef2835c.jpg'), title: 'Photo 53', category: 'nature', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 54, src: require('../Images/WhatsApp Image 2025-07-21 at 12.09.52_37066858.jpg'), title: 'Photo 54', category: 'street', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 55, src: require('../Images/WhatsApp Image 2025-07-21 at 12.09.52_6ab6c04b.jpg'), title: 'Photo 55', category: 'night', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 56, src: require('../Images/WhatsApp Image 2025-07-21 at 12.09.52_3a248085.jpg'), title: 'Photo 56', category: 'landscape', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 57, src: require('../Images/IMG-20250721-WA0024.jpg'), title: 'Photo 57', category: 'architecture', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 58, src: require('../Images/IMG-20250721-WA0023.jpg'), title: 'Photo 58', category: 'nature', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 59, src: require('../Images/IMG-20250721-WA0022.jpg'), title: 'Photo 59', category: 'street', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 60, src: require('../Images/IMG-20250721-WA0020.jpg'), title: 'Photo 60', category: 'night', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 61, src: require('../Images/IMG-20250721-WA0019.jpg'), title: 'Photo 61', category: 'landscape', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 62, src: require('../Images/IMG-20250721-WA0018.jpg'), title: 'Photo 62', category: 'architecture', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 63, src: require('../Images/IMG-20250721-WA0017.jpg'), title: 'Photo 63', category: 'nature', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 64, src: require('../Images/IMG-20250721-WA0016.jpg'), title: 'Photo 64', category: 'street', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 65, src: require('../Images/IMG-20250721-WA0015.jpg'), title: 'Photo 65', category: 'night', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 66, src: require('../Images/IMG-20250721-WA0014.jpg'), title: 'Photo 66', category: 'landscape', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 67, src: require('../Images/IMG-20250721-WA0013.jpg'), title: 'Photo 67', category: 'architecture', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 68, src: require('../Images/IMG-20250721-WA0012.jpg'), title: 'Photo 68', category: 'nature', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 69, src: require('../Images/IMG-20250721-WA0011.jpg'), title: 'Photo 69', category: 'street', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 70, src: require('../Images/IMG-20250721-WA0010.jpg'), title: 'Photo 70', category: 'night', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 71, src: require('../Images/IMG-20250721-WA0009.jpg'), title: 'Photo 71', category: 'landscape', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 72, src: require('../Images/IMG-20250721-WA0008.jpg'), title: 'Photo 72', category: 'architecture', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 73, src: require('../Images/IMG-20250721-WA0007.jpg'), title: 'Photo 73', category: 'nature', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 74, src: require('../Images/IMG-20250721-WA0006.jpg'), title: 'Photo 74', category: 'street', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 75, src: require('../Images/IMG-20250721-WA0005.jpg'), title: 'Photo 75', category: 'night', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 76, src: require('../Images/IMG-20250721-WA0004.jpg'), title: 'Photo 76', category: 'landscape', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 77, src: require('../Images/IMG-20250721-WA0003.jpg'), title: 'Photo 77', category: 'architecture', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 78, src: require('../Images/IMG-20250721-WA0002.jpg'), title: 'Photo 78', category: 'nature', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 79, src: require('../Images/IMG-20250721-WA0001.jpg'), title: 'Photo 79', category: 'street', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 80, src: require('../Images/IMG-20250202-WA0088.jpg'), title: 'Photo 80', category: 'night', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 81, src: require('../Images/IMG-20250202-WA0081.jpg'), title: 'Photo 81', category: 'landscape', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 82, src: require('../Images/IMG-20250202-WA0080.jpg'), title: 'Photo 82', category: 'architecture', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 83, src: require('../Images/IMG-20250202-WA0078.jpg'), title: 'Photo 83', category: 'nature', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 84, src: require('../Images/IMG-20250202-WA0075.jpg'), title: 'Photo 84', category: 'street', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 85, src: require('../Images/IMG-20250202-WA0074.jpg'), title: 'Photo 85', category: 'night', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
    { id: 86, src: require('../Images/IMG-20250202-WA0073.jpg'), title: 'Photo 86', category: 'landscape', location: 'Islamabad', date: '2025', aspectRatio: 0.75 },
  ];

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos(initialPhotos.sort(() => Math.random() - 0.5));
  }, []);

  // Filter photos by category
  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  // Distribute photos into columns for masonry layout
  const getColumns = () => {
    const cols = Array.from({ length: columns }, () => []);
    filteredPhotos.forEach((photo, index) => {
      cols[index % columns].push(photo);
    });
    return cols;
  };

  // Loading Screen
  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <Camera className="w-12 h-12 text-purple-400 animate-pulse mx-auto mb-4" />
        <h2 className="text-white text-xl font-semibold">Loading Gallery...</h2>
      </div>
    </div>
  );

  // Image Modal
  const ImageModal = ({ image, onClose }) => (
    <div 
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Image */}
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-auto rounded-lg"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/800x${Math.floor(800 / image.aspectRatio)}`;
          }}
        />
      </div>
    </div>
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-12 max-w-7xl">
          {/* Navigation */}
          <nav className="mb-12">
            <a 
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Portfolio</span>
            </a>
          </nav>

          {/* Header */}
          <header className="mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-pink-400 animate-gradient">
                Islamabad Through My Lens
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Capturing the beauty, culture, and essence of Pakistan's capital city. 
              From the majestic Margalla Hills to the modern architecture, every frame tells a story.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
                  200+
                </div>
                <div className="text-sm text-gray-500">Photos Captured</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                  50+
                </div>
                <div className="text-sm text-gray-500">Locations Explored</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  4
                </div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
            </div>
          </header>

          {/* Masonry Grid */}
          <div ref={containerRef} className="px-6 max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {getColumns().map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-4">
                  {column.map((photo, index) => (
                    <div
                      key={photo.id}
                      className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-900 animate-fade-in-up"
                      style={{ animationDelay: `${(colIndex * 100 + index * 50)}ms` }}
                      onMouseEnter={() => setHoveredImage(photo.id)}
                      onMouseLeave={() => setHoveredImage(null)}
                      onClick={() => setSelectedImage(photo)}
                    >
                      {/* Image with grayscale effect */}
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-auto object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        style={{ aspectRatio: photo.aspectRatio }}
                        onError={(e) => {
                          const height = Math.floor(400 / photo.aspectRatio);
                          e.target.src = `https://via.placeholder.com/400x${height}`;
                        }}
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Content overlay */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {/* Top actions */}
                        <div className="flex justify-end gap-2">
                          <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                            <Heart className="w-5 h-5" />
                          </button>
                          <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                            <Share2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      
                      {/* View icon */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
                          <Maximize2 className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="container mx-auto px-6 py-12 max-w-7xl">
            <footer className="text-center py-12 border-t border-gray-900">
              <p className="text-gray-500 mb-2">Every frame tells a story of Islamabad</p>
              <p className="text-gray-600 text-sm">© 2025 Abdullah Sohail. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}

      {/* Custom styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default PhotographyPortfolio;