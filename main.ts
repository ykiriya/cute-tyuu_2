input.onButtonPressed(Button.A, function () {
    let paw = 0
    for (let index = 0; index < 7; index++) {
        Custom.Forward_line(2, paw)
    }
    Custom.Stop_c()
    Custom.Forwar_dis(5, 0)
    Custom.Stop_c()
    Custom.Turn_R(6)
    Custom.Stop_c()
    Custom.Back_dis(3, 0)
    basic.pause(200)
    for (let index = 0; index < 3; index++) {
        Custom.Forward_line(2, paw)
    }
    Custom.Stop_c()
    Custom.Forwar_dis(5, 0)
    Custom.Turn_R(6)
    Custom.Back_dis(3, 0)
    for (let index = 0; index < 7; index++) {
        Custom.Forward_line(2, paw)
    }
    Custom.Forwar_dis(5, 0)
})
input.onButtonPressed(Button.B, function () {
	
})
