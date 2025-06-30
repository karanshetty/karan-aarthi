import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="wedding-gradient min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative Element */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-px bg-olive"></div>
            <div className="text-olive text-3xl">♥</div>
            <div className="w-16 h-px bg-olive"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light wedding-title text-olive mb-4">
            Karan & Aarthi
          </h1>
          
          <p className="text-lg sm:text-xl text-olive/80 wedding-subtitle mb-12">
            Together with our families, we invite you to celebrate our wedding
          </p>

          {/* Couple Image Placeholder */}
          {/* <div className="relative w-80 h-80 sm:w-96 sm:h-96 mx-auto mb-12 rounded-full overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-olive-light/20 to-olive/30 flex items-center justify-center">
              <div className="text-olive text-6xl">♥</div>
            </div>
            Replace this div with an actual image when available
            <Image
              src="/couple-photo.jpg"
              alt="Karan and Aarthi"
              fill
              className="object-cover"
              priority
            />
          </div> */}

          {/* Wedding Details */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-xl border border-olive/10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Date */}
              <div className="text-center">
                <div className="text-olive text-xl mb-2">
                  <svg className="w-6 h-6 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-olive wedding-title mb-2">Wedding Date</h3>
                <p className="text-lg text-olive-dark">July 14, 2025</p>
                <p className="text-olive/70">Monday</p>
              </div>

              {/* Venue */}
              <div className="text-center">
                <div className="text-olive text-xl mb-2">
                  <svg className="w-6 h-6 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-olive wedding-title mb-2">Venue</h3>
                <p className="text-lg text-olive-dark">RV Mahal</p>
                <p className="text-olive/70">Thakkalur, Karaikal, Puducherry</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link 
                href="/details"
                className="px-8 py-3 bg-olive text-white rounded-full font-medium hover:bg-olive-dark transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Details
              </Link>
              <Link 
                href="/venue"
                className="px-8 py-3 border-2 border-olive text-olive rounded-full font-medium hover:bg-olive hover:text-white transition-all duration-300"
              >
                Venue Info
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light text-olive wedding-title mb-6">
            Our Story Begins
          </h2>
          <p className="text-lg text-olive/80 leading-relaxed">
            We are thrilled to share this magical moment with our beloved family and friends. 
            Your presence would make our special day even more meaningful as we begin this 
            beautiful journey together.
          </p>
          
          <div className="flex items-center justify-center space-x-2 mt-8">
            <div className="w-12 h-px bg-olive/30"></div>
            <div className="text-olive/50">✦</div>
            <div className="w-12 h-px bg-olive/30"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
