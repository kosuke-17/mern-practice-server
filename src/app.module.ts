import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  // 環境変数を利用する
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
