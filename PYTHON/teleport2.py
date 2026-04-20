import time
import minescript
from math import floor

x, y, z = minescript.player_position()
# x, y, z = int(x), int(y), int(z)
x, y, z = floor(x), floor(y), floor(z)
minescript.echo(f"Current Position: X={x}, Y={y}, Z={z}")

time.sleep(3)  # Wait for 3 seconds

minescript.execute(f"/tp @p {x+3} {y} {z+3} 0 0")
minescript.echo("Teleported after delay to x+3, z+3 and faced due south.")
