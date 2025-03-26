import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';
import { Book } from './entities/Book.entities';
import { Author } from './entities/Author.entities';
import { AuthorModule } from './author/author.module';
import { UploadModule } from './upload/upload.module';
import { ProfileModule } from './profile/profile.module';
import { AuthorProfile } from './entities/AuthorProfile.entities';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'TypeormProject',
      entities: [Book, Author, AuthorProfile],
    }),
    BookModule,
    AuthorModule,
    UploadModule,
    ProfileModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
