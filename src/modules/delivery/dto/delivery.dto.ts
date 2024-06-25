import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class deliveryDto {

  @ApiProperty()
  @IsNotEmpty()
  scrapId: number;

  @ApiProperty()
  @IsNotEmpty()
  deliveryBoyId: number;

  @ApiProperty()
  @IsNotEmpty()
  pickUpAddressId: number;

  @ApiProperty()
  @IsNotEmpty()
  deliveryAddressId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string;
}