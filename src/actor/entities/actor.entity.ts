import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MovieEntity } from '../../movie/entities/movie.entity';

@Entity('actors')
export class ActorEntity {
  //id created updated
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 64 })
  name: string;

  @ManyToMany(() => MovieEntity, (movie) => movie.actors)
  movies: MovieEntity[];

  //Date decorators
  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updatd_at',
  })
  updatedAt: Date;
}
