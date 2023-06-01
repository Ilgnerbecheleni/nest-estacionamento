import { Injectable } from '@nestjs/common';
import { CreateEstacionamentoDto } from './dto/create-estacionamento.dto';
import { UpdateEstacionamentoDto } from './dto/update-estacionamento.dto';

@Injectable()
export class EstacionamentoService {
  create(createEstacionamentoDto: CreateEstacionamentoDto) {
    return 'This action adds a new estacionamento';
  }

  findAll() {
    return `This action returns all estacionamento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estacionamento`;
  }

  update(id: number, updateEstacionamentoDto: UpdateEstacionamentoDto) {
    return `This action updates a #${id} estacionamento`;
  }

  remove(id: number) {
    return `This action removes a #${id} estacionamento`;
  }
}
