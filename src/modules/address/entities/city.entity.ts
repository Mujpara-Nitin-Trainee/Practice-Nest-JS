import { AbstractEntity } from "src/config/database/entity/abstract.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, UpdateDateColumn } from "typeorm";
import { State } from "./state.entity";
import { addressMaster } from "./address.entity";

@Entity()
export class City extends AbstractEntity<City> {
  @Column()
  cityName: string;

  @CreateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)", onUpdate: "current_timestamp(6)" })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => addressMaster, (address) => address.city)
  address: addressMaster[];

  @ManyToOne(() => State, (state) => state.cities)
  state: State;

  @Column()
  stateId: number;
}