import {View, Text, StyleSheet} from 'react-native'


export default function Title() {
  return(
    <View>
      <Text style={styles.botao}>Reserve sua Viagem</Text>

    </View>
  )
}



const styles = StyleSheet.create({
  botao: {
    backgroundColor: 'lightblue',
    color: 'blue',
    fontWeight: 'bold',
    height: 40,
    textAlign: 'center',
    padding: 10,
    margin: 10,

  },

})
