export interface InventoryState {
  productList: ProductType[];
  categoryList: string[];
  watchList: WatchListType[];
  // shoppings: ShoppingstType[];
}
export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface WatchListType {
  productId: number;
  purchased: boolean;
}
export interface SetWatchListParams {
  productId: number;
}
// export interface ShoppingstType {
//   productId: number;
//   date: string;
// }
// export interface SetShoppingParams {
//   productId: number;
//   date: string;
// }
