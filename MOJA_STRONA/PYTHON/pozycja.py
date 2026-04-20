import minescript
from math import floor

# Get the current player position (floats)
x, y, z = minescript.player_position()

# Convert to integers for clean display
# x, y, z = int(x), int(y), int(z)
x, y, z = floor(x), floor(y), floor(z)

# Show the position in chat
minescript.echo(f"Current Position: X={x}, Y={y}, Z={z}")
