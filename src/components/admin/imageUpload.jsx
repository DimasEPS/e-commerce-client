import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { Skeleton } from "../ui/skeleton";

function ImageUpload({
  image,
  setImage,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoading,
  imageLoading,
}) {
  const inputRef = useRef(null);
  function handleImageChange(event) {
    console.log(event.target.files);
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
    }
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files?.[0];
    if (droppedFiles) {
      setImage(droppedFiles);
    }
  }

  function handleRemoveImage() {
    setImage(null);
    setUploadedImageUrl("");
    if (inputRef.current) {
      inputRef.current.value = null;
    }
  }

  async function uploadImageToServer() {
    setImageLoading(true);
    const data = new FormData();
    data.append("imageFile", image);
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API_URL}/admin/products/upload-image`,
      data
    );
    // console.log("Response from server:", response);
    // console.log("Image URL:", response.data.result.url);

    if (response?.data?.success) {
      setUploadedImageUrl(response.data.result.url);
      setImageLoading(false);
    }
  }

  useEffect(() => {
    if (image) {
      uploadImageToServer();
    }
  }, [image]);

  return (
    <div className="w-full max-w-md mx-auto">
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-2 border-dashed rounded-lg p-4 mb-4 "
      >
        <Input
          id="image-upload"
          type="file"
          //   className="hidden"
          ref={inputRef}
          onChange={handleImageChange}
        />
        {!image ? (
          <Label
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center h-32 cursor-pointer"
          >
            <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
            <span>Drag & drop or click to upload</span>
          </Label>
        ) : imageLoading ? (
          <Skeleton className="h-10 bg-green-100" />
        ) : (
          <div className="flex items-center justify-between mx-4">
            <div className="flex items-center">
              <FileIcon className="w-8 text-primary mt-2 h-8" />
            </div>
            <p className="text-sm font-medium">{image.name}</p>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={handleRemoveImage}
            >
              <XIcon className="w-4 h-4 " />
              <span className="sr-only">Remove File</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
