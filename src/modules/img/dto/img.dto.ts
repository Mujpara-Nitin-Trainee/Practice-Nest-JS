import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class imgDto {

  @ApiProperty()
  @IsNotEmpty()
  imgReferId: number;

  @ApiProperty()
  @IsNotEmpty()
  imgReferType: string;

  @ApiProperty()
  @IsNotEmpty()
  imgName: string;

}