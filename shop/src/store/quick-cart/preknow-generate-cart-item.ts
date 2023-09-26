import { Product } from '@/types/preknow';
import isEmpty from 'lodash/isEmpty';
interface Variation {
  conditions?: any;
  bookCovers?: any;
}

function generateItemId(
  itemId: string,
  conditionId?: string,
  bookCoverId?: string
) {
  if (conditionId && bookCoverId) {
    const combineId =
      conditionId < bookCoverId
        ? `${conditionId}.${bookCoverId}`
        : `${bookCoverId}.${conditionId}`;

    return `${itemId}.${combineId}`;
  }

  if (conditionId) return `${itemId}.${conditionId}`;

  return `${itemId}.${bookCoverId}`;
}

function generateItemName(
  itemName: string,
  conditionName?: string,
  bookCoverName?: string
) {
  if (conditionName && bookCoverName)
    return `${itemName} (${conditionName}, ${bookCoverName})`;

  if (!conditionName && !bookCoverName) return itemName;

  return `1${itemName} (${conditionName ? conditionName : bookCoverName})`;
}

export function generateCartItem(item: Product, variation: Variation) {
  const { _id, name, imageUrl, price, oldPrice, quantity } = item;
  if (!isEmpty(variation)) {
    return {
      id: generateItemId(
        _id,
        variation.conditions?._id,
        variation.bookCovers?._id
      ),
      productId: _id,
      name: generateItemName(
        name,
        variation.conditions?.name,
        variation.bookCovers?.name
      ),
      stock: quantity,
      price,
      image: imageUrl,
    };
  }
  return {
    id: _id,
    name,
    image: imageUrl,
    stock: quantity,
    price: price,
  };
}
