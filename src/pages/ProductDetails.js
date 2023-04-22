import { useParams } from "react-router-dom";

function ProductDetails() {
    const params = useParams();

    return (
        <div>
            ProductDetails
            <div>Product Id { params.productId }</div>
        </div>
    );
}

export default ProductDetails;