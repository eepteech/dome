player.onChat("run", function () {
    shapes.sphere(
    GLOWSTONE,
    world(15, 40, 0),
    10,
    ShapeOperation.Replace
    )
    shapes.sphere(
    AIR,
    world(15, 40, 0),
    9,
    ShapeOperation.Replace
    )
    blocks.fill(
    AIR,
    world(10, 30, -5),
    world(20, 40, 5),
    FillOperation.Replace
    )
})
