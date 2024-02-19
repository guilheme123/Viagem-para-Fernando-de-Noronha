import {View, Text, StyleSheet} from 'react-native'


export default function Title(){
  return(
    <View>
      <Text style={styles.titulo}>Bem-vindo a Fernando de Noronha</Text>
      <Text style={styles.texto}>Descubra o paraiso das praias intocadas e águas cristalinas</Text>


    </View>

  )
}



const styles = StyleSheet.create({
  titulo: {
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold',
    height: 50,
    textAlign: 'center',
    padding: 10,
  },

  texto: {
    margin: 10,
  }

})










