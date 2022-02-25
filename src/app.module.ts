/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(),'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type:"mongodb",
      database:"testdb",
      url: 'mongodb://localhost/testdb',
      entities:['dist/**/*.entity{.ts,.js}'],
      synchronize:true,
    }),
    UserModule,
    AuthModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
