import { Module } from '@nestjs/common';
import { EstacionamentoService } from './estacionamento.service';
import { EstacionamentoController } from './estacionamento.controller';

@Module({
  controllers: [EstacionamentoController],
  providers: [EstacionamentoService]
})
export class EstacionamentoModule {}
