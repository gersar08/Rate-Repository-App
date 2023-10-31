import { Platform } from "react-native"

const theme = {
    AppBar: {
        primary: '#24292e',
        textPrimary: '#ffff',
        secondary: '#888'
    },
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        white: '#ffff'

    },
    fontSizes: {
        body: 14,
        subheading: 16
    },
    fonts: {
        main: Platform.select({
            ios: 'Arial',
            android: 'Roboto',
            default: 'system'
        })
    }, 
    fontWeights: {
        normal: '400',
        big: '700',
        bold: 'bold' 
    }

}

export default theme