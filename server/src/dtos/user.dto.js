export class UserDto {
    // класс для создания payload для передачи функции, создающей токен
    email;
    id;
    isActivated;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
    }
}
