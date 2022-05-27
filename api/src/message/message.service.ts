import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Connection, Repository } from "typeorm";
import { CreateMessageDto } from "./create-message.dto";
import { Message } from "./message.entity";

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>,
        private connection: Connection,
    ) {}

    async createMessage(message: Message) {
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.save(message);

            await queryRunner.commitTransaction();
        } catch (err) {
            await queryRunner.rollbackTransaction();
        } finally {
            await queryRunner.release();
        }
    }

    async findAll(): Promise<Message[]> {
        return this.messageRepository.find();
    }

    findOne(id: string): Promise<Message> {
        return this.messageRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.messageRepository.delete(id);
    }
} 