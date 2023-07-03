import os
import markdown
import bleach
import re

def remove_markdown(text):
    # Remove Markdown formatting
    text = re.sub(r'([*_]{1,2})(.*?)\1', r'\2', text)  # Remove bold and italic formatting
    text = re.sub(r'!\[.*?\]\(.*?\)', '', text)  # Remove images
    text = re.sub(r'\[.*?\]\(.*?\)', '', text)  # Remove links
    text = re.sub(r'^[^\w\s]+', '', text, flags=re.MULTILINE)  # Remove unordered lists, bullet points, etc.
    text = re.sub(r'\n{2,}', '\n', text)  # Remove extra line breaks

    # Remove React components and import statements
    text = re.sub(r'<([^<>]+)>', '', text)  # Remove React component tags
    text = re.sub(r'import\s+[^;\n]+\s+from\s+[^;\n]+;', '', text)  # Remove import statements

    return text.strip()

def crawl_folders(folder_path, output_file):
    with open(output_file, 'w', encoding='utf-8') as outfile:
        for root, _, files in os.walk(folder_path):
            for file in files:
                if file.endswith('.mdx'):
                    file_path = os.path.join(root, file)
                    with open(file_path, 'r', encoding='utf-8') as infile:
                        content = infile.read()
                        cleaned_content = remove_markdown(content)
                        outfile.write(cleaned_content)
                        outfile.write('\n\n')  # Adding newline after each file


# Example usage
folder_path = './pages'
output_file = './dataset.txt'

crawl_folders(folder_path, output_file)
print('Content of .mdx files has been written to', output_file)
