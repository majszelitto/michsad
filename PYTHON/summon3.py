from time import sleep
import math
import random
from minescript import player_position, echo, execute

# x, y, z = map(int, player_position())
x, y, z = map(math.floor, player_position())

mobs = ["allay", "bee", "parrot"]
num_mobs = 12
radius = 1

for i in range(num_mobs):
    angle = 2 * math.pi * i / num_mobs
    dx = round(math.cos(angle) * radius, 2)
    dz = round(math.sin(angle) * radius, 2)
    sx = x + dx
    sy = y
    sz = z + dz
    mob = random.choice(mobs)
    execute(f'/summon minecraft:{mob} {sx} {sy} {sz} ')
