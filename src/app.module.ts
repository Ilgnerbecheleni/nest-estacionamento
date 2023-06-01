import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstacionamentoModule } from './estacionamento/estacionamento.module';

@Module({
  imports: [EstacionamentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
