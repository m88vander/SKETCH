import React from 'react'

interface SizeSelectorProps {
  sizes: string[]
  onSizeChange: (size: string) => void
  selectedSize?: string
}

export const SizeSelector: React.FC<SizeSelectorProps> = ({
  sizes,
  onSizeChange,
  selectedSize,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-3">Size</label>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeChange(size)}
            className={`px-4 py-2 text-sm font-medium border transition-colors ${
              selectedSize === size
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-black hover:bg-gray-50'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}
