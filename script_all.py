import os
import glob
import re
import hashlib

pages_dir = r"c:\Users\rizwa\OneDrive\Desktop\queen\wardrobe\src\pages"

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # check if "Buying options</button>" is present
    if 'Buying options</button>' not in content:
        return

    print("Processing", filepath)

    def replacer(m):
        card = m.group(0)
        title_m = re.search(r'<p className=\"product-title\">(.*?)</p>', card)
        title = title_m.group(1).strip() if title_m else 'Item'
        
        img_m = re.search(r'<img src=\"(.*?)\"', card)
        img_src = img_m.group(1) if img_m else ''
        
        price_m = re.search(r'<span className=\"price\"><span>\u20b9</span>([\d,]+)</span>', card)
        if not price_m:
             price_m = re.search(r'<span className=\"price\">.*?([\d,]+)</span>', card)
        
        price = int(price_m.group(1).replace(',', '')) if price_m else 1000
        
        id_hash = "prod_" + hashlib.md5((title+filepath).encode()).hexdigest()[:8]
        
        color_m = re.search(r'<div className=\"swatch\" style={{ backgroundColor: \'(.*?)\' }}></div>', card)
        color = color_m.group(1) if color_m else "Multicolor"
        
        new_btn = f'<button className=\"buying-options-btn\" onClick={{() => handleAddToCart({{ id: \"{id_hash}\", name: \"{title}\", price: {price}, image: \"{img_src}\", color: \"{color}\", size: \"Free Size\" }})}}>Add to Cart</button>'
        
        return card.replace('<button className=\"buying-options-btn\">Buying options</button>', new_btn)

    # Replace block with optional comments
    new_content = re.sub(r'(?:{\s*/\*\s*CARD \d+\s*\*/\s*}\s*)?<div className=\"product-card\".*?<button className=\"buying-options-btn\">Buying options</button>\s*</div>\s*</div>', replacer, content, flags=re.DOTALL)

    # Now let's inject useShop if needed
    if 'handleAddToCart(' in new_content and 'const handleAddToCart' not in new_content:
        # Need to find the component name
        comp_name_m = re.search(r"function\s+(\w+)\s*\(", new_content)
        if not comp_name_m:
             comp_name_m = re.search(r"const\s+(\w+)\s*=\s*\(\)\s*=>", new_content)
             
        if comp_name_m:
             comp_name = comp_name_m.group(1)
             
             # inject imports
             if 'useShop' not in new_content:
                 import_str = "import { useShop } from '../context/ShopContext';\n"
                 # add after last import
                 last_import_idx = new_content.rfind('import ')
                 if last_import_idx != -1:
                     end_of_line = new_content.find('\n', last_import_idx)
                     new_content = new_content[:end_of_line+1] + import_str + new_content[end_of_line+1:]
             
             # inject handleAddToCart inside component
             func_def = comp_name_m.group(0)
             idx = new_content.find(func_def)
             after_brace = new_content.find('{', idx)
             
             hook_str = "\n    const { addToCart } = useShop();\n    const handleAddToCart = (item) => { addToCart(item); };\n"
             new_content = new_content[:after_brace+1] + hook_str + new_content[after_brace+1:]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Done processing", filepath)

for fpath in glob.glob(os.path.join(pages_dir, '*.jsx')):
    process_file(fpath)
