import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from 'src/entities/Author.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
