import { IUser } from "@/models/IUser";
import { IGetUserByIdRepository } from "@/repositories/user/interfaces/IGetUserByIdRepository";

export class GetUserByIdUseCase {
  constructor(
    private readonly getUserByIdRepository: IGetUserByIdRepository,
  ) {}

  async execute(id: string): Promise<IUser> {
    const user = await this.getUserByIdRepository.getUserById(id);

    return user;
  }
}