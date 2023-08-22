import { PartialType } from '@nestjs/mapped-types';
import { CreateConsoleDto } from './create-console.dto';

export class UpdateConsolesDto extends PartialType(CreateConsoleDto) {}
