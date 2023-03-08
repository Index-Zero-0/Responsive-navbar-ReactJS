import { FileUploader } from "@aws-amplify/ui-react";

import React from 'react'

export const Home = () => {
  return (
    <>
    <FileUploader
    accessLevel="public"
    acceptedFileTypes={['image/*']}
    variation="drop"
    />
    </>
  )
}
