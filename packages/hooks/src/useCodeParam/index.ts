import { useQuery } from 'remax';
import { getParams } from './utils';

export default () => {
  const { q } = useQuery();
  const url = decodeURIComponent(q).split('?')[1];
  return getParams(url);
};
