import styles from "@/styles/Product.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const ProductsDetails = ({ data }) => {
  // محاسبه قیمت تخفیفی
  const discountedPrice = data.off
    ? data.price - (data.price * data.off) / 100
    : null;

  // ساخت آرایه‌ای از ستاره‌ها برای نمایش دینامیک
  const renderStars = () => {
    const totalStars = 5;
    const filledStars = Math.floor(data.rating || 4); // اگر امتیاز داده نشد پیش‌فرض ۴
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i < filledStars ? styles.fill_star : styles.empty_star}
        />
      );
    }

    return stars;
  };

  return (
    <div
      className={`${styles.product_main} d-flex flex-column flex-sm-row align-items-center mb-5 justify-content-center text-decoration-none`}
    >
      <img
        className={`${styles.product_img} mb-3 mb-sm-0`}
        src={data.image}
        alt={data.name}
      />

      <div className="px-3" style={{ maxWidth: "500px", color: "#fff" }}>
        <h4 className="mb-3">{data.name}</h4>
        <hr style={{ borderColor: "white" }} />

        <div className={styles.stars}>{renderStars()}</div>

        <div className={styles.price_details}>
          {discountedPrice ? (
            <>
              <p style={{ color: "limegreen", fontWeight: "bold" }}>
                ${discountedPrice.toFixed(2)}
              </p>
              <p style={{ textDecoration: "line-through", color: "gray" }}>
                ${data.price.toFixed(2)}
              </p>
            </>
          ) : (
            <p style={{ fontWeight: "bold" }}>${data.price.toFixed(2)}</p>
          )}
        </div>

        <p className="mb-3">{data.description}</p>

        <button className={styles.shopping_btn}>
          Buy Now
          <FontAwesomeIcon className="ml-2" icon={faShoppingBag} />
        </button>
      </div>
    </div>
  );
};

export default ProductsDetails;
