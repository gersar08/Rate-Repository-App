import React from "react";
import { Text, FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem.jsx";
import useRepositories from "./hooks/useRepositories.js";


const RepositoriesList = () => {
  
const { repositories } = useRepositories();
console.log('RepositoriesList OK')
  return (
    <FlatList data={repositories}
    ItemSeparatorComponent={() => { <Text>  </Text>}}
    renderItem={({ item: repo}) => (
       <RepositoryItem { ... repo} />
      )}
      />
  )
}

export default RepositoriesList;  