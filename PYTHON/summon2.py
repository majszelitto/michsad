from time import sleep
import math
from minescript import player_position, echo, execute

pos = player_position()
x = math.floor(pos[0])
y = math.floor(pos[1])
z = math.floor(pos[2])

mob = 'bee'
num_mobs = 48
radius = 4

for i in range(num_mobs):
    angle = 2 * math.pi * i / num_mobs
    dx = round(math.cos(angle) * radius, 2)
    dz = round(math.sin(angle) * radius, 2)
    sx = x + dx
    sy = y
    sz = z + dz
    execute(f'/summon minecraft:{mob} {sx} {sy} {sz}')
    # sleep(1)
    