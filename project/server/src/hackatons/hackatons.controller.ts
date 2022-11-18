import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HackatonsService } from './hackatons.service';
import { CreateHackatonDto } from './dto/create-hackaton.dto';
import { UpdateHackatonDto } from './dto/update-hackaton.dto';

@Controller('hackatons')
export class HackatonsController {
  constructor(private readonly hackatonsService: HackatonsService) {}

  @Post()
  create(@Body() createHackatonDto: CreateHackatonDto) {
    return this.hackatonsService.create(createHackatonDto);
  }

  @Get()
  findAll() {
    return this.hackatonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hackatonsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHackatonDto: UpdateHackatonDto) {
    return this.hackatonsService.update(+id, updateHackatonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hackatonsService.remove(+id);
  }
}
