import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @ApiOperation({ summary: 'Create Authors' })
  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }

  @ApiOperation({ summary: 'Get all Authors' })
  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @ApiOperation({ summary: 'Get one Author By ID' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.authorService.findOne(id);
  }

  @ApiOperation({ summary: 'Update Authors By ID' })
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorService.update(id, updateAuthorDto);
  }

  @ApiOperation({ summary: 'Delete Authors By ID' })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.authorService.remove(id);
  }
}