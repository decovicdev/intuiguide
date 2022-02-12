import { StyleSheet } from "react-native"
import { PRIMARY_TINT_COLOR, SECONDARY_TINT_COLOR } from "./Colors"

const systemWeights = {
  thin: {
    // fontFamily: "System",
    fontFamily: "raleway-thin",
    // fontWeight: 100
  },
  light: {
    // fontFamily: "System",
    fontWeight: 300
  },
  regular: {
    // fontFamily: "System",
    fontFamily: "raleway",
    // fontWeight: 400
  },
  semibold: {
    // fontFamily: "System",
    fontFamily: "raleway-semibold",
    // fontWeight: 600
  },
  bold: {
    fontFamily: "raleway-bold",
    // fontWeight: 700
  },
} as const

const Sizes = {
  spacing:{
    s:8,
    m:16,
    l:24,
    xl:40
  },
  

  icon:{
    s:18,
    m:24,
    l:30
  },

  fontsize:{
    h1:65,
    h2:34,
    h3:28,
    h4:22,
    h5:20,
    body:17,
    body2:15,
  }

}
type StylesType = ReturnType<typeof StyleSheet.create>

const Fonts = {

  largeTitle:{
    fontSize:65,
    ...systemWeights.bold,
  },
  title:{
    fontSize:34,
    ...systemWeights.bold
  },
  heading:{
    fontSize:28,
    ...systemWeights.semibold

  },
  subHeading:{
    fontSize:22,
    ...systemWeights.bold

  },
  body:{
    fontSize:18,
    ...systemWeights.regular
  },
  bodyEmphasized:{
    fontSize:18,
    ...systemWeights.semibold
  },
  footNote:{
    fontSize:16,
    ...systemWeights.regular

  },
  footNoteEmphasized:{
    fontSize:16,
    ...systemWeights.semibold
  }

}as const


const Styles:StylesType = {
 center:{
   flexDirection:"row"
 },
 centerH:{
   alignItems:"center"
 },
 centerV:{
   justifyContent:"center"
 },
 centerVH:{
  justifyContent:"center",
  alignItems:"center"
 },
 bgPrimaryTint:{
   backgroundColor:PRIMARY_TINT_COLOR
 },
 bgSecTint:{
  backgroundColor:SECONDARY_TINT_COLOR
}
}

export {Sizes,Styles,Fonts}