import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: 'ec2-3-214-2-141.compute-1.amazonaws.com',
      username: 'sxnstrkfjdxagm',
      password: '640cbf33478d09708b70bca69a0faba4fac34147c3c960fb54a7bb8fd9dc6b84',
      database: 'd1hi9vg8kln5b1',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      "ssl": true,
      "extra": {
        "ssl": {
          "rejectUnauthorized": false
        }
      }
    }),
    ApiModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }