import { IsNotEmpty, IsString } from "class-validator";
import { AbstractEntity } from "src/config/database/entity/abstract.entity";
import { userScarpDetails } from "src/modules/product/entities/product.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, UpdateDateColumn } from "typeorm";

@Entity()
export class PayoutMaster extends AbstractEntity<PayoutMaster> {

  @Column()
  @IsNotEmpty()
  amount: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  status: string;

  @CreateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)", onUpdate: "current_timestamp(6)" })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => userScarpDetails)
  scarpPayment: userScarpDetails

  @Column()
  ScapId: number;
}
