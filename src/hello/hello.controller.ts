import { Controller, Get, Param } from "@nestjs/common";
import { HelloService } from "./hello.service";

@Controller("hello")
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get(":name")
  sayHelloTo(@Param("name") name): string {
    return this.helloService.sayHelloTo(name);
  }
}
