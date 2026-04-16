import re

with open(r"c:\Users\rizwa\OneDrive\Desktop\queen\wardrobe\src\pages\Lehengas.jsx", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("function Lehengas()", "function BridalLehenga()")
content = content.replace("export default Lehengas;", "export default BridalLehenga;")
content = content.replace('id: "Lehengas_', 'id: "BridalLehenga_')

# empty image src
content = re.sub(r'src="https?://[^"]+"', 'src=""', content)
content = re.sub(r'image:\s*"https?://[^"]+"', 'image: ""', content)

with open(r"c:\Users\rizwa\OneDrive\Desktop\queen\wardrobe\src\pages\BridalLehenga.jsx", "w", encoding="utf-8") as f:
    f.write(content)
