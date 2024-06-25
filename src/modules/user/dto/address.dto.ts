import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail } from "class-validator";
import { addressMaster } from "src/modules/address/entities/address.entity";

export class AddressDto {

  @ApiProperty()
  cityId: number;

  @ApiProperty()
  area: string;

  @ApiProperty()
  pincode: number;

}

export class userAddresses {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  mobileNo: number;

  @ApiProperty()
  @IsNotEmpty()
  dob: Date;

  salt: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ type: [AddressDto] })
  address: addressMaster[];
}
