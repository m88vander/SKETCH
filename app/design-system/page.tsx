export const metadata = {
  title: 'Typography & Design System | SKETCH',
  description: 'SKETCH design system showcase.',
}

export default function DesignSystemPage() {
  return (
    <main className="bg-white">
      <div className="container section-lg">
        {/* Display Headings */}
        <div className="mb-20">
          <h2 className="text-gray-600 mb-8 text-sm uppercase tracking-wide">Display Typography</h2>
          <h1>This is an H1 Display Heading</h1>
          <h2>This is an H2 Display Heading</h2>
          <h3>This is an H3 Display Heading</h3>
          <h4>This is an H4 Display Heading</h4>
        </div>

        {/* Body Text */}
        <div className="mb-20">
          <h2 className="text-gray-600 mb-8 text-sm uppercase tracking-wide">Body Typography</h2>
          <p className="lead">This is a lead paragraph. It is larger and more prominent than body text.</p>
          <p>This is a standard paragraph. It contains the main body content and should be readable and comfortable to read at any length. The line height is optimized for readability.</p>
          <p className="small">This is a small paragraph. It is used for secondary information or captions.</p>
        </div>

        {/* Lists */}
        <div className="mb-20">
          <h2 className="text-gray-600 mb-8 text-sm uppercase tracking-wide">Lists</h2>
          <ul>
            <li>Zoom in on the details</li>
            <li>Zoom out and see the whole picture</li>
            <li>Ask if it still fits</li>
            <li>Redraw what doesn't work</li>
          </ul>
        </div>

        {/* Blockquote */}
        <div className="mb-20">
          <h2 className="text-gray-600 mb-8 text-sm uppercase tracking-wide">Blockquote</h2>
          <blockquote>
            "Your life is never finished. It's something you're constantly drawing. Sometimes you zoom in and realize a line looks perfect. Then you zoom out. And realize it doesn't belong. That's[...]
          </blockquote>
        </div>

        {/* Buttons */}
        <div className="mb-20">
          <h2 className="text-gray-600 mb-8 text-sm uppercase tracking-wide">Buttons</h2>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-black text-white px-6 py-3 hover:bg-gray-900 transition-colors">Primary Button</button>
            <button className="bg-transparent text-black border border-black px-6 py-3 hover:bg-gray-100 transition-colors">Secondary Button</button>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mb-20">
          <h2 className="text-gray-600 mb-8 text-sm uppercase tracking-wide">Color Palette</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <div>
              <div className="w-full aspect-square bg-black border border-gray-300 mb-2"></div>
              <p className="text-xs">Black</p>
            </div>
            <div>
              <div className="w-full aspect-square bg-gray-900 border border-gray-300 mb-2"></div>
              <p className="text-xs">Gray 900</p>
            </div>
            <div>
              <div className="w-full aspect-square bg-gray-700 border border-gray-300 mb-2"></div>
              <p className="text-xs">Gray 700</p>
            </div>
            <div>
              <div className="w-full aspect-square bg-gray-300 border border-gray-300 mb-2"></div>
              <p className="text-xs">Gray 300</p>
            </div>
            <div>
              <div className="w-full aspect-square bg-gray-100 border border-gray-300 mb-2"></div>
              <p className="text-xs">Gray 100</p>
            </div>
            <div>
              <div className="w-full aspect-square bg-white border border-gray-300 mb-2"></div>
              <p className="text-xs">White</p>
            </div>
          </div>
        </div>

        {/* Spacing Scale */}
        <div className="mb-20">
          <h2 className="text-gray-600 mb-8 text-sm uppercase tracking-wide">Spacing Scale</h2>
          <div className="space-y-6">
            <div>
              <p className="text-xs text-gray-600 mb-2">4px (0.25rem)</p>
              <div className="bg-black" style={{ height: '4px', width: '100%' }}></div>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-2">8px (0.5rem)</p>
              <div className="bg-black" style={{ height: '8px', width: '100%' }}></div>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-2">16px (1rem)</p>
              <div className="bg-black" style={{ height: '16px', width: '100%' }}></div>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-2">24px (1.5rem)</p>
              <div className="bg-black" style={{ height: '24px', width: '100%' }}></div>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-2">32px (2rem)</p>
              <div className="bg-black" style={{ height: '32px', width: '100%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}