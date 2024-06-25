import { ApiProperty } from "@nestjs/swagger";
import { City } from "../entities/city.entity";

export class cityDto {
  @ApiProperty()
  cityName: string;
}

export class stateDto {
  @ApiProperty()
  stateName: string;

  @ApiProperty({ type: [cityDto] })
  cities: City[]
}
