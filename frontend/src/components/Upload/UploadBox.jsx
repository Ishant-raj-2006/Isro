// import { useState } from "react";
// import {
//   FaCloudUploadAlt,
//   FaImage,
//   FaTrash,
// } from "react-icons/fa";

// function UploadBox() {
//   const [image, setImage] = useState(null);

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const removeImage = () => {
//     setImage(null);
//   };

//   return (
//     <section className="upload-section" id="upload">

//       <div className="container">

//         <div className="upload-header">

//           <h2>Upload Satellite Image</h2>

//           <p>
//             Upload an Optical, SAR, or Multispectral image
//             to search similar satellite images.
//           </p>

//         </div>

//         <div className="upload-card">

//           <label className="upload-area">

//             {image ? (

//               <img
//                 src={image}
//                 alt="Preview"
//                 className="preview-image"
//               />

//             ) : (

//               <>

//                 <FaCloudUploadAlt className="upload-icon" />

//                 <h3>Drag & Drop Image Here</h3>

//                 <p>
//                   or click to browse your computer
//                 </p>

//               </>

//             )}

//             <input
//               type="file"
//               accept=".jpg,.jpeg,.png"
//               hidden
//               onChange={handleImageUpload}
//             />

//           </label>

//           <div className="upload-actions">

//             <button className="primary-btn">

//               <FaImage />

//               Upload Image

//             </button>

//             <button
//               className="secondary-btn"
//               onClick={removeImage}
//             >

//               <FaTrash />

//               Remove

//             </button>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default UploadBox;

import { useRef, useState } from "react";
import {
  FaCloudUploadAlt,
  FaImage,
  FaTrash,
  FaSearch,
} from "react-icons/fa";

function UploadBox() {
  const inputRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleImage = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setFileName(file.name);
    setSelectedImage(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setSelectedImage(null);
    setFileName("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <section className="upload-section" id="upload">

      <div className="container">

        <div className="upload-header">

          <h2>Upload Satellite Image</h2>

          <p>
            Upload Optical, SAR or Multispectral satellite image
            to retrieve similar images using AI.
          </p>

        </div>

        <div className="upload-card">

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleImage}
            id="imageUpload"
          />

          <label
            htmlFor="imageUpload"
            className="upload-area"
          >

            {selectedImage ? (

              <img
                src={selectedImage}
                alt="Preview"
                className="preview-image"
              />

            ) : (

              <>

                <FaCloudUploadAlt className="upload-icon" />

                <h3>Drag & Drop</h3>

                <p>or click here to upload image</p>

              </>

            )}

          </label>

          {fileName && (

            <div className="file-details">

              <FaImage />

              <span>{fileName}</span>

            </div>

          )}

          <div className="upload-buttons">

            <button className="primary-btn">

              <FaSearch />

              Search Similar Images

            </button>

            <button
              className="secondary-btn"
              onClick={removeImage}
            >

              <FaTrash />

              Remove

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default UploadBox;