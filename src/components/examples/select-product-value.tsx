import ExampleContainer from "../example-container";
import ProductActions from "./product/product-actions";
import ProductDescription from "./product/product-description";
import ProductPrice from "./product/product-price";

const SelectProductValue = () => {
  return (
    <ExampleContainer title="Select Product Value">
      <div className="flex gap-6">
        <ProductDescription />
        <ProductPrice />
        <ProductActions />
      </div>
    </ExampleContainer>
  );
};

export default SelectProductValue;
