"""
Simulate muscle growth based on training and genetics (clone comparison).
"""
def hypertrophy_simulation(initial_mass, weeks, growth_rate):
    for week in range(weeks):
        initial_mass += growth_rate
        print(f"Week {week+1}: Muscle mass = {initial_mass:.2f}")
    return initial_mass

# Example: hypertrophy_simulation(150, 8, 0.75)
