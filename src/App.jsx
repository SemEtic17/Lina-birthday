import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideIn, popIn, floatUp } from "./utils/motion.js";
import pic1 from "./Images/lina/a.jpg";
import pic2 from "./Images/lina/photo_2025-04-06_05-37-45.jpg";
import pic3 from "./Images/lina/photo_2025-04-06_05-38-46.jpg";
import pic4 from "./Images/lina/photo_2025-04-06_05-38-54.jpg";
import pic5 from "./Images/lina/photo_2025-04-06_05-38-57.jpg";
import pic6 from "./Images/lina/photo_2025-04-06_05-40-16.jpg";
import pic7 from "./Images/lina/photofromtik.png";
import pic8 from "./Images/lina/photo_2025-04-06_05-40-19.jpg";
import ConfettiExplosion from "react-confetti-explosion";

function App() {
  const [isExploding, setIsExploding] = useState(false);
  const [bgColor, setBgColor] = useState("bg-pink-100");
  const [showSurprise, setShowSurprise] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showSecretMessage, setShowSecretMessage] = useState(false);

  const colors = [
    "bg-pink-200",
    "bg-purple-200",
    "bg-yellow-100",
    "bg-blue-100",
    "bg-green-100",
  ];

  const handleClick = () => {
    setIsExploding(true);
    setBgColor(colors[Math.floor(Math.random() * colors.length)]);
    setClickCount((prev) => prev + 1);

    if (clickCount >= 3 && !showSurprise) {
      setShowSurprise(true);
    }
  };

  const messages = [
    "You're amazing!",
    "Best friend ever!",
    "So talented!",
    "Wonderful person!",
    "Birthday queen! 👑",
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${bgColor} overflow-hidden`}
    >
      {/* Confetti explosion */}
      {isExploding && (
        <div className="fixed inset-0 flex justify-center items-center pointer-events-none">
          <ConfettiExplosion
            particleCount={150}
            duration={3000}
            width={1600}
            onComplete={() => setIsExploding(false)}
          />
        </div>
      )}

      {/* Floating balloons */}
      <AnimatePresence>
        {showSurprise && (
          <>
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: "100vh", x: `${Math.random() * 100}vw` }}
                animate={{
                  y: `-${Math.random() * 100}vh`,
                  x: `${Math.random() * 20 - 10}vw`,
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="absolute text-4xl"
                style={{ left: `${Math.random() * 100}%` }}
              >
                🎈
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Secret message */}
      {showSecretMessage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setShowSecretMessage(false)}
        >
          <motion.div
            className="bg-black p-8 rounded-lg max-w-md text-center"
            variants={popIn(0.2, 1)}
          >
            <h2 className="text-2xl font-bold mb-4">
              Psst... A Secret Just For You!
            </h2>
            <p>You're the most amazing friend anyone could ask for! 🥰</p>
          </motion.div>
        </motion.div>
      )}

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-5xl md:text-6xl text-center mt-5 font-bold text-pink-600 mb-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Happy Birthday Z!! 🎉
        </motion.h1>

        {/* Magic button */}
        <motion.div
          className="flex justify-center mb-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={handleClick}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg text-xl transition-all"
          >
            Click for Birthday Magic! ✨
          </button>
        </motion.div>

        {/* Hidden surprise button */}
        {clickCount > 5 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mb-10"
          >
            <button
              onClick={() => setShowSecretMessage(true)}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow text-sm transition-all"
            >
              Secret Message Just For You 💌
            </button>
          </motion.div>
        )}

        {/* Birthday messages with photos */}
        {[
          {
            img: pic1,
            text: "Happy birthday to you, my dear friend! I hope this year brings you all the happiness and success you deserve.",
            dir: "left",
          },
          {
            img: pic2,
            text: "May your day be filled with love, laughter, and unforgettable memories. You are such a special person in my life, and I am grateful for your friendship.",
            dir: "right",
          },
          {
            img: pic3,
            text: "Thank you for always being there for me and for all the wonderful moments we have shared together.",
            dir: "left",
          },
          {
            img: pic4,
            text: "Enjoy your special day to the fullest! Remember that you are loved and cherished by so many people.",
            dir: "right",
          },
          {
            img: pic5,
            text: "May this birthday be the best one yet, filled with all the things you love. I can't wait to celebrate with you!",
            dir: "left",
          },
          {
            img: pic6,
            text: "Cheers to you, Z! You are truly one of a kind, and I am so lucky to have you in my life.",
            dir: "right",
          },
          {
            img: pic7,
            text: "I hope this year brings you everything you have been wishing for and more. You deserve all the happiness in the world!",
            dir: "left",
          },
          {
            img: pic8,
            text: "So go out there and celebrate like there's no tomorrow! Here's to another year of adventures and beautiful memories.",
            dir: "right",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={slideIn(item.dir, "spring", index * 0.1, 0.8)}
            className={`flex ${
              item.dir === "right" ? "flex-row-reverse" : "flex-row"
            } items-center justify-center my-8 p-4 rounded-xl bg-white bg-opacity-70 shadow-md`}
          >
            <motion.img
              src={item.img}
              alt="Birthday"
              className={`${
                item.dir === "right" ? "ml-5" : "mr-5"
              } w-32 h-40 md:w-40 md:h-52 rounded-lg shadow-lg object-cover`}
              whileHover={{ scale: 1.03 }}
            />
            <motion.p
              className="text-sm md:text-base text-center w-40 md:w-56 p-2 text-black"
              variants={floatUp(0.5, 1)}
            >
              {item.text}
            </motion.p>
          </motion.div>
        ))}

        {/* Floating compliment bubbles */}
        <div className="fixed bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, x: `${Math.random() * 100}%`, opacity: 0 }}
              animate={{
                y: -1000,
                x: `${Math.random() * 20 - 10 + 50}%`,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                delay: Math.random() * 10,
                repeat: Infinity,
                repeatDelay: Math.random() * 15,
              }}
              className="absolute bg-white bg-opacity-80 px-3 py-1 rounded-full text-xs shadow-sm"
            >
              {messages[Math.floor(Math.random() * messages.length)]}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
