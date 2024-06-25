import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsEmail, IsNotEmpty } from "class-validator";
import { AddressDto } from "./address.dto";

export class UserDto {

  id?: number;

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
  @IsDateString()
  dob: Date;

  salt: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  createdAt?: Date;

  updatedAt?: Date;

  deletedAt?: Date | null;

  address: AddressDto[]
}

export class addressUser {

  @ApiProperty()
  addressId: number;

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
  @IsDateString()
  dob: Date;

  salt: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

}