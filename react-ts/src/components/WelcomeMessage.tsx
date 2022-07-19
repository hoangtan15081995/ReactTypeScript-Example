import { Box } from '@mui/material'
import React, { SVGAttributes } from 'react'

interface WelcomeMessageProps {
  position: string,
  country?: string
}
function WelcomeMessage({position, country= "Vietnam"}: WelcomeMessageProps) {
  return (
    <Box mb={1} width="400px">
      Welcome {position} from {country}
    </Box>
  )
}

export default WelcomeMessage