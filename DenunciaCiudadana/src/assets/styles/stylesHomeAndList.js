import { StyleSheet} from 'react-native'

const stylesHomeAndList = StyleSheet.create({
    title:{
        fontSize: 20,
        color: 'blue',
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: 'bold'
    },
    container:{
        paddingHorizontal: "2.5%",
        flex: 1
    },
    complaint:{
        borderColor: 'blue',
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingTop:10
    },
    titleComplaint:{
        fontSize:16,
        fontWeight: 'bold',
    },
    nameAndService:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    img:{
        height: 150,
        width: "100%",
        resizeMode: "cover",
        marginVertical: 7
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingBottom: 5
    },
    button:{
        alignItems: "center",
        backgroundColor: "#E50914",
        padding: 10,
        borderRadius: 7,
    },
    textButton:{
        color: 'white'
    }
})

export { stylesHomeAndList }