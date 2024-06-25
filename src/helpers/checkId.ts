import { ArgumentMetadata, BadRequestException, CanActivate, ExecutionContext, Injectable, InternalServerErrorException, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { userScarpDetails } from "src/modules/product/entities/product.entity";
import { User } from "src/modules/user/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class checkIdPipe implements CanActivate {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(userScarpDetails)
    private scarpRepository: Repository<userScarpDetails>
  ) { }

  async canActivate(context: ExecutionContext) {

    const request = context.switchToHttp().getRequest();

    const id = request.params.id;

    if (isNaN(id)) {
      throw new BadRequestException();
    }

    const userEntity = await this.userRepository.findBy({ id: id });

    if (userEntity) {
      return true;
    } else {

      const scarpEntity = await this.scarpRepository.findBy({ id: id });

      if (scarpEntity) {
        return true;
      } else {
        throw new InternalServerErrorException();
      }
    }

  }
}