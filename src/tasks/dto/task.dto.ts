import { TaskStatus } from "../task.entity";
import { IsIn, IsLowercase, IsNotEmpty, IsOptional, IsString, MinLength} from 'class-validator';

export class CreateTaskDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}

export class UpdateTaskDTO {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @IsIn([
        TaskStatus.DONE,
        TaskStatus.IN_PROGRESS,
        TaskStatus.PENDING
    ])
    status?: TaskStatus;
}