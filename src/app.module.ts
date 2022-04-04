import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ComponentsModule } from './components/components.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  // 環境変数を利用する
  // ローカル環境だったらplaygroundを利用する
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: true,
    }),
    ComponentsModule,
  ],
})
export class AppModule {}
