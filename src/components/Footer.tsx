export default function Footer() {
  return (
    <footer className="wedding-gradient border-t border-olive/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-px bg-olive"></div>
            <div className="text-olive text-2xl">♥</div>
            <div className="w-8 h-px bg-olive"></div>
          </div>
          <p className="text-olive wedding-subtitle text-lg mb-2">
            Aarthi & Karan
          </p>
          
          <p className="text-olive/70 text-sm">
            With love and gratitude for your presence in our lives
          </p>
          
          <div className="mt-6 pt-4 border-t border-olive/10">
            <p className="text-olive/60 text-xs">
              © 2025 • Made with love for our special day
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 