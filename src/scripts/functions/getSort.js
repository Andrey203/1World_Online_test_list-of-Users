import { render } from './render';

export function getSort(arr, by) {
  arr.sort((a, b) => a[by].localeCompare(b[by]));
  render(arr);
}
