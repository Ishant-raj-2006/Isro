import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

function UploadBox() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="upload-box">

      <h2>Upload Satellite Image</h2>

      <label className="upload-area">

        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Preview"
            className="preview-image"
          />
        ) : (
          <>
            <FaCloudUploadAlt className="upload-icon" />
            <p>Drag & Drop or Click to Upload</p>
            <span>Supported: JPG, PNG, JPEG</span>
          </>
        )}

        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={handleImageChange}
          hidden
        />

      </label>

    </div>
  );
}

export default UploadBox;