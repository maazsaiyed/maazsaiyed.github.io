import { motion } from "motion/react";

export default function ProfilePicture() {

    return (
        <div>
            <svg width={0} height={0} viewBox="0 0 50 50">
                <defs>
                    <clipPath id="shape">
                        <motion.path
                            animate={{
                                d: [
                                    "M 211 35 Q 34 33 64 219 Q 17 428 202 418 Q 315 498 398 404 Q 497 314 431 174 Q 456 -5 211 35",
                                    "M 245 32 Q 34 33 69 238 Q -3 416 197 458 Q 333 506 398 404 Q 497 314 442 203 Q 456 -5 245 32",
                                    "M 211 35 Q 34 33 64 219 Q 17 428 202 418 Q 315 498 398 404 Q 497 314 431 174 Q 456 -5 211 35"
                                ]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut"
                            }}
                        />
                    </clipPath>
                </defs>
            </svg>

            <motion.img
                src="/resources/profile_pic.png"
                alt="profile_pic"
                style={{
                    width: 500,
                    height: 500,
                    objectFit: "cover",
                    objectPosition: "90% -10%",
                    clipPath: "url(#shape)"
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
            />
        </div>
    );
}