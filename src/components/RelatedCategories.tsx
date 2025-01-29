// src\components\RelatedCategories.tsx

export default function RelatedCategories() {
  const categories = [
    "Best Selling Products",
    "Best Shoes",
    "New Basketball Shoes",
    "New Football Shoes",
    "New Men's Shoes",
    "New Running Shoes",
    "Best Men's Shoes",
    "New Jordan Shoes",
    "Best Women's Shoes",
    "Best Training & Gym"
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 border-t border-[#E5E5E5]">
      <h2 className="text-[19px] font-medium text-[#111111] mb-6 font-helvetica">
        Related Categories
      </h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <button
            key={index}
            className="inline-flex items-center justify-center px-6 py-2 text-xs text-[#111111] bg-white border border-[#CCCCCC] rounded-full hover:bg-gray-50 transition-colors duration-200"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

