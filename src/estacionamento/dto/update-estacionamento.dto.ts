import { PartialType } from '@nestjs/mapped-types';
import { CreateEstacionamentoDto } from './create-estacionamento.dto';

export class UpdateEstacionamentoDto extends PartialType(CreateEstacionamentoDto) {}
