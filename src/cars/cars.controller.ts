import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, Param, Patch, Post } from '@nestjs/common/decorators';
import { CarsService } from './cars.service';

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
    getCardById( @Param('id', ParseIntPipe) id: number){
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar(@Body() body: any){
        return body;
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
