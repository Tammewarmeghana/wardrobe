import os
import re

base_path = r"c:\Users\tamme\OneDrive\Desktop\modern\indowestern-react\src\pages"
template_path = os.path.join(base_path, "GownSaree.jsx")

with open(template_path, "r", encoding="utf-8") as f:
    content = f.read()

categories = [
    ("Bodycons", "/bodycon", "Bodycons"),
    ("Sportswear", "/sportswear", "Sportswear"),
    ("MaxiDresses", "/maxidress", "Maxi Dresses"),
    ("Croptops", "/croptops", "Croptops"),
    ("Blazers", "/blazers", "Blazers"),
    ("MaxiSkirts", "/maxiskirts", "Maxi Skirts"),
    ("Formals", "/formals", "Formals"),
    ("KoreanDresses", "/koreanwear", "Korean Dresses")
]

new_sidebar = """<nav className="sidebar-nav">
                    <Link to="/bodycon">Bodycons</Link>
                    <Link to="/sportswear">Sportswear</Link>
                    <Link to="/maxidress">Maxi Dresses</Link>
                    <Link to="/croptops">Croptops</Link>
                    <Link to="/blazers">Blazers</Link>
                    <Link to="/maxiskirts">Maxi Skirts</Link>
                    <Link to="/formals">Formals</Link>
                    <Link to="/koreanwear">Korean Dresses</Link>
                </nav>"""

# Replace the sidebar nav
sidebar_pattern = re.compile(r'<nav className="sidebar-nav">.*?</nav>', re.DOTALL)
template_content = sidebar_pattern.sub(new_sidebar, content)

for comp_name, route, display_name in categories:
    file_content = template_content
    # Replace function name
    file_content = file_content.replace("function GownSaree()", f"function {comp_name}()")
    file_content = file_content.replace("export default GownSaree;", f"export default {comp_name};")
    
    file_path = os.path.join(base_path, f"{comp_name}.jsx")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(file_content)

print("Created 8 files successfully.")
