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

all_products = []

for file in jsx_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    page_name = os.path.splitext(os.path.basename(file))[0]

    for match in card_pattern.finditer(content):
        img_src = match.group(5)
        brand = match.group(6).strip().replace('"', '\\"')
        title = match.group(8).strip().replace('"', '\\"')
        price_str = match.group(10).strip()
        price_num = re.sub(r'[^\d]', '', price_str)
        if not price_num: price_num = "0"
        
        unique_id = f"{page_name}_{title}".replace('"', '\\"')
        category = page_name
        
        all_products.append(f"""  {{
    id: "{unique_id}",
    title: "{title}",
    brand: "{brand}",
    price: {price_num},
    originalPrice: {int(price_num) + 5000},
    rating: 4.5,
    reviews: 120,
    discount: "20%",
    category: "{category}",
    image: "{img_src}"
  }}""")

# Remove duplicates just in case, based on id
unique_set = {}
final_list = []
for p_str in all_products:
    id_match = re.search(r'id: "(.*?)",', p_str)
    if id_match:
        pid = id_match.group(1)
        if pid not in unique_set:
            unique_set[pid] = True
            final_list.append(p_str)

js_content = "export const allProducts = [\n" + ",\n".join(final_list) + "\n];\n"

with open(r"c:\Users\tamme\OneDrive\Desktop\modern\indowestern-react\src\data\allProducts.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Generated allProducts.js with {len(final_list)} products!")
