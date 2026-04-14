import os
import re
import glob

# Search for all jsx files in src/pages
src_pages_dir = r"c:\Users\tamme\OneDrive\Desktop\modern\indowestern-react\src\pages"
jsx_files = glob.glob(os.path.join(src_pages_dir, "*.jsx"))

# Regex to safely inject WishlistHeart
# First find product-card and extract the title
product_card_regex = re.compile(
    r'(<div className="product-card">)(.*?)<p className="product-title">(.*?)</p>', 
    re.DOTALL
)

for file in jsx_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Only process pages that actually have product-card
    if '<div className="product-card">' not in content:
        continue
        
    # Check if we already injected it
    if 'import WishlistHeart' in content:
        continue
        
    # Inject import statement after the other imports
    import_matches = list(re.finditer(r'^import .*?;?\n', content, re.MULTILINE))
    if import_matches:
        last_import = import_matches[-1]
        insert_pos = last_import.end()
        # insert
        content = content[:insert_pos] + "import WishlistHeart from '../components/WishlistHeart';\n" + content[insert_pos:]
    else:
        continue

    # Replace <div className="product-card"> with position relative
    # and insert WishlistHeart
    def replacer(match):
        start_tag = '<div className="product-card" style={{ position: "relative" }}>'
        inner = match.group(2)
        title = match.group(3).replace('"', '&quot;') # safe escaping
        return f'{start_tag}\n                        <WishlistHeart item="{title}" />{inner}<p className="product-title">{match.group(3)}</p>'

    new_content = product_card_regex.sub(replacer, content)
    
    # Check if anything changed
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {os.path.basename(file)}")
