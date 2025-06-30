export default function Venue() {
  const venues = [
    {
      name: "RV Mahal",
      type: "Reception & Wedding Venue",
      address: "RV Mahal Thakkalur, Karaikal, Dharmapuram, Puducherry 609602",
      description: "A beautiful and traditional wedding venue located in the serene surroundings of Thakkalur, Karaikal. RV Mahal offers an elegant setting with traditional architecture and modern amenities, perfect for creating unforgettable memories on your special day.",
      features: [
        "Spacious hall with capacity for large gatherings",
        "Traditional architecture with modern facilities",
        "Ample parking space available",
        "Professional catering services",
        "Decorative lighting and sound systems",
        "Comfortable seating arrangements",
        "Air-conditioned indoor spaces"
      ],
      mapLink: "https://maps.app.goo.gl/rW5PBjggabnFAr2o8",
      phone: "+91 7904495720",
      email: "karannn21915@gmail.com"
    }
  ];

  return (
    <div className="wedding-gradient min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-px bg-olive"></div>
            <div className="text-olive text-2xl">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-16 h-px bg-olive"></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-light text-olive wedding-title mb-4">
            Venue Information
          </h1>
          
          <p className="text-lg text-olive/80 wedding-subtitle max-w-2xl mx-auto">
            Discover the beautiful location where our wedding celebrations will take place. 
            This venue has been carefully chosen to create unforgettable memories.
          </p>
        </div>

        {/* Venues */}
        <div className="space-y-12">
          {venues.map((venue, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-olive/10 overflow-hidden">
              
              {/* Venue Header */}
              <div className="bg-olive text-white p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-light wedding-title mb-1">{venue.name}</h2>
                    <p className="text-olive-light text-sm">{venue.type}</p>
                  </div>
                  <div className="mt-4 sm:mt-0 flex space-x-3">
                    <a 
                      href={venue.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      View on Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Venue Content */}
              <div className="p-6 sm:p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  
                  {/* Address & Description */}
                  <div>
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-olive mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Address
                      </h3>
                      <p className="text-olive-dark bg-olive/5 p-3 rounded-lg">
                        {venue.address}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-olive mb-3">About the Venue</h3>
                      <p className="text-olive/80 leading-relaxed">
                        {venue.description}
                      </p>
                    </div>

                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-medium text-olive mb-3">Contact Information</h3>
                      <div className="space-y-2">
                        <div className="flex items-center text-olive/80">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          {venue.phone}
                        </div>
                        {venue.email && (
                          <div className="flex items-center text-olive/80">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            {venue.email}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-medium text-olive mb-4">Venue Features</h3>
                    <div className="space-y-3">
                      {venue.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-olive rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-olive/80">{feature}</p>
                        </div>
                      ))}
                    </div>

                    {/* Map Embed Placeholder */}
                    <div className="mt-8">
                      <h3 className="text-lg font-medium text-olive mb-4">Location</h3>
                      <div className="bg-olive/10 rounded-lg p-8 text-center">
                        <svg className="w-12 h-12 text-olive/50 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-olive/70 text-sm mb-4">Interactive map location</p>
                        <a 
                          href={venue.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-olive text-white rounded-full text-sm font-medium hover:bg-olive-dark transition-all duration-300"
                        >
                          Open in Google Maps
                          <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-olive/10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-px bg-olive/30"></div>
              <div className="text-olive/50">✦</div>
              <div className="w-12 h-px bg-olive/30"></div>
            </div>
              <p className="text-olive/70 text-sm">
                Need help with directions? Contact us at 
                <span className="text-olive font-medium"> +91 7904495720</span>
              </p>
          </div>
        </div>

      </div>
    </div>
  );
} 