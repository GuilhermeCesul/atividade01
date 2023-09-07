import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container : {
      
      flex:1,
      padding:24,
      backgroundColor:'#131016'
    },
  
    title : {
  
      color:'#FFF',
      fontSize: 24,
      fontWeight:'bold',
      marginTop: 48
    },
  
    data : {
  
      color:'#FFF'
    },

    input : {

        height: 56,
        backgroundColor: '#1f1e25',
        color: '#FFF',
        paddingLeft: 16,
        borderRadius: 5,
        fontSize: 18,
        flex: 1
    },

    button : {

        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textButton : {

        fontSize: 18,
        color: '#FFF'
    },

    form : {

        flexDirection: 'row',
        marginTop: 24,
        gap: 10
    },

    listEmpty : {

      color: '#FFF',
      fontSize: 14,
      textAlign: 'center'
    }
})
