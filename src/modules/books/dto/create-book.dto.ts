import { Type } from 'class-transformer';
import {
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @MinLength(2)
  title: string;

  @IsString()
  @MinLength(2)
  author: string;

  @IsInt()
  @Min(5)
  @Max(100)
  @Type(() => Number)
  ageRestriction: number;

  @IsString()
  @IsOptional()
  image?: string;
}
