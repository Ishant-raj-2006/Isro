// // import { motion } from "framer-motion";
// import "../../styles/loading.css";

// function LoadingScreen() {
//   return (
//     <div className="loading-screen">

//       <motion.img
//         src="/images/logo.png"
//         alt="ISRO"
//         className="loading-logo"
//         animate={{
//           rotate: 360,
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       <motion.h1
//         initial={{ opacity: 0, y: 25 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         ISRO AI Retrieval
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           delay: 0.5,
//           duration: 1,
//         }}
//       >
//         Initializing AI Engine...
//       </motion.p>

//       <div className="loading-bar">

//         <motion.div
//           className="loading-progress"
//           initial={{ width: 0 }}
//           animate={{ width: "100%" }}
//           transition={{
//             duration: 3,
//           }}
//         />

//       </div>

//     </div>
//   );
// }

// export default LoadingScreen;

import "../../styles/loading.css";

function LoadingScreen() {
  return (
    <div className="loading-screen">

      <img
        src="/images/logo.png"
        alt="ISRO"
        className="loading-logo"
      />

      <h1>ISRO AI Retrieval</h1>

      <p>Initializing AI Engine...</p>

      <div className="loading-bar">
        <div className="loading-progress"></div>
      </div>

    </div>
  );
}

export default LoadingScreen;