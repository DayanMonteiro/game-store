import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { GamesData } from "../../data/MockData";
import { useEffect, useState } from "react";
import "./show-window.css";
import { SlideRight } from "../../utility/animation";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ShopWindow = () => {
  const [activeData, setActiveData] = useState(GamesData[0]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % GamesData.length);
      return () => clearInterval(interval);
    }, 4000);
  }, [currentIndex]);

  useEffect(() => {
    setActiveData(GamesData[currentIndex]);
  }, [currentIndex]);

  return (
    <motion.section
      initial={{
        backgroundImage: `radial-gradient(circle, ${activeData.bgColor} 0%, ${activeData.bgColor} 0%)`,
      }}
      animate={{
        backgroundImage: `radial-gradient(circle,${activeData.bgColor} 0%, ${activeData.bgColor} 70% )`,
      }}
      transition={{ duration: 0.9 }}
      className="shop-window-section"
    >
      <Navbar />

      <div className="shop-window-container">
        <div className="shop-window-info">
          <div className="shop-windon-text">
            <AnimatePresence mode="wait">
              <motion.h1
                key={activeData.id}
                variants={SlideRight(0.2)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="shop-window-title"
              >
                {activeData.title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={activeData.id}
                variants={SlideRight(0.5)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="shop-window-subtitle"
              >
                {activeData.subtitle}
              </motion.p>
            </AnimatePresence>

            <motion.p
              key={activeData.id}
              variants={SlideRight(0.5)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="shop-window-price"
            >
              {activeData.price}
            </motion.p>
          </div>

          <div className="shop-window-image">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: easeInOut,
                  delay: 0,
                }}
                exit={{ opacit: 0, x: -100 }}
                src={activeData.image}
                alt={activeData.title}
                className="shop-window-img"
              ></motion.img>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  ease: easeInOut,
                  delay: 0,
                }}
                exit={{ opacity: 0 }}
                className="shop-window-motion"
              >
                {activeData.name}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Footer />
    </motion.section>
  );
};

export default ShopWindow;
