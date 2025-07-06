"""
Track buffer score for recovery/fatigue—integrates Google Forms API.
"""
def log_buffer_score(date, calories, burn, sleep):
    score = (calories - burn) / (sleep or 1)
    print(f"{date}: Buffer score = {score:.2f}")
    # Could send to Google Form via requests.post()
    return score

# Example: log_buffer_score("2025-06-28", 2900, 2700, 8)
