import {View, Text, StyleSheet} from 'react-native'


export default function Title(){
  return(
    <View>
      <Text style={styles.subtitulo}>Explore as Maravilhosas praias</Text>
      <Text style={styles.texto}>Visite as praias de Fernando de Noronha e mergulhe nas águas azul-turquesa.</Text>
      </View>
  )
}



const styles = StyleSheet.create({
  subtitulo: {
    backgroundColor: 'darkorange',
    fontWeight: 'bold',
    color: 'white',
    height: 40,
    textAlign: 'center',
    padding: 10,
  },

})