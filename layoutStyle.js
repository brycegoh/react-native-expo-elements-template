import { StyleSheet } from 'react-native';

export const customStyles = StyleSheet.create({
    container:{
        margin: 10
    },
    hundredHundred:{
        height: '100%',
        width: '100%'
    },
    flexRowSpaceEvenlyCenter: {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "space-evenly",
        "alignItems": "center",
    },
    flexRowSpaceAroundCenter: {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "space-around",
        "alignItems": "center",
    },
    flexRowSpaceBetweenCenter: {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "space-between",
        "alignItems": "center",
    },
    flexRowCenterCenter: {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "center",
        "alignItems": "center",
    },
    flexRowStartCenter: {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "flex-start",
        "alignItems": "center",
    },
    flexRowStartStart: {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "flex-start",
        "alignItems": "flex-start",
    },
    flexRowEndCenter: {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "flex-end",
        "alignItems": "center",
    },

    flexColumnCenterCenter: {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
    },

    flexColumnSpaceAroundCenter: {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "space-around",
        "alignItems": "center",
    },

    flexColumnStartStart: {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "alignItems": "flex-start",
    },

    flexColumnStartCenter: {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "alignItems": "center",
    }
})