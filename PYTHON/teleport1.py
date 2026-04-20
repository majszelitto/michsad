import minescript
from math import floor

# Get and convert player position
x, y, z = minescript.player_position()
# x, y, z = int(x), int(y), int(z)
x, y, z = floor(x), floor(y), floor(z)

minescript.echo(f"Current Position: X={x}, Y={y}, Z={z}")

# Teleport the player relative to current position and face south
minescript.execute(f"/tp @p {x+3} {y} {z+3} 0 0")
minescript.echo(f"Teleported to {x}+3, {z}+3 and faced due south.")
