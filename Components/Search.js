import React  from 'react'
import { TextInput, StyleSheet,SafeAreaView } from 'react-native'

const Search = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          
          placeholder="Search"
          keyboardType="numeric"
        />
        
        
      </SafeAreaView>
    );
  };
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 20,
        color: 'black',
        marginTop: 30,
        
        borderRadius: 20,
        borderColor: 'black',
        backgroundColor: 'white'

    },
})
export default Search;
