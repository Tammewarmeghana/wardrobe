import os
import re
import glob

src_pages_dir = r"c:\Users\tamme\OneDrive\Desktop\modern\indowestern-react\src\pages"
jsx_files = glob.glob(os.path.join(src_pages_dir, "*.jsx"))

card_pattern = re.compile(
    r'(<div className="product-card"[^>]*>\s*)'
    r'(<WishlistHeart item=\{.*?\}.*?/>)'
    r'(.*?)'
    r'(<img src="([^"]*)".*?className="card-image".*?>.*?)'
    r'<h3 className="brand-name">([^<]*)</h3>(.*?)'
    r'<p className="product-title">([^<]*)</p>(.*?)'
    r'<div className="pricing-block">.*?'
    r'<span className="price">(.*?)</span>\s*</?(?:span|div)', 
    re.DOTALL
)

for file in jsx_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    def replacer(match):
        old_heart = match.group(2)
        img_src = match.group(5)
        brand = match.group(6).strip().replace('"', '&quot;')
        title = match.group(8).strip().replace('"', '&quot;')
        price_html = match.group(10).strip()
        
        page_name = os.path.splitext(os.path.basename(file))[0]
        unique_id = f"{page_name}_{title}".replace('"', '&quot;')
        
        # JSX object string formatted. Use JSX Fragment for price.
        obj_str = f'{{{{ id: "{unique_id}", title: "{title}", image: "{img_src}", brand: "{brand}", price: <>{price_html}</> }}}}'
        new_heart = f'<WishlistHeart item={obj_str} />'
        
        return match.group(0).replace(old_heart, new_heart, 1)

    new_content = card_pattern.sub(replacer, content)

    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {os.path.basename(file)}")
