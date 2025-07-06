"""
Auto-generate a pre-filled Google Form URL for daily calorie tracking.
"""
from urllib.parse import urlencode
def create_form_url(date, cals, protein):
    base = "https://forms.gle/YOURFORM"
    params = {"date": date, "calories": cals, "protein": protein}
    url = f"{base}?{urlencode(params)}"
    print(f"Form URL: {url}")
    return url

# Example: create_form_url("2025-06-28", 2900, 210)
