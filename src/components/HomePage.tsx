export default function HomePage() {
  return (
    <main className="min-h-[90vh] bg-gray-50 flex flex-col items-center justify-center px-6 text-center">
      {/* Hero Content */}
      <div className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl  leading-tight tracking-tight">
          Build Faster. Deploy Smarter.
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-500">
          A modern template powering your next big idea.  
          Clean, scalable, and optimized for performance.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center">
          <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">
            Get Started
          </button>

          <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>

   \
    </main>
  );
}
