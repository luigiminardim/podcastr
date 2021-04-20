// theme.js
import { extendTheme } from "@chakra-ui/react"
import foundations from './foundations'
import global from './global'

export default extendTheme({
  ...foundations,
  styles: {
    global,
  },
})