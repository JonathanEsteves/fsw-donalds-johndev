import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="p-5 border border-blue-500 rounded-xl">
      <h1 className="text-white bg-gray-500"> Hello Next!</h1>
      <Button>FSW DONALDS@John</Button>
      <Input placeholder="Let's go finish this project!" />
    </div>
  );
};

export default ProductPage;
