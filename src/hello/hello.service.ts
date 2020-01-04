import { Injectable } from "@nestjs/common";

@Injectable()
export class HelloService {
  sayHelloTo(name: string): string {
    return `Hello ${name}!`;
  }
}
