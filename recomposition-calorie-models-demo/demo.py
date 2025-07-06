"""
Daily calorie balance and recomposition buffer calculation.
"""
def recomposition_buffer(calories_in, calories_out, buffer_score):
    net = calories_in - calories_out
    status = "Surplus" if net > 0 else "Deficit"
    print(f"Buffer Score: {buffer_score} | Net Calories: {net} | Status: {status}")
    return status

# Example: recomposition_buffer(3000, 2800, 14)
