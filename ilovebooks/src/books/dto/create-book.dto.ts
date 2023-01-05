import { IsString } from 'class-validator';

export class CreateBookDto {
  //dto data transfer object they are just objects not business logic it has info that is fetched from UI like what is shown to user
  @IsString()
  readonly name: string;

  @IsString()
  readonly author: string[];

  @IsString({ each: true })
  readonly critics: string[];
}
