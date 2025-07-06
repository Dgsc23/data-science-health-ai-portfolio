"""
Log, review, and analyze sponsored social media posts using Google Sheets.
"""
import gspread
def log_sponsor_post(username, brand, link, engagement):
    gc = gspread.service_account(filename='service_account.json')
    sh = gc.open("SponsorshipTracker")
    worksheet = sh.sheet1
    worksheet.append_row([username, brand, link, engagement])
    # Additional code could trigger automated review notifications

# Example usage: log_sponsor_post("besthomereviews", "BrandX", "link", 1200)
