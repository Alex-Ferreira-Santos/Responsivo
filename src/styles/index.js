import {StyleSheet,Dimensions} from 'react-native'

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container:{
        flex: 1,
        zIndex: 0,
    },
    contentContainer:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    category:{
        backgroundColor: 'orange',
        borderColor:'#D7CCCC',
        borderWidth: 1,
        position: 'absolute',
        zIndex:1,
        right: 0,
        top: 58,
    },
    categoryButton:{
        borderColor:'#D7CCCC',
        borderWidth: 1,
        backgroundColor: '#F6F6F6',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 40,
        marginLeft: 30,
        marginVertical: 20,
        width: '100%'
        
    },
    line:{
        height: 1,
        width: '90%',
        backgroundColor: '#D1D1D1',
        marginVertical: 20
    },
    image:{
        height: 300,
        width: width - 10,
    },
    thumb:{
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        backgroundColor:'#EC5945',
        paddingHorizontal: 10,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        top: '30%',
        left: '10%'
    },
    buy:{
        position: 'absolute',
        top:0,
        zIndex: 1,
        height: 300,
        width: width - 10,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    off:{
        fontSize: 20,
        color: 'white',
        top: '15%',
        left: '4%'
    },
    comprar:{
        fontSize: 18,
        color: 'white'
    }
});

export default styles