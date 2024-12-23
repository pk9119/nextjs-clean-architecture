import { inject, singleton } from 'tsyringe'
import Token from '../di/token'
import type { MemberRepository } from '../repository/member'

@singleton()
export class MemberUseCase {
  constructor(@inject(Token.MemberRepository) private readonly repository: MemberRepository) {}

  get(memberId: number) {
    return this.repository.get(memberId)
  }
}
