#!/usr/bin/env python3
"""
Generates tutorials-generated.json from MDX files in the tutorials folder.
This file is used by the tutorials showcase page to display all tutorials.
Usage: python generate_tutorials.py
"""

import os
import re
import json
from pathlib import Path

# Configuration
TUTORIALS_DIR = Path(__file__).parent / "tutorials"
OUTPUT_FILE = Path(__file__).parent / "src" / "data" / "tutorials-generated.json"


def parse_frontmatter(content: str) -> dict:
    """Parse YAML frontmatter from MDX content."""
    frontmatter_match = re.match(r'^---\s*\n([\s\S]*?)\n---', content)
    
    if not frontmatter_match:
        return {}
    
    frontmatter = {}
    lines = frontmatter_match.group(1).split('\n')
    current_key = None
    in_array = False
    array_values = []
    
    for line in lines:
        # Check for array items (lines starting with -)
        if in_array and line.strip().startswith('-'):
            value = line.strip()[1:].strip()
            # Remove quotes if present
            if (value.startswith('"') and value.endswith('"')) or \
               (value.startswith("'") and value.endswith("'")):
                value = value[1:-1]
            array_values.append(value)
            continue
        
        # If we were in an array and hit a non-array line, save the array
        if in_array and current_key:
            frontmatter[current_key] = array_values
            in_array = False
            array_values = []
        
        # Check for key: value pairs
        key_match = re.match(r'^(\w+):\s*(.*)$', line)
        if key_match:
            key = key_match.group(1)
            value = key_match.group(2).strip()
            current_key = key
            
            if value == '' or value == '[]':
                # This might be the start of an array or empty value
                if value == '[]':
                    frontmatter[key] = []
                else:
                    in_array = True
                    array_values = []
            else:
                # Clean up the value (remove quotes)
                if (value.startswith('"') and value.endswith('"')) or \
                   (value.startswith("'") and value.endswith("'")):
                    value = value[1:-1]
                
                # Handle null values
                if value.lower() == 'null':
                    value = None
                
                frontmatter[key] = value
    
    # Don't forget the last array if we ended in one
    if in_array and current_key:
        frontmatter[current_key] = array_values
    
    return frontmatter


def get_mdx_files():
    """Get all MDX files in the tutorials directory."""
    if not TUTORIALS_DIR.exists():
        print(f"Warning: Tutorials directory not found: {TUTORIALS_DIR}")
        return []
    
    files = []
    for file in TUTORIALS_DIR.iterdir():
        if file.suffix == '.mdx':
            files.append({
                'filename': file.name,
                'id': file.stem,
                'path': file
            })
    
    return files


def process_tutorial(file_info: dict) -> dict:
    """Process a single tutorial MDX file."""
    content = file_info['path'].read_text(encoding='utf-8')
    frontmatter = parse_frontmatter(content)
    
    # Parse sidebar_position as int if present
    sidebar_position = frontmatter.get('sidebar_position')
    if sidebar_position is not None and sidebar_position != '':
        try:
            sidebar_position = int(sidebar_position)
        except (ValueError, TypeError):
            sidebar_position = None
    else:
        sidebar_position = None
    
    return {
        'id': file_info['id'],
        'title': frontmatter.get('title', file_info['id']),
        'description': frontmatter.get('description', ''),
        'tags': frontmatter.get('tags', []),
        'image': frontmatter.get('image') if frontmatter.get('image') else None,
        'sidebar_position': sidebar_position
    }


def main():
    print("📚 Generating tutorials data...")
    
    mdx_files = get_mdx_files()
    print(f"Found {len(mdx_files)} tutorial files")
    
    tutorials = [process_tutorial(f) for f in mdx_files]
    
    # Sort by sidebar_position first, then by title
    def sort_key(t):
        pos = t['sidebar_position'] if t['sidebar_position'] is not None else 9999
        return (pos, t['title'])
    
    tutorials.sort(key=sort_key)
    
    # Ensure output directory exists
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    
    # Write the JSON file
    OUTPUT_FILE.write_text(json.dumps(tutorials, indent=2, ensure_ascii=False))
    print(f"✅ Generated {OUTPUT_FILE} with {len(tutorials)} tutorials")


if __name__ == "__main__":
    main()
