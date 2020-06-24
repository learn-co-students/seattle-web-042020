import fetchMock from 'fetch-mock';
import { getAll, getByType } from './data/pets';
import 'whatwg-fetch';

fetchMock.get('/api/pets', getAll());
fetchMock.get('/api/pets?type=cat', getByType('cat'));
fetchMock.get('/api/pets?type=dog', getByType('dog'));
fetchMock.get('/api/pets?type=micropig', getByType('micropig'));

export default fetchMock;
