import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
  exports: [TypeOrmModule],
})
// DBに接続されたかの確認を行う処理
export class DatabaseModule {
  constructor(connection: Connection) {
    if (connection.isConnected) {
      console.log('DBに接続成功');
    }
  }
}
