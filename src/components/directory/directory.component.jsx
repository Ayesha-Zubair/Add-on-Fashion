import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: "Jewellery",
    imageUrl: "https://images.unsplash.com/photo-1620656798579-1984d9e87df7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    route:'shop/jewellery',
  },
  {
    id: 2,
    title: "Handbags",
    imageUrl: "https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    route:'shop/handbags',
  },
  {
    id: 3,
    title: "Others",
    imageUrl: "https://images.unsplash.com/photo-1582142366243-0b6a4aca0d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    route:'shop/others',
  },
  {
    id: 4,
    title: "Footwear",
    imageUrl: "https://images.unsplash.com/photo-1574791418059-2e8d961ab4fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80",
    route:'shop/footwear',
  },
  {
    id: 5,
    title: "Watches",
    imageUrl: "https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    route:'shop/watches',
  }
]


const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;