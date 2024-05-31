import { Alert } from '@mui/material'
import React from 'react'

export default function DisplayMessage({response}) {
  return (
    <div>
        {
            response && (
                response.status == 200 ? <h1>some other error</h1> : <Alert severity="success">{response.data}</Alert> 
                    
            )
        }
        
    </div>
  )
}
