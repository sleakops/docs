#!/usr/bin/env python3
"""
Generates config.yml for Sveltia CMS based on the docs folder structure.
Usage: python generate_cms_config.py
"""

import os
from pathlib import Path

# Configuration
DOCS_ROOT = Path(__file__).parent / "docs"
OUTPUT_FILE = Path(__file__).parent / "static" / "admin" / "config.yml"

# Icons for different folder types
ICONS = {
    "docs": "📄",
    "cluster": "🖥️",
    "domain": "🌐",
    "environment": "🔧",
    "network": "🔗",
    "project": "📦",
    "provider": "☁️",
    "quickstart": "🚀",
    "user": "👤",
}

# Backend configuration
BACKEND_CONFIG = """backend:
  name: github
  repo: sleakops/docs
  branch: dev
  base_url: https://sveltia-cms-auth.matias-izquierdo.workers.dev

media_folder: static/img
public_folder: /img

collections:
"""

# Common fields for all collections
def get_fields(is_root=False):
    fields = [
        "      - { name: title, label: Title, widget: string }",
        "      - { name: sidebar_label, label: Sidebar Label, widget: string, required: false }",
        "      - { name: sidebar_position, label: Sidebar Position, widget: number, required: false }",
    ]
    if is_root:
        fields.extend([
            "      - { name: pagination_prev, label: Previous Page, widget: string, required: false }",
            "      - { name: pagination_next, label: Next Page, widget: string, required: false }",
        ])
    fields.append("      - { name: body, label: Body, widget: markdown }")
    return "\n".join(fields)


def get_icon(path_parts):
    """Get the appropriate icon based on the path."""
    if len(path_parts) == 0:
        return ICONS.get("docs", "📄")
    return ICONS.get(path_parts[0], "📁")


def format_label(path_parts):
    """Format the label for a collection."""
    if len(path_parts) == 0:
        return "Root Documentation"
    
    icon = get_icon(path_parts)
    parts_capitalized = [p.replace("_", " ").title() for p in path_parts]
    return f"{icon} {' > '.join(parts_capitalized)}"


def format_name(path_parts):
    """Format the name (slug) for a collection."""
    if len(path_parts) == 0:
        return "docs-root"
    return "-".join(path_parts)


def generate_collection(path_parts, folder_path):
    """Generate YAML for a single collection."""
    name = format_name(path_parts)
    label = format_label(path_parts)
    is_root = len(path_parts) == 0
    
    collection = f"""  - name: {name}
    label: "{label}"
    folder: {folder_path}
    create: true
    extension: mdx
    format: frontmatter
    meta:
      path:
        widget: string
        label: Path
        index_file: index
    fields:
{get_fields(is_root)}
"""
    return collection


def find_all_doc_folders():
    """Find all directories in the docs folder."""
    folders = []
    
    # Add root docs folder
    folders.append(([], "docs"))
    
    # Walk through all subdirectories
    for root, dirs, files in os.walk(DOCS_ROOT):
        # Skip hidden directories
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        
        rel_path = Path(root).relative_to(DOCS_ROOT)
        if str(rel_path) == ".":
            continue
            
        path_parts = list(rel_path.parts)
        folder_path = f"docs/{'/'.join(path_parts)}"
        folders.append((path_parts, folder_path))
    
    return folders


def main():
    print(f"Scanning docs folder: {DOCS_ROOT}")
    
    folders = find_all_doc_folders()
    print(f"Found {len(folders)} folders")
    
    # Generate config
    config = BACKEND_CONFIG
    
    for path_parts, folder_path in sorted(folders, key=lambda x: x[1]):
        print(f"  Adding collection: {folder_path}")
        config += generate_collection(path_parts, folder_path)
        config += "\n"
    
    # Write output
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text(config)
    print(f"\n✅ Generated config at: {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
