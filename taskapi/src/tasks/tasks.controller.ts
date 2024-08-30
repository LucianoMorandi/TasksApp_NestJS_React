import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';

// 'tasks' es la ruta que va a acceder el cliente
@Controller('tasks')

//vamos a consumir los servicios creados
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    findAll() {
        return this.tasksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.tasksService.findOne(id);
    }

    @Post()
    create(@Body() body: CreateTaskDto) {
        return this.tasksService.create(body);
    }

    @Delete(':id')
    delete(@Param('id') id: string ) {
        return this.tasksService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: any) {
        return this.tasksService.update(id, body);
    }

}
