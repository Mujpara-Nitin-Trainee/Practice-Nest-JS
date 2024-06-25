import { AbstractEntity } from "src/config/database/entity/abstract.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, UpdateDateColumn } from "typeorm";
import { permissionMaster } from "./permission.entity";

@Entity()
export class roleMaster extends AbstractEntity<roleMaster> {
  @Column("varchar")
  roleName: string;

  @CreateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)", onUpdate: "current_timestamp(6)" })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToMany(() => permissionMaster, (permission) => permission.role)
  @JoinTable()
  permission: permissionMaster[]
}