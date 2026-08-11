import { User } from "./models/User.js";
import { UserService } from "./services/UserService.js";

namespace AppInfo {
    export const name = "User Manager";
}

const service = new UserService();

service.add(new User(1, "Alice"));
service.add(new User(2, "Bob"));

console.log(AppInfo.name);

for (const user of service.list()) {
    console.log(`${user.id}: ${user.name}`);
}
