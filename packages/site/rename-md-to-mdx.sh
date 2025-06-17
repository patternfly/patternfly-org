#!/bin/bash

# Find all .md files in the src directory and its subdirectories
find src -name "*.md" | while read -r file; do
    # Create the new filename by replacing .md with .mdx
    new_file="${file%.md}.mdx"
    
    # Only rename if the file exists and hasn't been renamed already
    if [ -f "$file" ] && [ ! -f "$new_file" ]; then
        echo "Renaming: $file -> $new_file"
        mv "$file" "$new_file"
    fi
done

echo "Renaming complete!" 