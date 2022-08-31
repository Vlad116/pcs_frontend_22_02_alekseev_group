const apiHost = "https://fakestoreapi.com";

async function getProducts() {
  const products = fetch(`${apiHost}/products`)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

async function getProductsAverageRating() {
  const result = fetch(`${apiHost}/products`)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      data.forEach((product, index) => console.log(product));
      return data;
    })
    .then((data) => {
      console.log(
        data.filter(
          (product) => product.rating.rate > 4 && product.rating.count > 200
        )
      );
      return data;
    })
    .then((data) => {
      console.log(data);
      const averageProductsRating = data.reduce(
        (acc, item, index, arr) => {
          const { count, rate } = item.rating;

          acc.storeReviewCount += count;

          if (index === arr.length - 1) {
            acc.storeRating = ((acc.storeRating + rate) / arr.length).toFixed(
              2
            );
          } else {
            acc.storeRating += rate;
          }

          return acc;
        },
        {
          storeRating: 0,
          storeReviewCount: 0,
        }
      );
      console.log(averageProductsRating);
      return averageProductsRating;
    });

  return result;
}

async function getAllProductCategories() {
  const categories = fetch(`${apiHost}/products/categories
`);
}

const products = getProducts();

console.log(products);

const avgStoreRatingInfo = getProductsAverageRating();

console.log(avgStoreRatingInfo);

function getRandomBgImage() {
  // получает HTML Element в котором нужно заменить background свойство в стилях
}

let updateBgImageTimer = setInterval(getRandomBgImage(), 360000);

setTimeout(getProducts, 5000);
