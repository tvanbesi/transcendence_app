import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateMessageDto } from "./create-message.dto";
import { Message } from "./message.entity";
import { MessageService } from "./message.service";

@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService) {}

    //@Post()
    //create(@Body() createMessageDto: CreateMessageDto) {
    //    this.messageService.createMessage(createMessageDto);
    //}

    @Get()
    findAll(): Promise<Message[]> {
        return this.messageService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Message> {
        return this.messageService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.messageService.remove(id);
    }
}