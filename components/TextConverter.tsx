import React from 'react';

const TextConverter = ({ text }) => {
  const convertText = (inputText) => {
    // Regular expression to find @username and URLs
    const usernameRegex = /@(\w+)/g;
      const urlRegex = /(https?:\/\/\S+)/g;
      const boldRegex = /\*\*(.*?)\*\*/g;

    // Replace URLs with anchor elements
    const replacedUrlText = inputText.replace(
      urlRegex,
      (url) => `<a style="color: hsl(var(--nextra-primary-hue)100% 45%/var(--tw-text-opacity));" href="${url}" target="_blank" rel="noopener noreferrer">#${url.split("/").pop()}</a>`
    );
    
    // Replace @username with GitHub URL
    const replacedUsernameText = replacedUrlText.replace(
      usernameRegex,
      (_, username) => `<a style="color: hsl(var(--nextra-primary-hue)100% 45%/var(--tw-text-opacity));" href="https://github.com/${username}" target="_blank" rel="noopener noreferrer">@${username}</a>`
      );
      
        // Replace **bold** with bold text
      const replacedBoldText = replacedUsernameText.replace(
          boldRegex,
          (_, bold) => `<strong>${bold}</strong>`
        );

      const finalText = replacedBoldText.replaceAll("What's Changed", "<h1 style='font-size: large; font-weight: 500'>What's Changed</h1>")
        .replaceAll("New Contributors", "<h1 style='font-size: large; font-weight: 500'>New Contributors</h1>")
      
    // Render the HTML
    return <div dangerouslySetInnerHTML={{ __html: finalText }} />;
  };

  return <>{convertText(text)}</>;
};

export default TextConverter;
