import re

path = r'c:\Users\rizwa\OneDrive\Desktop\queen\wardrobe\src\pages\Anarkalis.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

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
    
    # generate an id
    import hashlib
    id_hash = "prod_" + hashlib.md5(title.encode()).hexdigest()[:8]
    
    # Extract color
    color_m = re.search(r'<div className=\"swatch\" style={{ backgroundColor: \'(.*?)\' }}></div>', card)
    color = color_m.group(1) if color_m else "Multicolor"
    
    new_btn = f'<button className=\"buying-options-btn\" onClick={{() => handleAddToCart({{ id: \"{id_hash}\", name: \"{title}\", price: {price}, image: \"{img_src}\", color: \"{color}\", size: \"Free Size\" }})}}>Add to Cart</button>'
    
    return card.replace('<button className=\"buying-options-btn\">Buying options</button>', new_btn)

new_content = re.sub(r'{\s*/\*\s*CARD \d+\s*\*/\s*}.*?<button className=\"buying-options-btn\">Buying options</button>\s*</div>\s*</div>', replacer, content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)
print('Anarkalis.jsx updated!')
