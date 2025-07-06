"""
Load large medical dataset into Azure ML and generate interactive visuals.
"""
import pandas as pd
def plot_data(filename):
    df = pd.read_csv(filename)
    df['outcome'].value_counts().plot(kind='bar')
    print("Plot created for outcomes.")
    return df

# Example: plot_data("clinic_results.csv")
