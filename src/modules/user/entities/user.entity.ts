import { addressMaster } from 'src/modules/address/entities/address.entity';
import { AbstractEntity } from 'src/config/database/entity/abstract.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, UpdateDateColumn } from 'typeorm';

@Entity()
export class User extends AbstractEntity<User> {
  @Column('varchar', { length: 255 })
  name: string;

  @Column('varchar', { length: 255 })
  email: string;

  @Column('bigint')
  mobileNo: number;

  @Column('date')
  dob: Date;

  @Column('varchar', { length: 255 })
  salt: string;

  @Column('varchar', { length: 255 })
  password: string;

  @CreateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)", onUpdate: "current_timestamp(6)" })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToMany(() => addressMaster, (address) => address.user, { cascade: true })
  address: addressMaster[];
}
