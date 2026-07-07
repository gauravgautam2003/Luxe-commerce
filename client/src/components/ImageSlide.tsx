import elcetronics from "../assets/category_electronics.png";
import homeProducts from "../assets/category_home.png";
import beauty from "../assets/category_beauty.png";
import shoes from "../assets/nike.jpg";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";



const images = [
    elcetronics,
    homeProducts,
    beauty,
    shoes
]

const ImageSlide = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => window.clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full mx-auto overflow-hidden h-[calc(100vh-3.05rem)]">
            <AnimatePresence mode="wait">
                <motion.img
                
                    key={images[current]}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}

                    src={images[current]}
                    alt="slider"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>
        </div>
    )
}

export default ImageSlide