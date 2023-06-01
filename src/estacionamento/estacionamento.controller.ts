import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstacionamentoService } from './estacionamento.service';
import { CreateEstacionamentoDto } from './dto/create-estacionamento.dto';
import { UpdateEstacionamentoDto } from './dto/update-estacionamento.dto';

@Controller('estacionamento')
export class EstacionamentoController {
  constructor(private readonly estacionamentoService: EstacionamentoService) {}

  @Post()
  create(@Body() createEstacionamentoDto: CreateEstacionamentoDto) {
    return this.estacionamentoService.create(createEstacionamentoDto);
  }

  @Get()
  findAll() {
    return this.estacionamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estacionamentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstacionamentoDto: UpdateEstacionamentoDto) {
    return this.estacionamentoService.update(+id, updateEstacionamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estacionamentoService.remove(+id);
  }
}
