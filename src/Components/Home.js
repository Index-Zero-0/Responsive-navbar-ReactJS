import { FileUploader, ThemeProvider } from "@aws-amplify/ui-react";

import React from 'react'
const theme = {
    name: 'my-theme',
    tokens: {
      colors: {},
      borderWidths: {
        small: { value: '2px' },
        medium: { value: '4px' },
        large: { value: '8px' },
      },
      radii: {
        xs: { value: '1rem' },
        small: { value: '2rem' },
        medium: { value: '2rem' },
        large: { value: '2rem' },
        xl: { value: '3rem' },
      },
    },
  };
  
export const Home = () => {
  return (
    <ThemeProvider theme={theme}>
    <FileUploader
    hasMultipleFiles={false}
    isResumable={true}
    maxFileCount={1}
    accessLevel="public"
    acceptedFileTypes={['.gif', '.bmp', '.jpeg', '.jpg']}
    variation="drop" />

    </ThemeProvider>
  )
}
