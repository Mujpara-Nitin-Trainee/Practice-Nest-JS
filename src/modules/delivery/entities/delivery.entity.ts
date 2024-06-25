import { AbstractEntity } from "src/config/database/entity/abstract.entity";
import { addressMaster } from "src/modules/address/entities/address.entity";
import { userScarpDetails } from "src/modules/product/entities/product.entity";
import { User } from "src/modules/user/entities/user.entity";
import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, ManyToOne, Entity } from "typeorm";

@Entity()
export class ScarpDelivery extends AbstractEntity<ScarpDelivery> {

  @Column()
  status: string;

  @CreateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)", onUpdate: "current_timestamp(6)" })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => User)
  deliveryBoy: User;

  @ManyToOne(() => userScarpDetails)
  scrap: userScarpDetails;

  @ManyToOne(() => addressMaster)
  pickUpAddress: addressMaster;

  @ManyToOne(() => addressMaster)
  deliveryAddress: addressMaster;

  @Column()
  scrapId: number;

  @Column()
  deliveryBoyId: number;

  @Column()
  pickUpAddressId: number;

  @Column()
  deliveryAddressId: number;
}