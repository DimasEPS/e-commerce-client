import ImageUpload from "@/components/admin/imageUpload";
import AdminProductTile from "@/components/admin/productTile";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import { addNewProduct, getAllProducts } from "@/store/admin/products-slice";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const initialProduct = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  stock: "",
};

function AdminProducts() {
  const [openCreateProduct, setOpenCreateProduct] = useState(false);
  const [formData, setFormData] = useState(initialProduct);
  const [image, setImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoading, setImageLoading] = useState(false);

  const { products } = useSelector((state) => state.adminProduct);
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(
      addNewProduct({
        ...formData,
        image: uploadedImageUrl,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(getAllProducts());
        setOpenCreateProduct(false);
        setFormData(initialProduct);
        setImage(null);
        toast.success(data?.payload?.message);
      }
    });
  }

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // console.log(products, uploadedImageUrl);

  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProduct(true)}>
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products && products.length > 0 ? (
          products.map((product) => {
            return <AdminProductTile key={product._id} product={product} />;
          })
        ) : (
          <p>No products found.</p>
        )}
      </div>
      <Sheet
        open={openCreateProduct}
        onOpenChange={() => setOpenCreateProduct(false)}
      >
        <SheetContent side="right" className="overflow-auto ">
          <SheetHeader>
            <SheetTitle>Add New Products</SheetTitle>
          </SheetHeader>

          <div className="p-5">
            <ImageUpload
              image={image}
              setImage={setImage}
              uploadedImageUrl={uploadedImageUrl}
              setUploadedImageUrl={setUploadedImageUrl}
              setImageLoading={setImageLoading}
              imageLoading={imageLoading}
            />
            <CommonForm
              formData={formData}
              setFormData={setFormData}
              buttonText="Add Product"
              formControls={addProductFormElements}
              onSubmit={onSubmit}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}

export default AdminProducts;
