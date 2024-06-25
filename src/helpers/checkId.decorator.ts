import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { checkIdPipe } from "./checkId";
import { User } from "src/modules/user/entities/user.entity";
import { userScarpDetails } from "src/modules/product/entities/product.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export const checkImgId = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {


    const request = ctx.switchToHttp().getRequest();
    return request.params.id;
    
    // const imgIdPipe = new checkIdPipe(@InjectRepository(User), @InjectRepository(userScarpDetails));

    // return await imgIdPipe.transform("1", null);

  }
);
