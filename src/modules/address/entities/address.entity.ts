import { AbstractEntity } from "src/config/database/entity/abstract.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, UpdateDateColumn } from "typeorm";
import { City } from "./city.entity";
import { User } from "src/modules/user/entities/user.entity";

@Entity()
export class addressMaster extends AbstractEntity<addressMaster> {
  @Column()
  area: string;

  @Column()
  pincode: number;

  @CreateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)", onUpdate: "current_timestamp(6)" })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToMany(() => User, (user) => user.address)
  @JoinTable()
  user: User[];

  @ManyToOne(() => City, (city) => city.address, { cascade: true })
  city: City;

  @Column()
  cityId: number;
}