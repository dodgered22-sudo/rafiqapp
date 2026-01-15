
import React, { useState, useEffect } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Product } from '../types';
import { ShoppingCart, Search, Filter, Star, X } from 'lucide-react';

const StarRating: React.FC<{ rating: number; size?: number; onRatingChange?: (rating: number) => void; interactive?: boolean }> = ({ rating, size = 16, onRatingChange, interactive = false }) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex gap-1" dir="ltr">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={`transition-colors ${interactive ? 'cursor-pointer' : ''} ${
            (hoverRating || rating) >= star ? 'text-brand-orange fill-brand-orange' : 'text-gray-300'
          }`}
          onMouseEnter={interactive ? () => setHoverRating(star) : undefined}
          onMouseLeave={interactive ? () => setHoverRating(0) : undefined}
          onClick={interactive ? () => onRatingChange?.(star) : undefined}
        />
      ))}
    </div>
  );
};

const Store: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState('');

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setNewRating(0);
    setNewComment('');
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newRating === 0 || !newComment.trim() || !selectedProduct) return;

    const newReview = {
      id: `r${Date.now()}`,
      user: 'مستخدم ضيف',
      avatar: 'https://i.pravatar.cc/150?u=guestuser',
      rating: newRating,
      comment: newComment,
      date: new Date().toISOString().split('T')[0],
    };
    
    const updatedProducts = products.map(p => {
      if (p.id === selectedProduct.id) {
        return { ...p, reviews: [...(p.reviews || []), newReview] };
      }
      return p;
    });

    setProducts(updatedProducts);
    setSelectedProduct(prev => prev ? { ...prev, reviews: [...(prev.reviews || []), newReview] } : null);
    setNewRating(0);
    setNewComment('');
  };

  const getAverageRating = (product: Product) => {
    if (!product.reviews || product.reviews.length === 0) return { avg: 0, count: 0 };
    const total = product.reviews.reduce((acc, review) => acc + review.rating, 0);
    return { avg: total / product.reviews.length, count: product.reviews.length };
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
       if (event.key === 'Escape') {
        handleCloseModal();
       }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="space-y-6 bg-white dark:bg-brand-grey-bg transition-colors relative">
      <div className="flex flex-col gap-4 mt-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white px-2">متجر رفيق</h2>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="ابحث عن مستلزمات..."
              className="w-full pl-6 pr-12 py-4 bg-brand-soft dark:bg-brand-grey-card border-none rounded-2xl focus:ring-2 focus:ring-red-100 dark:focus:ring-brand-orange/20 transition-all text-sm shadow-sm dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-auto right-4 top-1/2 -translate-y-1/2 text-brand-red" size={18} />
          </div>
          <button className="bg-white dark:bg-brand-grey-card p-4 rounded-2xl soft-shadow dark:shadow-none text-gray-400 dark:text-gray-500 hover:text-brand-red hover:bg-brand-soft dark:hover:bg-brand-grey-border transition-all border border-transparent dark:border-brand-grey-border">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pb-12 px-1">
        {filteredProducts.map(product => {
          const ratingInfo = getAverageRating(product);
          return (
            <div key={product.id} onClick={() => handleProductClick(product)} className="bg-white dark:bg-brand-grey-card rounded-3xl p-3 soft-shadow dark:shadow-none border border-transparent dark:border-brand-grey-border flex flex-col group hover:scale-[1.02] transition-all cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-2xl mb-3 bg-gray-50 dark:bg-brand-grey-bg">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="px-1 flex-1 flex flex-col">
                <h3 className="font-bold text-gray-900 dark:text-white text-xs leading-tight mb-2 h-8 overflow-hidden">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <StarRating rating={ratingInfo.avg} size={12} />
                  <span className="text-[10px] text-gray-400 font-bold">({ratingInfo.count})</span>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-brand-red font-bold text-sm">{product.price} <span className="text-[8px]">ر.س</span></span>
                  <button onClick={(e) => e.stopPropagation()} className="w-8 h-8 bg-brand-soft dark:bg-brand-orange/10 text-brand-red rounded-xl flex items-center justify-center hover:bg-brand-red hover:text-white transition-all shadow-sm">
                    <ShoppingCart size={14} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Product Detail Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleCloseModal}></div>
          <div className="relative bg-white w-full max-w-lg max-h-[90vh] rounded-4xl m-4 flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
            <button onClick={handleCloseModal} className="absolute top-4 left-4 z-20 w-8 h-8 bg-gray-100/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-all">
              <X size={18} />
            </button>
            <div className="flex-1 overflow-y-auto no-scrollbar">
              <div className="h-64 bg-gray-100 flex items-center justify-center p-4">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="max-h-full object-contain" />
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedProduct.name}</h2>
                  <p className="text-sm text-gray-500 mt-2">{selectedProduct.description}</p>
                  <div className="flex items-center gap-4 mt-4">
                    <span className="text-2xl font-black text-brand-red">{selectedProduct.price} <span className="text-base">ر.س</span></span>
                    <div className="flex items-center gap-2">
                      <StarRating rating={getAverageRating(selectedProduct).avg} />
                      <span className="text-sm text-gray-500 font-bold">({getAverageRating(selectedProduct).count} مراجعات)</span>
                    </div>
                  </div>
                </div>
                
                {/* Reviews Section */}
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="font-bold text-gray-900 mb-4">آراء العملاء</h3>
                  <div className="space-y-4 max-h-48 overflow-y-auto pr-2">
                    {selectedProduct.reviews && selectedProduct.reviews.length > 0 ? selectedProduct.reviews.map(review => (
                      <div key={review.id} className="flex gap-3">
                        <img src={review.avatar} alt={review.user} className="w-10 h-10 rounded-full" />
                        <div>
                          <div className="flex items-center justify-between">
                             <h4 className="font-bold text-sm">{review.user}</h4>
                             <StarRating rating={review.rating} size={14} />
                          </div>
                          <p className="text-xs text-gray-600 mt-1">{review.comment}</p>
                        </div>
                      </div>
                    )) : (
                      <p className="text-sm text-gray-400 text-center py-4">لا توجد مراجعات لهذا المنتج حتى الآن.</p>
                    )}
                  </div>
                </div>

                {/* Add Review Form */}
                <div className="border-t border-gray-100 pt-6">
                   <h3 className="font-bold text-gray-900 mb-4">أضف مراجعتك</h3>
                   <form onSubmit={handleReviewSubmit} className="space-y-4">
                      <div>
                        <label className="text-sm font-bold text-gray-600 mb-2 block">تقييمك</label>
                        <StarRating rating={newRating} onRatingChange={setNewRating} interactive={true} size={24} />
                      </div>
                      <div>
                        <label htmlFor="comment" className="text-sm font-bold text-gray-600 mb-2 block">تعليقك</label>
                        <textarea 
                          id="comment"
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          placeholder="اكتب تجربتك مع المنتج..."
                          className="w-full bg-gray-50 rounded-xl p-3 text-sm border border-gray-200 focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange/50 outline-none transition"
                          rows={3}
                        ></textarea>
                      </div>
                      <button type="submit" className="w-full bg-brand-red text-white font-bold py-3 rounded-xl hover:bg-brand-dark transition-all disabled:opacity-50" disabled={newRating === 0 || !newComment.trim()}>إرسال المراجعة</button>
                   </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Store;