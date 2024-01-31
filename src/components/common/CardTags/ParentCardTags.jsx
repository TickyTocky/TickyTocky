import CardTags from '.';
import { tags } from './CardTagsMockData.json';

const ParentCardTags = () => {
  console.log(tags);
  return <CardTags data={tags} />;
};

export default ParentCardTags;
