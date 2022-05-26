import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      username: 'user',
      password: 'password',
      database: 'db',
      entities: [],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
