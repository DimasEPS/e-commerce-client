import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

function AdminProductTile({ product }) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <div>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[200px] object-cover rounded-t-lg"
          />
        </div>
        <CardContent>
          <h2 className="text-xl font-bold mb-2">{product?.title}</h2>
          <div>
            <p className="text-gray-700 mb-4">{product?.category}</p>
            <div className="flex items-center justify-between mb-2">
              <span
                className={`$${
                  product?.price ? "line-through" : ""
                } text-lg font-semibold text-green-600`}
              >
                ${product?.price}
              </span>
              <span className="text-lg font-bold text-green-600">
                ${product?.salePrice}
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center ">
          <Button variant="outline">Edit</Button>
          <Button variant="destructive">Delete</Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default AdminProductTile;
