import type { User } from "../models/User.js";
import { log } from "../utils/Logger.js";

export class UserService {
    private users: User[] = [];

    add(user: User): void {
        this.users.push(user);
        log(`Added ${user.name}`);
    }

    list(): readonly User[] {
        return this.users;
    }
}
