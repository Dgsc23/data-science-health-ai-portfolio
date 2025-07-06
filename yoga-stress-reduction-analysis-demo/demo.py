"""
Analyze pre/post stress scores from yoga interventions using NVivo/statistics.
"""
import pandas as pd
def analyze_stress(df):
    before = df['score_before']
    after = df['score_after']
    delta = after.mean() - before.mean()
    print(f"Avg change in stress: {delta:.2f}")
    return delta

# Example DataFrame: df = pd.DataFrame({'score_before': [8,7,9], 'score_after': [5,6,6]})
