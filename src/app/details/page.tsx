export default function Details() {
      const events = [
      {
        event: "Reception",
        date: "July 13, 2025",
        day: "Sunday",
        time: "7:00 PM - 11:00 PM", 
        venue: "RV Mahal",
        description: "Dinner and celebration"
      },
      {
        event: "Wedding Ceremony",
        date: "July 14, 2025",
        day: "Monday", 
        time: "6:00 AM - 8:00 AM",
        venue: "RV Mahal",
        description: "Sacred wedding rituals and ceremonies"
      }
    ];

  return (
    <div className="wedding-gradient min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-px bg-olive"></div>
            <div className="text-olive text-2xl">✦</div>
            <div className="w-16 h-px bg-olive"></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-light text-olive wedding-title mb-4">
            Wedding Details
          </h1>
          
          <p className="text-lg text-olive/80 wedding-subtitle max-w-2xl mx-auto">
            Join us for our wedding celebrations at RV Mahal. 
            Each event holds special meaning in our journey together.
          </p>
        </div>

        {/* Events Table - Desktop */}
        <div className="hidden lg:block">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-olive/10 overflow-hidden">
            <table className="w-full">
              <thead className="bg-olive text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Event</th>
                  <th className="px-6 py-4 text-left font-medium">Date & Day</th>
                  <th className="px-6 py-4 text-left font-medium">Time</th>
                  <th className="px-6 py-4 text-left font-medium">Venue</th>
                  <th className="px-6 py-4 text-left font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr key={index} className="border-b border-olive/10 hover:bg-olive/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-olive">{event.event}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-olive-dark">{event.date}</div>
                      <div className="text-sm text-olive/70">{event.day}</div>
                    </td>
                    <td className="px-6 py-4 text-olive-dark">
                      {event.time}
                    </td>
                    <td className="px-6 py-4 text-olive-dark">
                      {event.venue}
                    </td>
                    <td className="px-6 py-4 text-olive/80 text-sm">
                      {event.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Events Cards - Mobile/Tablet */}
        <div className="lg:hidden space-y-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-olive/10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-olive wedding-title">{event.event}</h3>
                  <p className="text-olive/80 text-sm mt-1">{event.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-olive-dark font-medium">{event.date}</div>
                  <div className="text-sm text-olive/70">{event.day}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-olive/10">
                <div>
                  <div className="text-xs text-olive/60 uppercase tracking-wide">Time</div>
                  <div className="text-olive-dark font-medium">{event.time}</div>
                </div>
                <div>
                  <div className="text-xs text-olive/60 uppercase tracking-wide">Venue</div>
                  <div className="text-olive-dark font-medium">{event.venue}</div>
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
              For any questions or special arrangements, please contact us at 
              <span className="text-olive font-medium"> +91 7904495720</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 