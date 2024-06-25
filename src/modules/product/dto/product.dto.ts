import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class scrapDto {

  @ApiProperty()
  @IsNotEmpty()
  categoryId: number;

  @ApiProperty()
  @IsNotEmpty()
  scarpKg: number;

  @ApiProperty()
  @IsNotEmpty()
  price: number;

  deliveryStatus: string;

  paymentStatus: string;

}