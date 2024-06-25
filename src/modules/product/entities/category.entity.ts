import { AbstractEntity } from "src/config/database/entity/abstract.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, UpdateDateColumn } from "typeorm";
import { userScarpDetails } from "./product.entity";

@Entity()
export class productCategory extends AbstractEntity<productCategory> {
  @Column("varchar", { length: 255 })
  categoryName: string;

  @Column("int")
  price: number;

  @CreateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)", onUpdate: "current_timestamp(6)" })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => userScarpDetails, (userScrap) => userScrap.category)
  userScraps: userScarpDetails[];

}