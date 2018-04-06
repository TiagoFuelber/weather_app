import { API_URL } from './Constants';

export default function searchLocation(location) {
  return fetch(`${API_URL}${location}`);
}
