from time import sleep
from minescript import player_position, echo, execute
from math import floor

# Get and convert position using map()
# x, y, z = map(int, player_position())
x, y, z = map(floor, player_position())
echo(f"Current Position: X={x}, Y={y}, Z={z}")

sleep(3)  # Wait 3 seconds

execute(f"/tp @p {x+3} {y} {z+3} 0 0")
echo("Teleported after delay to x+3, z+3 and faced due south.")
