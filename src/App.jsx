import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    // Timer untuk menyembunyikan splash screen setelah 3 detik
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);
    return () => clearTimeout(timer); // Bersihkan timer saat komponen di-unmount
  }, []);

  return (
    <>
      {/* Splash Screen */}
      {isSplashVisible ? (
        <div className="flex flex-col items-center justify-center bg-blue-500 text-white min-h-screen w-full fixed top-0 left-0">
          <h1 className="text-4xl font-bold animate-bounce">
            Welcome to My Linktree!
          </h1>
          <p className="mt-4 text-lg">Loading...</p>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-neutral-300 to-stone-400 text-gray-900">
          <div className="flex flex-col items-center bg-gradient-to-r from-blue-600 to-violet-600 text-gray-900 shadow-lg rounded-md px-6">
            <header className="mt-10 text-center ">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto content-center aspect-square"
              />
              <h1 className="text-2xl font-bold text-white mt-4">
                Maulana Zidan Adriansyah
              </h1>
              <p className="mt-2 text-sm italic text-gray-200">
                Undergraduate Informatics Engineering Student at Universitas Dr.
                Soetomo
              </p>
            </header>

            <main className="mt-8 w-full px-4 max-w-md">
              <a
                href="https://www.instagram.com/zid.adr"
                target="_blank"
                className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg mb-4 shadow-md transition-all"
              >
                Instagram
              </a>
              <a
                href="https://github.com/M12Zidan"
                target="_blank"
                className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg mb-4 shadow-md transition-all"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/maulana-zidan-780251209"
                target="_blank"
                className="block w-full text-center bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg mb-4 shadow-md transition-all"
              >
                Linked In
              </a>
            </main>

            <footer className="flex justify-center mt-auto pb-6 text-white text-sm">
              <p>
                Made with ❤️ by{" "}
                <a href="#" className="font-semibold text-sky-300 hover:text-blue-500 hover:underline">
                  Maulana Zidan
                </a>
              </p>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
