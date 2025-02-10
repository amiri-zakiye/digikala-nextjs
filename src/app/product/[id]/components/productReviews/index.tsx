import { getProductDataWithParams } from "../../apiLayer";
import CommentSection from "./components/commentSection";
import ProductRatingOverview from "./components/productRatingOverview";
import ProductReviewsSectionTitle from "./components/productReviewsSectionTitle";
import RateCallToAction from "./components/rateCallToAction";

const ProductReviews = async () => {
  const { rating, data_layer } = await getProductDataWithParams();

  return (
    <div className="flex gap-3 w-full">
      <div className="w-[260px] min-w-[260px] h-min sticky top-0">
        <ProductReviewsSectionTitle />
        <ProductRatingOverview
          ratingCount={rating.count ?? 0}
          rate={data_layer.dimension9 ?? 0}
        />
        <RateCallToAction />
      </div>
      <div className="grow min-w-0">
        <CommentSection />
      </div>
    </div>
  );
};
export default ProductReviews;
