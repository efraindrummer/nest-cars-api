import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, Param, Patch, Post } from '@nestjs/common/decorators';
import { ParseUUIDPipe } from '@nestjs/common/pipes';
import { CarsService } from './cars.service';
import { CreateCardDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCardById( @Param('id', ParseUUIDPipe) id: string){
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar(@Body() createCarDto: CreateCardDto){
        return createCarDto;
    }
    
    @Patch(':id')
    updateCar(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any
    ){
        return body;
    }

    @Delete()
    deleteCar(@Param('id', ParseIntPipe) id: number){
        return {
            method: 'delete',
            id
        }
    }
}
