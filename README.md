# Expo Image Component Silent URI Loading Failure

This repository demonstrates a bug where the Expo `Image` component fails to load images from certain URIs without providing a clear error message. The issue is that the image simply doesn't display, and standard debugging techniques may not easily reveal the cause.  The solution involves implementing more robust error handling and URI validation.

## Bug Reproduction

The `bug.js` file contains code that attempts to load an image from a URI that is either malformed or points to an unavailable resource. Observe that the image does not render. 

## Solution

The `bugSolution.js` file offers a corrected implementation. It incorporates more detailed error handling to catch URI loading failures and provides fallback mechanisms, such as displaying a placeholder image.