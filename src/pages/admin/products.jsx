import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription } from "@/components/ui/sheet";
import { Fragment, useState } from "react";

function AdminProducts() {
  const [openCreateProduct, setOpenCreateProduct] = useState(false);

  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProduct(true)}>
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
      <Sheet
        open={openCreateProduct}
        onOpenChange={() => setOpenCreateProduct(false)}
      >
        <SheetDescription>Add a new product</SheetDescription>
        <SheetContent side="right" className="overflow-auto"></SheetContent>
      </Sheet>
    </Fragment>
  );
}

export default AdminProducts;
