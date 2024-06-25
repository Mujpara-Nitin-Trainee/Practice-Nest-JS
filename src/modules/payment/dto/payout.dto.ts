import { ApiProperty } from "@nestjs/swagger";

export class paymentDto {

  @ApiProperty()
  scarpId: number;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  status: string;
}